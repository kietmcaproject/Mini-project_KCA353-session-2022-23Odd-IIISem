import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';

class RoundedInputFeild extends StatelessWidget {
  final String hintText;
  final TextEditingController textController;
  final IconData icon;
  final bool obscureText;

  RoundedInputFeild({
    Key? key,
    required this.hintText,
    required this.icon,
    this.obscureText = false,
    required this.textController,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        vertical: 10.0,
      ),
      width: MediaQuery.of(context).size.width * 0.8,
      padding: const EdgeInsets.symmetric(
        horizontal: 20.0,
        vertical: 5.0,
      ),
      decoration: BoxDecoration(
        color: kPrimaryLightColor,
        borderRadius: BorderRadius.circular(29.0),
      ),
      child: TextField(
        decoration: InputDecoration(
          icon: Icon(
            icon,
            color: kPrimaryColor,
          ),
          border: InputBorder.none,
          hintText: hintText,
        ),
        controller: textController,
        obscureText: obscureText,
      ),
    );
  }
}
