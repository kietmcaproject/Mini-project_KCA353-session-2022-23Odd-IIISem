import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';

class RoundedButtonSmall extends StatelessWidget {
  final Function() onPress;
  final String buttonText;
  final Color color;
  final Color textColor;

  const RoundedButtonSmall({
    super.key,
    this.color = kPrimaryColor,
    required this.onPress,
    required this.buttonText,
    this.textColor = Colors.white,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 10.0,
        vertical: 5.0,
      ),
      width: MediaQuery.of(context).size.width * 0.25,
      height: MediaQuery.of(context).size.height * 0.06,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(40.0),
        color: color,
      ),
      child: TextButton(
        onPressed: onPress,
        child: Text(
          buttonText,
          style: TextStyle(
            color: textColor,
            fontSize: 15.0,
          ),
        ),
      ),
    );
  }
}
