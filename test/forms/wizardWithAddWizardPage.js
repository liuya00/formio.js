export default {
  'type': 'form',
  'tags': [],
  'components': [{
    'title': 'Page 1',
    'label': 'Page 1',
    'type': 'panel',
    'key': 'page1',
    'components': [{
      'label': 'Add Wizard Page',
      'tableView': false,
      'rowDrafts': false,
      'key': 'addWizardPage',
      'type': 'editgrid',
      'input': true,
      'components': [{
        'label': 'Text Field',
        'tableView': true,
        'key': 'textField',
        'type': 'textfield',
        'input': true
      }]
    }],
    'input': false,
    'tableView': false
  }],
  'title': 'addWizardPageInsideWizardTest',
  'display': 'wizard',
};
