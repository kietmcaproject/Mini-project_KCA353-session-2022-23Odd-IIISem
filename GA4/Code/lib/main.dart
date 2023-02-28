import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/views/display_data_views/users_screen.dart';
import 'package:alumni_app/views/user_sign_in.dart';
import 'package:animated_splash_screen/animated_splash_screen.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:page_transition/page_transition.dart';
import 'package:lottie/lottie.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  // EmailAuth emailAuth = EmailAuth(sessionName: "demoSession");
  // await emailAuth.config(remoteServerConfiguration);
  // emailAuth.sendOtp(recipientMail: "officialrajul1304@gmail.com", otpLength: 5);
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final storage = const FlutterSecureStorage();

  Future<bool> checkLoginStatus() async {
    String? value = await storage.read(key: "uid");
    if (value == null)
      return false;
    else
      return true;
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        fontFamily: GoogleFonts.dosis().fontFamily,
      ),
      debugShowCheckedModeBanner: false,
      home: AnimatedSplashScreen(
        duration: 5000,
        splash: const SplashComponent(),
        nextScreen: FutureBuilder(
          future: checkLoginStatus(),
          builder: ((context, snapshot) {
            if (snapshot.data == false) {
              return UserSignIn();
            }
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Container(
                color: kBackgroundColor,
                child: const Center(
                  child: CircularProgressIndicator(),
                ),
              );
            }
            return UserScreen();
          }),
        ),
        splashTransition: SplashTransition.scaleTransition,
        pageTransitionType: PageTransitionType.fade,
        backgroundColor: kBackgroundColor,
        splashIconSize: double.infinity,
      ),
    );
  }
}

class SplashComponent extends StatelessWidget {
  const SplashComponent({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(10.0),
      child: Container(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Container(
              margin: const EdgeInsets.only(
                right: 10.0,
              ),
              child: Lottie.asset('assets/animations/welcome_animation.json'),
            ),
            const Padding(
              padding: EdgeInsets.only(
                left: 30.0,
              ),
              child: Text(
                'Welcome to the KIET Alumni App',
                style: TextStyle(
                  color: Colors.blueGrey,
                  fontWeight: FontWeight.bold,
                  fontSize: 50.0,
                ),
              ),
            ),
            Container(
              width: 100.0,
              height: 100.0,
              child: Lottie.asset(
                  'assets/animations/rounded_progress_indicator.json'),
            ),
          ],
        ),
      ),
    );
  }
}
