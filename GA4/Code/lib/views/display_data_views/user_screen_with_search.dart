import 'package:alumni_app/controllers/snackbar_controller.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:alumni_app/views/display_data_views/account_settings.dart';
import 'package:alumni_app/views/display_data_views/display_alumni_data.dart';
import 'package:alumni_app/views/display_data_views/display_student_data.dart';
import 'package:alumni_app/views/display_data_views/display_teacher_data.dart';
import 'package:alumni_app/views/user_sign_in.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class UserScreen extends StatefulWidget {
  UserScreen({super.key});

  @override
  State<UserScreen> createState() => _UserScreenState();
}

class _UserScreenState extends State<UserScreen> {
  int currIndex = 0;
  Icon custIcon = Icon(Icons.search);
  Widget custSearchBar = const Text('KIET Alumni App');
  TextEditingController searchController = TextEditingController();
  final screens = [
    const DisplayAlumniData(),
    const DisplayStudentData(),
    const DisplayTeacherData(),
    AccountSettings()
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screens[currIndex],
      appBar: AppBar(
        title: custSearchBar,
        backgroundColor: kPrimaryColor,
        actions: [
          IconButton(
            onPressed: () {
              setState(() {
                if (custIcon.icon == Icons.search) {
                  custIcon = const Icon(Icons.cancel);
                  custSearchBar = TextField(
                    controller: searchController,
                    onChanged: (value) {
                      print(searchController.text);
                    },
                    decoration: InputDecoration(
                      enabledBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(
                          30.0,
                        ),
                        borderSide: const BorderSide(
                          color: kPrimaryLightColor,
                          width: 2.0,
                        ),
                      ),
                      focusedBorder: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(
                          30.0,
                        ),
                        borderSide: const BorderSide(
                          color: kPrimaryLightColor,
                          width: 2.0,
                        ),
                      ),
                      filled: true,
                      fillColor: kBackgroundColor,
                      hintText: 'Search here!',
                      hintStyle: const TextStyle(
                        fontWeight: FontWeight.bold,
                        color: kPrimaryLightColor,
                      ),
                    ),
                    style: const TextStyle(
                      color: Colors.black,
                      fontSize: 16.0,
                    ),
                  );
                } else {
                  setState(() {
                    custIcon = const Icon(Icons.search);
                    custSearchBar = const Text('KIET Alumni App');
                  });
                }
              });
            },
            icon: custIcon,
          ),
          IconButton(
            onPressed: () async {
              await FirebaseAuth.instance.signOut();
              final storage = FlutterSecureStorage();
              await storage.delete(key: "uid");
              Navigator.pushReplacement(
                context,
                MaterialPageRoute(
                  builder: (context) => UserSignIn(),
                ),
              );
              displaySnackbar(context, 'User successfully logged out!');
            },
            icon: const Icon(Icons.logout),
          ),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        elevation: 20.0,
        backgroundColor: kPrimaryColor,
        currentIndex: currIndex,
        onTap: (index) {
          setState(() {
            currIndex = index;
          });
        },
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.school),
            label: "Alumni",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: "Students",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.auto_stories),
            label: "Teachers",
            backgroundColor: kPrimaryColor,
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.settings),
            label: "Account",
            backgroundColor: kPrimaryColor,
          ),
        ],
      ),
    );
  }
}
