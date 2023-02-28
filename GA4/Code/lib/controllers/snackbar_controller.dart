import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';

displaySnackbar(BuildContext context, String text) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      elevation: 10.0,
      duration: Duration(milliseconds: 1200),
      content: Text(
        text,
        style: const TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.w500,
          color: kPrimaryLightColor,
        ),
      ),
      backgroundColor: kPrimaryColor,
    ),
  );
}
