class Validator {
  bool emailValidator(String value) {
    if (value == null) return true;
    final RegExp re = RegExp(
        r'^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
    final bool matches = re.hasMatch(value);
    return !matches;
  }

  String removeSpecialChars(str) {
    return str.replaceAll(RegExp(r'[^a-zA-Z 0-9]+'), '');
  }

  String removeWhiteSpace(str) {
    if (str.length <= 0) return '';
    return str.trim().replaceAll(RegExp(r'\s+'), '');
  }

  bool phoneValidator(String value) {
    var phone = removeSpecialChars(value);
    phone = removeWhiteSpace(phone);
    final RegExp re = RegExp(
        r'^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[456789]\d{9}|(\d[ -]?){10}\d$');

    final bool matches = re.hasMatch(phone);
    return !matches;
  }

  bool yearValidator(String value) {
    final RegExp re = RegExp(r'^(19|20)\d{2}$');
    final bool matches = re.hasMatch(value);
    return !matches;
  }
}
