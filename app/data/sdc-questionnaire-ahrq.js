// Existing sample data from FHIR
// Not used
var sdcAHRQ =
{
  "resourceType": "Questionnaire",
  "id": "questionnaire-sdc-profile-example-loinc",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
  },
  "contained": [
    {
      "resourceType": "ValueSet",
      "id": "ll2654-3",
      "name": "AHRQ_Medication_Q1",
      "status": "active",
      "description": "The answer list for question 1 on the AHRQ \"Medication or Other Substance\" form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org",
            "concept": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "a."
                  }
                ],
                "code": "LA20271-5",
                "display": "Medications"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "b."
                  }
                ],
                "code": "LA20335-8",
                "display": "Biological products"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 3
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "c."
                  }
                ],
                "code": "LA20336-6",
                "display": "Nutritional products"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 4
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "d."
                  }
                ],
                "code": "LA20337-4",
                "display": "Expressed human breast milk"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 5
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "e."
                  }
                ],
                "code": "LA20338-2",
                "display": "Medical gases (e.g., oxygen, nitrogen, nitrous oxide)"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 6
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "f."
                  }
                ],
                "code": "LA20339-0",
                "display": "Contrast media"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 7
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "g."
                  }
                ],
                "code": "LA20340-8",
                "display": "Radiopharmaceuticals"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 8
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "h."
                  }
                ],
                "code": "LA20341-6",
                "display": "Patient food (not suspected in drug-food interactions)"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 9
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "i."
                  }
                ],
                "code": "LA20342-4",
                "display": "Drug-drug, drug-food, or adverse drug reaction as a result of a prescription and/or administration of a drug and/or food prior to admission"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 10
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "j."
                  }
                ],
                "code": "LA20343-2",
                "display": "Other"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2655-0",
      "name": "AHRQ_Medication_Q2",
      "status": "active",
      "description": "The answer list for question 2 on the AHRQ \"Medication or Other Substance\" form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2655-0",
            "concept": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "a."
                  }
                ],
                "code": "LA20278-0",
                "display": "Prescription or over-the-counter (including herbal supplements)"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "b."
                  }
                ],
                "code": "LA20298-8",
                "display": "Compounded preparations"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 3
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "c."
                  }
                ],
                "code": "LA20299-6",
                "display": "Investigational drugs"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 4
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "d."
                  }
                ],
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2657-6",
      "name": "AHRQ_Medication_Q4",
      "status": "active",
      "description": "The answer list for question 4 on the AHRQ \"Medication or Other Substance\" form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2657-6",
            "concept": [
              {
                "code": "LA20283-0",
                "display": "Vaccines"
              },
              {
                "code": "LA20287-1",
                "display": "Other biological products (e.g., thrombolytic)"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2659-2",
      "name": "AHRQ_Medication_Q6",
      "status": "active",
      "description": "The answer list for question 6 on the AHRQ \"Medication or Other Substance\" form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org",
            "concept": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "a."
                  }
                ],
                "code": "LA20273-1",
                "display": "Dietary supplements (other than vitamins or minerals)"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "b."
                  }
                ],
                "code": "LA16117-6",
                "display": "Vitamins or minerals"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 3
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "c."
                  }
                ],
                "code": "LA20320-0",
                "display": "Enteral nutritional products, including infant formula"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 4
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "d."
                  }
                ],
                "code": "LA20321-8",
                "display": "Parenteral nutritional products"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-conceptOrder",
                    "valueInteger": 5
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/valueset-label",
                    "valueString": "e."
                  }
                ],
                "code": "LA20318-4",
                "display": "Other"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2660-0",
      "name": "AHRQ_Medication_Q7",
      "status": "active",
      "description": "The answer list for question 7 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org",
            "concept": [
              {
                "code": "LA20275-6",
                "display": "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)",
                "_display": {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/rendering-xhtml",
                      "valueString": "Incorrect action (process failure or error) <i>(e.g., such as administering overdose or incorrect medication)</i>"
                    }
                  ]
                }
              },
              {
                "code": "LA20314-3",
                "display": "Unsafe condition",
                "_display": {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/rendering-style",
                      "valueString": "color:green"
                    }
                  ]
                }
              },
              {
                "code": "LA20315-0",
                "display": "Adverse reaction in patient to the administered substance without any apparent incorrect                  action"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2661-8",
      "name": "AHRQ_Medication_Q8",
      "status": "active",
      "description": "The answer list for question 8 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org",
            "concept": [
              {
                "code": "LA20276-4",
                "display": "Incorrect patient"
              },
              {
                "code": "LA20302-8",
                "display": "Incorrect medication/substance"
              },
              {
                "code": "LA20303-6",
                "display": "Incorrect dose(s)"
              },
              {
                "code": "LA20304-4",
                "display": "Incorrect route of administration"
              },
              {
                "code": "LA20305-1",
                "display": "Incorrect timing"
              },
              {
                "code": "LA20306-9",
                "display": "Incorrect rate"
              },
              {
                "code": "LA20307-7",
                "display": "Incorrect duration of administration or course of therapy"
              },
              {
                "code": "LA20308-5",
                "display": "Incorrect dosage form (e.g., sustained release instead of immediate release)"
              },
              {
                "code": "LA20309-3",
                "display": "Incorrect strength or concentration"
              },
              {
                "code": "LA20310-1",
                "display": "Incorrect preparation, including inappropriate cutting of tablets, error in compounding,                  mixing, etc."
              },
              {
                "code": "LA20311-9",
                "display": "Expired or deteriorated medication/substance"
              },
              {
                "code": "LA20312-7",
                "display": "Medication/substance that is known to be an allergen to the patient"
              },
              {
                "code": "LA20345-7",
                "display": "Medication/substance that is known to be contraindicated for the patient"
              },
              {
                "code": "LA20313-5",
                "display": "Incorrect patient/family action (e.g., self-administration error)"
              },
              {
                "code": "LA20318-4",
                "display": "Other"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2662-6",
      "name": "AHRQ_Medication_Q9",
      "status": "active",
      "description": "The answer list for question 9 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2662-6",
            "concept": [
              {
                "code": "LA20277-2",
                "display": "Overdose"
              },
              {
                "code": "LA20300-2",
                "display": "Underdose"
              },
              {
                "code": "LA20301-0",
                "display": "Missed or omitted dose"
              },
              {
                "code": "LA7271-5",
                "display": "Extra dose"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2663-4",
      "name": "AHRQ_Medication_Q10",
      "status": "active",
      "description": "The answer list for question 10 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2663-4",
            "concept": [
              {
                "code": "LA20280-6",
                "display": "Too early"
              },
              {
                "code": "LA20290-5",
                "display": "Too late"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2664-2",
      "name": "AHRQ_Medication_Q11",
      "status": "active",
      "description": "The answer list for question 11 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2664-2",
            "concept": [
              {
                "code": "LA20282-2",
                "display": "Too quickly"
              },
              {
                "code": "LA20288-",
                "display": "Too slowly"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2665-9",
      "name": "AHRQ_Medication_Q12",
      "status": "active",
      "description": "The answer list for question 12 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2665-9",
            "concept": [
              {
                "code": "LA20281-4",
                "display": "Too high"
              },
              {
                "code": "LA20289-7",
                "display": "Too low"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2817-6",
      "name": "AHRQ_Y/N/UNK",
      "status": "active",
      "description": "AHRQ Common Format Answer list for Yes (A15), No (A18), Unknown (UNK)",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2817-6",
            "concept": [
              {
                "code": "LA33-6",
                "display": "Yes"
              },
              {
                "code": "LA32-8",
                "display": "No"
              },
              {
                "code": "LA4489-6",
                "display": "Unkown"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2668-3",
      "name": "AHRQ_Medication_Q15",
      "status": "active",
      "description": "The answer list for question 15 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2668-3",
            "concept": [
              {
                "code": "LA20274-9",
                "display": "Drug-drug"
              },
              {
                "code": "LA20316-8",
                "display": "Drug-food"
              },
              {
                "code": "LA20317-6",
                "display": "Drug-disease"
              },
              {
                "code": "LA20318-4",
                "display": "Other"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2669-1",
      "name": "AHRQ_Medication_Q16",
      "status": "active",
      "description": "The answer list for question 16 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2669-1",
            "concept": [
              {
                "code": "LA20279-8",
                "display": "Purchasing"
              },
              {
                "code": "LA20291-3",
                "display": "Storing"
              },
              {
                "code": "LA20292-1",
                "display": "Prescribing/ordering"
              },
              {
                "code": "LA20293-9",
                "display": "Transcribing"
              },
              {
                "code": "LA20294-7",
                "display": "Preparing"
              },
              {
                "code": "LA20295-4",
                "display": "Dispensing"
              },
              {
                "code": "LA20296-2",
                "display": "Administering"
              },
              {
                "code": "LA20297-0",
                "display": "Monitoring"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              },
              {
                "code": "LA20318-4",
                "display": "Other"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2828-3",
      "name": "AHRQ_Y/N",
      "status": "active",
      "description": "AHRQ Common Format Answer list for Yes (A15) and No (A18)",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org/vs/LL2828-3",
            "concept": [
              {
                "code": "LA33-6",
                "display": "Yes"
              },
              {
                "code": "LA32-8",
                "display": "No"
              }
            ]
          }
        ]
      }
    },
    {
      "resourceType": "ValueSet",
      "id": "ll2682-4",
      "name": "AHRQ_Medication_Q28_Q29",
      "status": "active",
      "description": "The answer list for questions 28 and 29 on the AHRQ 'Medication or Other Substance' form",
      "copyright": "This content from LOINC® is copyright © 1995 Regenstrief Institute, Inc. and the LOINC Committee, and available at no cost under the license at http://loinc.org/terms-of-use",
      "compose": {
        "include": [
          {
            "system": "http://loinc.org",
            "concept": [
              {
                "code": "LA20272-3",
                "display": "Cutaneous, topical application, including ointment, spray, patch"
              },
              {
                "code": "LA9451-1",
                "display": "Subcutaneous"
              },
              {
                "code": "LA9444-6",
                "display": "Ophthalmic"
              },
              {
                "code": "LA20324-2",
                "display": "Oral, including sublingual or buccal"
              },
              {
                "code": "LA9445-",
                "display": "Otic"
              },
              {
                "code": "LA9263-0",
                "display": "Nasal"
              },
              {
                "code": "LA9427-1",
                "display": "Inhalation"
              },
              {
                "code": "LA9437-0",
                "display": "Intravenous"
              },
              {
                "code": "LA9429-7",
                "display": "Intramuscular"
              },
              {
                "code": "LA9435-4",
                "display": "Intrathecal"
              },
              {
                "code": "LA9418-0",
                "display": "Epidural"
              },
              {
                "code": "LA20332-5",
                "display": "Gastric"
              },
              {
                "code": "LA9369-5",
                "display": "Rectal"
              },
              {
                "code": "LA9459-4",
                "display": "Vaginal"
              },
              {
                "code": "LA4489-6",
                "display": "Unknown"
              },
              {
                "code": "LA20318-4",
                "display": "Other"
              }
            ]
          }
        ]
      }
    }
  ],
  "identifier": [
    {
      "system": "http://loinc.org/vs",
      "value": "74080-3"
    }
  ],
  "status": "published",
  "date": "2012-04-01",
  "publisher": "Agency for Healthcare Research and Quality (AHRQ)",
  "title": "Medication or Other Substance",
  "_title": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/rendering-style",
        "valueString": "color:#0000FF"
      }
    ]
  },
  "subjectType": [
    "Patient"
  ],
  "item": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/questionnaire-item-control",
                "code": "header"
              }
            ]
          }
        }
      ],
      "linkId": "Medication/header",
      "type": "group",
      "item": [
        {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
              "valueBoolean": true
            }
          ],
          "text": "Form ID:",
          "type": "string",
          "required": true
        },
        {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/minLength",
              "valueInteger": 3
            }
          ],
          "linkId": "74080-3/74081-1",
          "text": "Event ID:",
          "type": "string",
          "required": true
        },
        {
          "linkId": "74080-3/30947-6",
          "text": "Initial Report Date (HERF Q1)",
          "type": "string",
          "required": true
        }
      ]
    },
    {
      "linkId": "Medication/SEC00",
      "text": "Medication or Other Substance",
      "type": "group",
      "item": [
        {
          "text": "Use this form to report any patient safety event or unsafe condition involving a substance such as a medications, biological products, nutritional products, expressed human breast milk, medical gases, or contrast media. Do not complete this form if the event involves appropriateness of therapeutic choice or decision making (e.g., physician decision to prescribe medication despite known drug-drug interaction). If the event involves a device, please also complete the Device or Medical/Surgical Supply including Health Information Technology (HIT) form. Narrative detail can be captured on the Healthcare Event Reporting Form (HERF).",
          "_text": {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/rendering-xhtml",
                "valueString": "Use this form to report any patient safety event or unsafe condition involving a substance such as a medications, biological products, nutritional products, expressed human breast milk, medical gases, or contrast media. Do not complete this form if the event involves appropriateness of therapeutic choice or decision making (e.g., physician decision to prescribe medication despite known drug-drug interaction). If the event involves a device, please also complete the <i>Device or Medical/Surgical Supply including Health Information Technology (HIT)</i> form. Narrative detail can be captured on the <i>Healthcare Event Reporting Form (HERF)</i>."
              }
            ]
          },
          "type": "display"
        },
        {
          "linkId": "Medication/SEC01/74080-3",
          "type": "group",
          "required": true,
          "item": [
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 1
                },
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                  "valueReference": {
                    "reference": "http://loinc.org/74076-1"
                  }
                }
              ],
              "linkId": "74080-3/74076-1",
              "text": "What type of medication/substance was involved?",
              "type": "open-choice",
              "required": true,
              "options": {
                "reference": "#ll2654-3"
              },
              "item": [
                {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                      "valueInteger": 7
                    },
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                      "valueReference": {
                        "reference": "http://loinc.org/vs/74075-3"
                      }
                    }
                  ],
                  "linkId": "74080-3/74075-3",
                  "text": "What type of medication?",
                  "type": "choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2655-0"
                  },
                  "item": [
                    {
                      "extension": [
                        {
                          "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                          "valueInteger": 0
                        },
                        {
                          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                          "valueReference": {
                            "reference": "http://loinc.org/74077-9"
                          }
                        }
                      ],
                      "linkId": "74080-3/74077-9-q",
                      "text": "Please list all ingredients:",
                      "type": "string",
                      "repeats": true
                    }
                  ]
                },
                {
                  "extension": [
                    {
                      "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                      "valueInteger": 8
                    }
                  ],
                  "linkId": "74080-3/74074-6",
                  "text": "What type of biological product?",
                  "type": "open-choice",
                  "options": {
                    "reference": "#ll2657-6"
                  },
                  "item": [
                    {
                      "linkId": "74080-3/30959-1",
                      "text": "What was the lot number of the vaccine?",
                      "type": "string",
                      "required": true
                    }
                  ]
                },
                {
                  "linkId": "74080-3/74073-8",
                  "text": "What type of nutritional product?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2659-2"
                  },
                  "item": [
                    {
                      "linkId": "74080-3/74073-8/Other/Specify",
                      "text": "PLEASE SPECIFY",
                      "type": "string",
                      "required": true
                    }
                  ]
                },
                {
                  "linkId": "74080-3/74076-1/Other/Specify",
                  "text": "PLEASE SPECIFY",
                  "type": "string",
                  "required": true
                }
              ]
            },
            {
              "linkId": "74080-3/74072-0",
              "text": "Which of the following best characterizes the event?",
              "type": "open-choice",
              "required": true,
              "options": {
                "reference": "#ll2660-0"
              }
            },
            {
              "linkId": "74080-3/74071-2",
              "text": "What was the incorrect action?",
              "type": "choice",
              "options": {
                "reference": "#ll2661-8"
              },
              "item": [
                {
                  "linkId": "74080-3/74070-4",
                  "text": "Which best describes the incorrect dose(s)?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2662-6"
                  }
                },
                {
                  "linkId": "Medication/74069-6",
                  "text": "Which best describes the incorrect timing?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2663-4"
                  }
                },
                {
                  "linkId": "74080-3/74068-8",
                  "text": "Which best describes the incorrect rate?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2664-2"
                  }
                },
                {
                  "linkId": "Medication/74067-0",
                  "text": "Which best describes the incorrect strength or concentration?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2665-9"
                  }
                },
                {
                  "linkId": "Medication/74066-2",
                  "text": "What was the expiration date?",
                  "type": "string",
                  "required": true
                },
                {
                  "linkId": "Medication/74065-4",
                  "text": "Was there a documented history of allergies or sensitivities to the medication/substance                      administered?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2817-6"
                  }
                },
                {
                  "linkId": "Medication/74064-7",
                  "text": "What was the contraindication (potential or actual interaction)?",
                  "type": "open-choice",
                  "required": true,
                  "options": {
                    "reference": "#ll2668-3"
                  },
                  "item": [
                    {
                      "linkId": "Medication/74064-7/Other/Specify",
                      "text": "PLEASE SPECIFY",
                      "type": "string",
                      "required": true
                    }
                  ]
                },
                {
                  "linkId": "74080-3/74071-2/Other/Specify",
                  "text": "PLEASE SPECIFY",
                  "type": "string",
                  "required": true
                }
              ]
            },
            {
              "linkId": "74080-3/74063-9",
              "text": "At what stage in the process did the event originate, regardless of the stage at which                  it was discovered?",
              "type": "open-choice",
              "required": true,
              "options": {
                "reference": "#ll2669-1"
              },
              "item": [
                {
                  "linkId": "74080-3/74063-9/Other/Specify",
                  "text": "PLEASE SPECIFY",
                  "type": "string",
                  "required": true
                }
              ]
            }
          ]
        },
        {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
              "valueInteger": 5
            }
          ],
          "linkId": "74080-3/74078-7",
          "type": "group",
          "repeats": true,
          "item": [
            {
              "text": "Please provide the following medication details for any medications or other substances                directly involved in the event.",
              "type": "display"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74062-1",
              "text": "Generic name or investigational drug name",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74061-3",
              "text": "Ingredient RXCUI (if known)",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74060-5",
              "text": "Brand name (if known)",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74059-7",
              "text": "Brand name RXCUI (if known)",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74058-9",
              "text": "Manufacturer (if known)",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74057-1",
              "text": "Strength or concentration of product",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74056-3",
              "text": "Clinical drug component RXCUI (if known)",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74055-5",
              "text": "Dosage form of Product",
              "type": "string"
            },
            {
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                  "valueInteger": 0
                }
              ],
              "linkId": "74080-3/74078-7/74054-8",
              "text": "Dose form RXCUI (if known)",
              "type": "string"
            },
            {
              "linkId": "74080-3/74078-7/74053-0",
              "text": "Was this medication/substance prescribed for this patient?",
              "type": "choice",
              "required": true,
              "options": {
                "reference": "#ll2828-3"
              }
            },
            {
              "linkId": "Medication/74052-2",
              "text": "Was this medication/substance given to this patient?",
              "type": "choice",
              "required": true,
              "options": {
                "reference": "#ll2828-3"
              }
            }
          ]
        },
        {
          "linkId": "Medication/SEC03",
          "type": "group",
          "item": [
            {
              "linkId": "74080-3/74051-4",
              "text": "What was the intended route of administration?",
              "type": "open-choice",
              "required": true,
              "options": {
                "reference": "#ll2682-4"
              },
              "item": [
                {
                  "linkId": "74080-3/74051-4/Other/Specify",
                  "text": "PLEASE SPECIFY",
                  "type": "string",
                  "required": true
                }
              ]
            },
            {
              "linkId": "74080-3/74050-6",
              "text": "What was the actual route of administration (attempted or completed)?",
              "type": "open-choice",
              "required": true,
              "options": {
                "reference": "#ll2682-4"
              },
              "item": [
                {
                  "linkId": "74080-3/74050-6/Other/Specify",
                  "text": "PLEASE SPECIFY",
                  "type": "string",
                  "required": true
                }
              ]
            }
          ]
        },
        {
          "linkId": "Medication/SEC04",
          "text": "Thank you for completing these questions.",
          "type": "group",
          "item": [
            {
              "text": "OMB No. 0935-0143 Exp. Date 10/31/2014 Public reporting burden for the collection of information is estimated to average 10 minutes per response. An agency may not conduct or sponsor, and a person is not required to respond to, a collection of information unless it displays a currently valid OMB control number. Send comments regarding this burden estimate or any other aspect of this collection of information, including suggestions for reducing this burden, to: AHRQ Reports Clearance Officer, Attention: PRA, Paperwork Reduction Project (0935-0143), AHRQ, 540 Gaither Road, Room #5036, Rockville, MD 20850.",
              "type": "display"
            }
          ]
        }
      ]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",
          "valueBoolean": true
        }
      ],
      "linkId": "Reporting",
      "text": "Reporting information",
      "type": "group",
      "item": [
        {
          "linkId": "Reporting/who",
          "text": "Reported by:",
          "type": "string"
        },
        {
          "linkId": "Reporting/when",
          "text": "Reported date:",
          "type": "date"
        }
      ]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/questionnaire-item-control",
                "code": "footer"
              }
            ]
          }
        }
      ],
      "linkId": "Medication/footer",
      "type": "group",
      "item": [
        {
          "text": "AHRQ Common Formats - Hospital Version 1.2 - 2012 Medication or Other Substance",
          "type": "display"
        }
      ]
    }
  ]
}
