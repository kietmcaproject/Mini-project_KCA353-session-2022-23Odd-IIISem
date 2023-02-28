import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';

class RoundedButton extends StatelessWidget {
  final Function() onPress;
  final String buttonText;
  final Color color;
  final Color textColor;
  final bool isLoading;

  const RoundedButton({
    super.key,
    this.color = kPrimaryColor,
    required this.onPress,
    required this.buttonText,
    this.textColor = Colors.white,
    required this.isLoading,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(
        vertical: 3.0,
      ),
      width: MediaQuery.of(context).size.width * 0.8,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(29.0),
        color: color,
      ),
      child: TextButton(
        onPressed: onPress,
        child: Padding(
          padding: const EdgeInsets.symmetric(
            horizontal: 10.0,
            vertical: 5.0,
          ),
          child: isLoading
              ? CircularProgressIndicator(
                  color: kPrimaryLightColor,
                )
              : Text(
                  buttonText,
                  style: TextStyle(
                    color: textColor,
                    fontSize: 20.0,
                  ),
                ),
        ),
      ),
    );
  }
}
