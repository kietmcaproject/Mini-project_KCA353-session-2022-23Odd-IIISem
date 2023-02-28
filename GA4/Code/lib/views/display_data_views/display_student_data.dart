import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/cards/student_details_card.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class DisplayStudentData extends StatefulWidget {
  const DisplayStudentData({super.key});

  @override
  State<DisplayStudentData> createState() => _DisplayStudentDataState();
}

class _DisplayStudentDataState extends State<DisplayStudentData> {
  Future<String> getStudentData() async {
    String res = "";
    Future.delayed(const Duration(milliseconds: 5000), () {
      res = "True";
    });
    return res;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: StreamBuilder(
          stream: FirebaseFirestore.instance.collection('student').snapshots(),
          builder: (context, snapshot) {
            if (!snapshot.hasData) {
              return const Center(
                  child: CircularProgressIndicator(color: kPrimaryColor));
            } else {
              return ListView(
                shrinkWrap: true,
                children: snapshot.data!.docs.map(
                  (document) {
                    return Container(
                      width: MediaQuery.of(context).size.width,
                      padding: const EdgeInsets.symmetric(
                        horizontal: 10.0,
                        vertical: 5.0,
                      ),
                      child: StudentDetailsCard(
                        fullName: document['fullName'],
                        course: document['course'],
                        passYear: document['passYear'],
                        email: document['email'],
                      ),
                    );
                  },
                ).toList(),
              );
            }
          },
        ),
      ),
    );
  }
}
