import 'package:alumni_app/utilities/background.dart';
import 'package:alumni_app/utilities/cards/alumni_details_card.dart';
import 'package:alumni_app/utilities/constants.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';

class DisplayAlumniData extends StatefulWidget {
  const DisplayAlumniData({super.key});

  @override
  State<DisplayAlumniData> createState() => _DisplayAlumniDataState();
}

var data = [];

class _DisplayAlumniDataState extends State<DisplayAlumniData> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Background(
        child: StreamBuilder(
          stream: FirebaseFirestore.instance.collection('alumni').snapshots(),
          builder: ((context, snapshot) {
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
                      child: AlumniDetailsCard(
                        fullName: document['fullName'],
                        currDesignation: document['CurrentDes'],
                        currcompany: document['currentCompany'],
                        course: document['course'],
                        email: document['email'],
                        phoneNo: document['phone'],
                        passYear: document['passYear'],
                      ),
                    );
                  },
                ).toList(),
              );
            }
          }),
        ),
      ),
    );
  }
}
