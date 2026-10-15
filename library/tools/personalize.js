// Fill every [data-advisor-slot] with one advisor's roster record.
//   eval(await readFile(PATH_TO('library/tools/personalize.js')));
//   html = personalize(html, advisor)   // advisor = one record from data/advisors.json
function personalize(html, A) {
  const esc = t => String(t ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const set = (h, k, v) => h.replace(new RegExp('(<[^>]*data-advisor="' + k + '"[^>]*>)[^<]*(</)', 'g'), (m, a, b) => a + esc(v) + b);
  html = set(html, 'name', A.nameAsPublished || A.displayName);
  html = A.title ? set(html, 'title', A.title) : html.replace(/<[^>]*data-advisor="title"[^>]*>[^<]*<\/(div|span)>/g, '');
  html = A.email ? set(html, 'email', A.email) : html.replace(/ &middot; <span data-advisor="email"[^>]*>[^<]*<\/span>|<span data-advisor="email"[^>]*>[^<]*<\/span>/g, '');
  html = A.phoneDisplay ? set(html, 'phone', A.phoneDisplay) : html.replace(/ &middot; <span data-advisor="phone"[^>]*>[^<]*<\/span>|<span data-advisor="phone"[^>]*>[^<]*<\/span>/g, '');
  const img = A.headshotJpgUrl || A.headshotUrl;
  html = img
    ? html.replace(/<img data-advisor="headshot"(?! src)/g, () => '<img data-advisor="headshot" src="' + img + '"')
    : html.replace(/<div data-advisor="headshot-wrap"[^>]*><img data-advisor="headshot"[^>]*><\/div>/g, '');
  // Optional fields, used by the Why Farther deck's advisor slide; no-ops on pieces without them.
  const loc = [A.city, A.state].filter(Boolean).join(', ');
  html = loc ? set(html, 'location', loc) : html.replace(/<span data-advisor="location">[^<]*<\/span>/g, '');
  const creds = (A.credentials && A.credentials.length ? A.credentials : (A.designations || [])).slice(0, 4);
  html = creds.length
    ? html.replace(/(<p[^>]*data-advisor="credentials"[^>]*>)[\s\S]*?(<\/p>)/g, (m, a, b) => a + creds.map(c => '<span>' + esc(c) + '</span>').join('') + b)
    : html.replace(/<div class="mitem" data-advisor="credentials-wrap">[\s\S]*?<\/p>\s*<\/div>/g, '');
  if (A.profileUrl) {
    html = html.replace(/<a data-advisor="profile" href="[^"]*">[^<]*<\/a>/g, '<a data-advisor="profile" href="' + A.profileUrl + '">' + esc(A.profileUrl.replace(/^https?:\/\/(www\.)?/, '')) + '</a>');
    html = html.split('data-advisor-qr="ADVISOR_PROFILE_URL"').join('data-advisor-qr="' + A.profileUrl + '"');
  }
  return html;
}
