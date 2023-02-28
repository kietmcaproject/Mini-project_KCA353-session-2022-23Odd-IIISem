import 'package:alumni_app/utilities/constants.dart';
import 'package:flutter/material.dart';

class Background extends StatelessWidget {
  const Background({
    Key? key,
    required this.child,
  }) : super(key: key);

  final Widget child;
  @override
  Widget build(BuildContext context) {
    return Container(
      color: kBackgroundColor,
      width: double.infinity,
      height: MediaQuery.of(context).size.height,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(
            top: 0.0,
            left: 0.0,
            width: MediaQuery.of(context).size.width * 0.4,
            child: Image.asset('assets/images/main_top.png'),
          ),
          Positioned(
            bottom: 0.0,
            right: 0.0,
            width: MediaQuery.of(context).size.width * 0.5,
            child: Image.asset('assets/images/login_bottom.png'),
          ),
          SafeArea(child: child),
        ],
      ),
    );
  }
}
