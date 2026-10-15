// Shared hypothetical example: Jaime and Robert, $15.8M household. Each scenario's stages sum to $15.8M.
// Assumes no growth or spending between deaths; illustrative only.
window.ESTATE_FLOW_EXAMPLE = {
  scenarios: [
    { key: 'jaime-first', label: 'Jaime predeceases Robert', title: 'Jaime predeceases Robert',
      stages: [
        { label: 'Before Jaime\u2019s death', nodes: [
          { id: 'ret', label: 'Jaime\u2019s retirement\naccounts', value: 1200000, kind: 'asset' },
          { id: 'inv', label: 'Jaime\u2019s investment\naccounts', value: 7100000, kind: 'asset' },
          { id: 'joint', label: 'Joint investment\naccount', value: 4000000, kind: 'asset' },
          { id: 'abc', label: 'ABC Holdings\n(business interest)', value: 3500000, kind: 'asset' } ] },
        { label: 'At Jaime\u2019s death', nodes: [
          { id: 'rt', label: 'Jaime\u2019s revocable trust', value: 15800000, kind: 'trust', sub: 'Funded at death', from: ['ret', 'inv', 'joint', 'abc'] } ] },
        { label: 'After Jaime\u2019s death', nodes: [
          { id: 'bypass', label: 'Bypass trust', value: 7000000, kind: 'trust', sub: 'Uses Jaime\u2019s exemption', from: ['rt'] },
          { id: 'mte', label: 'Marital trust\n(GST exempt)', value: 300000, kind: 'spouse', from: ['rt'] },
          { id: 'mtn', label: 'Marital trust\n(GST non-exempt)', value: 8500000, kind: 'spouse', from: ['rt'] } ] },
        { label: 'After Robert\u2019s death', nodes: [
          { id: 'tax', label: 'Estate tax', value: 1100000, kind: 'tax', sub: 'Federal + state', from: [{ id: 'mtn', dashed: true }] },
          { id: 'kids', label: 'Children\u2019s trusts', value: 14700000, kind: 'heirs', sub: 'Bypass + marital, net of tax', from: [{ id: 'bypass', dashed: true }, { id: 'mte', dashed: true }, { id: 'mtn', dashed: true }] } ] }
      ] },
    { key: 'robert-first', label: 'Robert predeceases Jaime', title: 'Robert predeceases Jaime',
      stages: [
        { label: 'Before Robert\u2019s death', nodes: [
          { id: 'ret', label: 'Robert\u2019s retirement\naccounts', value: 2600000, kind: 'asset' },
          { id: 'inv', label: 'Robert\u2019s investment\naccounts', value: 5700000, kind: 'asset' },
          { id: 'joint', label: 'Joint investment\naccount', value: 4000000, kind: 'asset' },
          { id: 'abc', label: 'ABC Holdings\n(business interest)', value: 3500000, kind: 'asset' } ] },
        { label: 'At Robert\u2019s death', nodes: [
          { id: 'rt', label: 'Robert\u2019s revocable trust', value: 15800000, kind: 'trust', sub: 'Funded at death', from: ['ret', 'inv', 'joint', 'abc'] } ] },
        { label: 'After Robert\u2019s death', nodes: [
          { id: 'bypass', label: 'Bypass trust', value: 7000000, kind: 'trust', sub: 'Uses Robert\u2019s exemption', from: ['rt'] },
          { id: 'char', label: 'Charitable bequest', value: 800000, kind: 'charity', sub: 'Donor-advised fund', from: ['rt'] },
          { id: 'mt', label: 'Marital trust', value: 8000000, kind: 'spouse', from: ['rt'] } ] },
        { label: 'After Jaime\u2019s death', nodes: [
          { id: 'tax', label: 'Estate tax', value: 900000, kind: 'tax', sub: 'Federal + state', from: [{ id: 'mt', dashed: true }] },
          { id: 'kids', label: 'Children\u2019s trusts', value: 14100000, kind: 'heirs', sub: 'Bypass + marital, net of tax', from: [{ id: 'bypass', dashed: true }, { id: 'mt', dashed: true }] },
          { id: 'char2', label: 'Charity (DAF)', value: 800000, kind: 'charity', sub: 'Granted over time', from: [{ id: 'char', dashed: true }] } ] }
      ] }
  ]
};
