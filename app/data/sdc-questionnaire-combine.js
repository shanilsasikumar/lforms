// Existing sample data from FHIR
// Not used
var sdcCombine =
{
  "resourceType": "Bundle",
  "id": "questionnaire-sdc-profile-example",
  "meta": {
    "lastUpdated": "2014-05-15T17:25:15Z"
  },
  "type": "collection",
  "entry": [
    {
      "fullUrl": "http://AHRQ.org/form/Questionnaire/F8-1.2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "F8-1.2",
        "meta": {
          "lastUpdated": "2014-05-15T17:25:15Z"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
        },
        "contained": [
          {
            "resourceType": "CodeSystem",
            "id": "d1e551-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE270-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1197",
                "display": "Medications",
                "definition": "A legal drug that is used to prevent, treat, or relieve symptoms of a disease or abnormal condition."
              },
              {
                "code": "A1200",
                "display": "Biological products",
                "definition": "Organisms or complex pharmaceutical substances, preparations, or agents of organic origin, usually obtained by biological methods or assay."
              },
              {
                "code": "A1203",
                "display": "Nutritional products"
              },
              {
                "code": "A1206",
                "display": "Expressed human breast milk"
              },
              {
                "code": "A1209",
                "display": "Medical gases (e.g., oxygen, nitrogen, nitrous oxide)"
              },
              {
                "code": "A1212",
                "display": "Contrast media"
              },
              {
                "code": "A1213",
                "display": "Radiopharmaceuticals"
              },
              {
                "code": "A1214",
                "display": "Patient food (not suspected in drug-food interactions"
              },
              {
                "code": "A1216",
                "display": "Drug-drug, drug-food, or adverse drug reaction as a result of a prescription and/or administration of a drug and/or food frior to admission"
              },
              {
                "code": "A1215",
                "display": "Other substance: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e551-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE270-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e551-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE270-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e639-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE273-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1218",
                "display": "Prescription or over-the- counter (including herbal supplements)"
              },
              {
                "code": "A1221",
                "display": "Compounded preparations"
              },
              {
                "code": "A1224",
                "display": "Investigational drugs"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e639-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE273-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e639-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE273-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e910-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE279-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1233",
                "display": "Vaccines"
              },
              {
                "code": "A1236",
                "display": "Other biological products (e.g., thrombolytic)"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e910-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE279-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e910-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE279-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e1125-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE285-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1242",
                "display": "Dietary supplements (other than vitamins or minerals)"
              },
              {
                "code": "A1245",
                "display": "Vitamins or minerals"
              },
              {
                "code": "A1248",
                "display": "Enteral nutritional products, including infant formula"
              },
              {
                "code": "A1251",
                "display": "Parenteral nutritional products"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e1125-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE285-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e1125-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE285-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e1558-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE288-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1257",
                "display": "Incorrect action (process failure or error) (e.g., such as administering overdose or incorrect medication)"
              },
              {
                "code": "A1260",
                "display": "Unsafe condition"
              },
              {
                "code": "A1263",
                "display": "Adverse reaction in patient to the administered substance without any apparent incorrect action"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e1558-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE288-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e1558-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE288-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e1746-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE291-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A585",
                "display": "Incorrect patient"
              },
              {
                "code": "A1272",
                "display": "Incorrect medication/substance"
              },
              {
                "code": "A1275",
                "display": "Incorrect dose(s)"
              },
              {
                "code": "A1278",
                "display": "Incorrect route of administration"
              },
              {
                "code": "A1281",
                "display": "Incorrect timing"
              },
              {
                "code": "A1284",
                "display": "Incorrect rate"
              },
              {
                "code": "A1287",
                "display": "Incorrect duration of administration or course of therapy"
              },
              {
                "code": "A1290",
                "display": "Incorrect dosage form (e.g., sustained release instead of immediate release)"
              },
              {
                "code": "A1293",
                "display": "Incorrect strength or concentration"
              },
              {
                "code": "A1296",
                "display": "Incorrect preparation, including inappropriate cutting of tablets, error in compounding, mixing, etc."
              },
              {
                "code": "A1299",
                "display": "Expired or deteriorated medication/substance"
              },
              {
                "code": "A1301",
                "display": "Medication/substance that is known to be an allergen to the patient"
              },
              {
                "code": "A1305",
                "display": "Medication/substance that is known to be contraindicated for the patient"
              },
              {
                "code": "A1308",
                "display": "Incorrect patient/family action (e.g., self-administration error)"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e1746-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE291-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e1746-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE291-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e1863-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE294-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1314",
                "display": "Overdose"
              },
              {
                "code": "A1317",
                "display": "Underdose"
              },
              {
                "code": "A1320",
                "display": "Missed or omitted dose"
              },
              {
                "code": "A1323",
                "display": "Extra dose"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e1863-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE294-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e1863-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE294-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e2109-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE297-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1329",
                "display": "Too early"
              },
              {
                "code": "A1332",
                "display": "Too late"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e2109-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE297-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e2109-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE297-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e2272-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE300-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1338",
                "display": "Too quickly"
              },
              {
                "code": "A1341",
                "display": "Too slowly"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e2272-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE300-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e2272-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE300-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e2489-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE303-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1347",
                "display": "Too high"
              },
              {
                "code": "A1350",
                "display": "Too low"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e2489-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE303-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e2489-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE303-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e2768-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE309-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A15",
                "display": "Yes"
              },
              {
                "code": "A18",
                "display": "No"
              },
              {
                "code": "UNK",
                "display": "Unkown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e2768-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE309-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e2768-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE303-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e2928-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE312-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1368",
                "display": "Drug-drug"
              },
              {
                "code": "A1371",
                "display": "Drug-food"
              },
              {
                "code": "A1374",
                "display": "Drug-disease"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e2928-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE312-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e2928-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE312-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e3159-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE315-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1380",
                "display": "Purchasing"
              },
              {
                "code": "A1383",
                "display": "Storing"
              },
              {
                "code": "A1386",
                "display": "Prescribing/ordering"
              },
              {
                "code": "A1389",
                "display": "Transcribing"
              },
              {
                "code": "A1392",
                "display": "Preparing"
              },
              {
                "code": "A1395",
                "display": "Dispensing"
              },
              {
                "code": "A1398",
                "display": "Administering"
              },
              {
                "code": "A1401",
                "display": "Monitoring"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e3159-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE315-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e3159-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE315-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e4024-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE333-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A15",
                "display": "Yes"
              },
              {
                "code": "A18",
                "display": "No"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e4024-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE333-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e4024-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE333-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e4118-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE336-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A15",
                "display": "Yes"
              },
              {
                "code": "A18",
                "display": "No"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e4118-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE336-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e4118-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE336-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e4236-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE348-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1440",
                "display": "Cutaneous, topical application, including ointment, spray, patch"
              },
              {
                "code": "A1443",
                "display": "Subcutaneous"
              },
              {
                "code": "A1444",
                "display": "Ophthalmic"
              },
              {
                "code": "A1446",
                "display": "Oral, including sublingual or buccal"
              },
              {
                "code": "A1447",
                "display": "Otic"
              },
              {
                "code": "A1449",
                "display": "Nasal"
              },
              {
                "code": "A1450",
                "display": "Inhalation"
              },
              {
                "code": "A1452",
                "display": "Intravenous"
              },
              {
                "code": "A1455",
                "display": "Intramuscular"
              },
              {
                "code": "A1458",
                "display": "Intrathecal"
              },
              {
                "code": "A1461",
                "display": "Epidural"
              },
              {
                "code": "A1464",
                "display": "Gastric"
              },
              {
                "code": "A1467",
                "display": "Rectal"
              },
              {
                "code": "A1470",
                "display": "Vaginal"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e4236-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE348-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e4236-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE348-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e4716-cs",
            "url": "http://AHRQ.org/form/question_identifier#Medication/DE351-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A1440",
                "display": "Cutaneous, topical application, including ointment, spray, patch"
              },
              {
                "code": "A1443",
                "display": "Subcutaneous"
              },
              {
                "code": "A1444",
                "display": "Ophthalmic"
              },
              {
                "code": "A1446",
                "display": "Oral, including sublingual or buccal"
              },
              {
                "code": "A1447",
                "display": "Otic"
              },
              {
                "code": "A1449",
                "display": "Nasal"
              },
              {
                "code": "A1450",
                "display": "Inhalation"
              },
              {
                "code": "A1452",
                "display": "Intravenous"
              },
              {
                "code": "A1455",
                "display": "Intramuscular"
              },
              {
                "code": "A1458",
                "display": "Intrathecal"
              },
              {
                "code": "A1461",
                "display": "Epidural"
              },
              {
                "code": "A1464",
                "display": "Gastric"
              },
              {
                "code": "A1467",
                "display": "Rectal"
              },
              {
                "code": "A1470",
                "display": "Vaginal"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e4716-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#Medication/DE351-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e4716-cs"
                        }
                      },
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "CodeSystem/DE351-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "url": "http://hl7.org/fhir/us/sdc/Questionnaire/F8-1.2",
        "identifier": [
          {
            "system": "http://Medication",
            "value": "form_identifier/F8/1.2"
          }
        ],
        "status": "published",
        "date": "2012-04-01",
        "publisher": "Agency for Healthcare Research and Quality (AHRQ)",
        "useContext": [
          {
            "coding": [
              {
                "code": "Acute Care Hospitals"
              }
            ]
          }
        ],
        "title": "Medication or Other Substance",
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
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 3
                  }
                ],
                "linkId": "Medication/DE2",
                "text": "Event ID:",
                "type": "string",
                "required": true
              },
              {
                "linkId": "Medication/DE30",
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
                          "reference": "http://AHRQ.gov/data_element_identifier#Type%20of%20substance%20involved"
                        }
                      }
                    ],
                    "linkId": "Medication/DE270",
                    "text": "What type of medication/substance was involved?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e551-vs"
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
                              "reference": "http://AHRQ.gov/data_element_identifier#Type%20of%20medication%20involved"
                            }
                          }
                        ],
                        "linkId": "Medication/DE273",
                        "text": "What type of medication?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e639-vs"
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
                                  "reference": "http://AHRQ.gov/data_element_identifier#Compounded%20preparation%20ingredients"
                                }
                              }
                            ],
                            "linkId": "Medication/DE276",
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
                        "linkId": "Medication/DE279",
                        "text": "What type of biological product?",
                        "type": "open-choice",
                        "options": {
                          "reference": "#d1e910-vs"
                        },
                        "item": [
                          {
                            "linkId": "Medication/DE282",
                            "text": "What was the lot number of the vaccine?",
                            "type": "string",
                            "required": true
                          }
                        ]
                      },
                      {
                        "linkId": "Medication/DE285",
                        "text": "What type of nutritional product?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e1125-vs"
                        }
                      }
                    ]
                  },
                  {
                    "linkId": "Medication/DE288",
                    "text": "Which of the following best characterizes the event?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e1558-vs"
                    }
                  },
                  {
                    "linkId": "Medication/DE291",
                    "text": "What was the incorrect action?",
                    "type": "open-choice",
                    "options": {
                      "reference": "#d1e1746-vs"
                    },
                    "item": [
                      {
                        "linkId": "Medication/DE294",
                        "text": "Which best describes the incorrect dose(s)?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e1863-vs"
                        }
                      },
                      {
                        "linkId": "Medication/DE297",
                        "text": "Which best describes the incorrect timing?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e2109-vs"
                        }
                      },
                      {
                        "linkId": "Medication/DE300",
                        "text": "Which best describes the incorrect rate?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e2272-vs"
                        }
                      },
                      {
                        "linkId": "Medication/DE303",
                        "text": "Which best describes the incorrect strength or concentration?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e2489-vs"
                        }
                      },
                      {
                        "linkId": "Medication/DE306",
                        "text": "What was the expiration date?",
                        "type": "string",
                        "required": true
                      },
                      {
                        "linkId": "Medication/DE309",
                        "text": "Was there a documented history of allergies or sensitivities to the medication/substance administered?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e2768-vs"
                        }
                      },
                      {
                        "linkId": "Medication/DE312",
                        "text": "What was the contraindication (potential or actual interaction)?",
                        "type": "open-choice",
                        "required": true,
                        "options": {
                          "reference": "#d1e2928-vs"
                        }
                      }
                    ]
                  },
                  {
                    "linkId": "Medication/DE315",
                    "text": "At what stage in the process did the event originate, regardless of the stage at which it was discovered?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e3159-vs"
                    }
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
                "linkId": "Medication/SEC02/74078-7",
                "type": "group",
                "repeats": true,
                "item": [
                  {
                    "text": "Please provide the following medication details for any medications or other substances directly involved in the event.",
                    "type": "display"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE318",
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
                    "linkId": "Medication/DE319",
                    "text": "Ingredient",
                    "type": "string"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE321",
                    "text": "Brand name",
                    "type": "string"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE322",
                    "text": "Brand name RXCUI",
                    "type": "string"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE324",
                    "text": "Manufacturer",
                    "type": "string"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE327",
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
                    "linkId": "Medication/DE328",
                    "text": "Clinical Component RXCUI",
                    "type": "string"
                  },
                  {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                        "valueInteger": 0
                      }
                    ],
                    "linkId": "Medication/DE330",
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
                    "linkId": "Medication/DE331",
                    "text": "Dose form RXCUI",
                    "type": "string"
                  },
                  {
                    "linkId": "Medication/DE333",
                    "text": "Was this medication/substance prescribed for this patient?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e4024-vs"
                    }
                  },
                  {
                    "linkId": "Medication/DE336",
                    "text": "Was this medication/substance given to this patient?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e4118-vs"
                    }
                  }
                ]
              },
              {
                "linkId": "Medication/SEC03",
                "type": "group",
                "item": [
                  {
                    "linkId": "Medication/DE348",
                    "text": "What was the intended route of administration?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e4236-vs"
                    }
                  },
                  {
                    "linkId": "Medication/DE351",
                    "text": "What was the actual route of administration (attempted or completed)?",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e4716-vs"
                    }
                  }
                ]
              },
              {
                "linkId": "Medication/SEC04",
                "text": "STOP",
                "type": "group",
                "item": [
                  {
                    "text": "The form is complete.",
                    "type": "display"
                  }
                ]
              },
              {
                "linkId": "Medication/SEC05",
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
    },
    {
      "fullUrl": "http://AHRQ.org/form/Questionnaire/HERF-1.2",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "HERF-1.2",
        "meta": {
          "lastUpdated": "2014-05-15T17:25:15Z"
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
        },
        "contained": [
          {
            "resourceType": "CodeSystem",
            "id": "d1e5879-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/DE3-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A3",
                "display": "Incident",
                "definition": "A patient safety event that reached the patient, whether or not the patient was harmed."
              },
              {
                "code": "A6",
                "display": "Near Miss",
                "definition": "A patient safety event that did not reach the patient."
              },
              {
                "code": "A9",
                "display": "Unsafe Condition",
                "definition": "Any circumstance that increases the probability of a patient safety event."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e5879-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE3-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e5879-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e6177-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/DE21-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A42",
                "display": "Blood or Blood Product"
              },
              {
                "code": "A44",
                "display": "Device or Medical/Surgical Supply, including Health Information Technology (HIT)"
              },
              {
                "code": "A48",
                "display": "Fall"
              },
              {
                "code": "A51",
                "display": "Healthcare-associated Infection"
              },
              {
                "code": "A54",
                "display": "Medication or Other Substance"
              },
              {
                "code": "A57",
                "display": "Perinatal"
              },
              {
                "code": "A60",
                "display": "Pressure Ulcer"
              },
              {
                "code": "A63",
                "display": "Surgery or Anesthesia (includes invasive procedure)"
              },
              {
                "code": "A64",
                "display": "Venous Thromboembolism"
              },
              {
                "code": "A66",
                "display": "Other: PLEASE SPECIFY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e6177-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE21-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e6177-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e6853-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/DE42-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "M",
                "display": "Male"
              },
              {
                "code": "F",
                "display": "Female"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e6853-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE42-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e6853-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e7006-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/Hidden-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A15",
                "display": "Yes"
              },
              {
                "code": "A18",
                "display": "No"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e7006-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/Hidden-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e7006-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e7220-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/DE43-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "M",
                "display": "Male"
              },
              {
                "code": "F",
                "display": "Female"
              },
              {
                "code": "UNK",
                "display": "Unknown"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e7220-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE43-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e7220-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e7422-cs",
            "url": "http://AHRQ.org/form/question_identifier#HERF/DE33-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "A15",
                "display": "Yes"
              },
              {
                "code": "A18",
                "display": "No"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e7422-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE33-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e7422-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "url": "http://hl7.org/fhir/Questionnaire/HERF-1.2",
        "identifier": [
          {
            "system": "http://AHRQ.org",
            "value": "identifier/HERF/1.2"
          }
        ],
        "status": "published",
        "title": "Healthcare Event Reporting Form (HERF) Hospital Version 1.2",
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
            "linkId": "HERF/header",
            "type": "group",
            "item": [
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 3
                  }
                ],
                "linkId": "HERF/DE2",
                "text": "Event ID",
                "type": "string",
                "required": true
              },
              {
                "linkId": "HERF/DE30",
                "text": "Initial Report Date",
                "type": "string",
                "required": true
              }
            ]
          },
          {
            "linkId": "HERF/SEC01",
            "type": "group",
            "item": [
              {
                "linkId": "HERF/DE30b",
                "text": "Report Date",
                "type": "string",
                "required": true
              },
              {
                "linkId": "HERF/DE3",
                "text": "What is being reported?",
                "type": "open-choice",
                "required": true,
                "options": {
                  "reference": "#d1e5879-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                    "valueInteger": 0
                  }
                ],
                "linkId": "HERF/DE15",
                "text": "Briefly describe the event that occurred or unsafe condition",
                "type": "string",
                "required": true,
                "repeats": true
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                    "valueInteger": 0
                  }
                ],
                "linkId": "HERF/DE18",
                "text": "Briefly describe the location where the event occurred or where the unsafe condition exists",
                "type": "string",
                "required": true,
                "repeats": true
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                    "valueInteger": 10
                  }
                ],
                "linkId": "HERF/DE21",
                "text": "Which of the following categories are associated with the event or unsafe condition?",
                "type": "open-choice",
                "required": true,
                "repeats": true,
                "options": {
                  "reference": "#d1e6177-vs"
                }
              }
            ]
          },
          {
            "linkId": "HERF/SEC01.1",
            "text": "PATIENT INFORMATION (COMPLETE ONLY IF INCIDENT)",
            "type": "group",
            "enableWhen": [
              {
                "question": "HERF/DE3",
                "answerCoding": {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE3-cs",
                  "code": "A3"
                }
              }
            ],
            "item": [
              {
                "text": "Please complete the patient identifiers below. Additional patient information is captured on the Patient Information Form (PIF). (When reporting a perinatal incident that affected a mother and a neonate, please complete the patient identifiers below for the mother (Q8 â€“ Q11) and the neonate (Q12 â€“ Q15). Please also complete a separate PIF for the neonate involved.)",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/entryFormat",
                    "valueString": "MM/DD/YYYY"
                  }
                ],
                "linkId": "HERF/DE9a",
                "text": "Event Discovery Date",
                "type": "string",
                "required": true
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/entryFormat",
                    "valueString": "HHMM"
                  }
                ],
                "linkId": "HERF/DE9b",
                "text": "Event Discovery Time",
                "type": "string",
                "required": true
              }
            ]
          },
          {
            "linkId": "HERF/SEC02",
            "text": "Patient Information (COMPLETE ONLY IF INCIDENT):",
            "type": "group",
            "enableWhen": [
              {
                "question": "HERF/DE3",
                "answerCoding": {
                  "system": "http://AHRQ.org/form/question_identifier#HERF/DE3-cs",
                  "code": "A3"
                }
              }
            ],
            "item": [
              {
                "text": "Please complete the patient identifiers below. Additional patient information is captured on the Patient Information Form (PIF). (When reporting a perinatal incident that affected a mother and a neonate, please complete the patient identifiers below for the mother (Q8 â€“ Q11) and the neonate (Q12 â€“ Q15). Please also complete a separate PIF for the neonate involved.)",
                "type": "display"
              },
              {
                "linkId": "HERF/DE46",
                "text": "Patient's Name",
                "type": "string",
                "required": true
              },
              {
                "linkId": "HERF/DE47",
                "text": "Patient's Date of Birth",
                "type": "string"
              },
              {
                "linkId": "HERF/DE49",
                "text": "Patient's Medical Record #",
                "type": "string",
                "required": true
              },
              {
                "linkId": "HERF/DE42",
                "text": "Patients' Gender",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e6853-vs"
                }
              }
            ]
          },
          {
            "linkId": "HERF/SEC03",
            "text": "Neonatal Patient Information:",
            "type": "group",
            "item": [
              {
                "text": "COMPLETE ONLY FOR NEONATE AFFECTED BY PERINATAL INCIDENT",
                "type": "display"
              },
              {
                "linkId": "HERF/Hidden",
                "text": "Is this event a perinatal incident that affected a neonate?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e7006-vs"
                },
                "item": [
                  {
                    "linkId": "HERF/DE34",
                    "text": "Neonate's Name",
                    "type": "string"
                  },
                  {
                    "linkId": "HERF/DE37",
                    "text": "Neonate's Date of Birth",
                    "type": "string"
                  },
                  {
                    "linkId": "HERF/DE40",
                    "text": "Neonate's Medical Record #",
                    "type": "string",
                    "required": true
                  },
                  {
                    "linkId": "HERF/DE43",
                    "text": "Neonate's Gender",
                    "type": "open-choice",
                    "required": true,
                    "options": {
                      "reference": "#d1e7220-vs"
                    }
                  }
                ]
              }
            ]
          },
          {
            "linkId": "HERF/SEC04",
            "text": "REPORT AND EVENT REPORTER INFORMATION",
            "type": "group",
            "item": [
              {
                "linkId": "HERF/DE33",
                "text": "Anonymous Reporter",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e7422-vs"
                },
                "item": [
                  {
                    "linkId": "HERF/DE50",
                    "text": "Reporter's Name",
                    "type": "string",
                    "required": true
                  },
                  {
                    "linkId": "HERF/DE52",
                    "text": "Telephone Number",
                    "type": "string",
                    "required": true
                  },
                  {
                    "linkId": "HERF/DE53",
                    "text": "Email Address",
                    "type": "string",
                    "required": true
                  },
                  {
                    "linkId": "HERF/DE36",
                    "text": "Reporter's Job or Position",
                    "type": "string"
                  }
                ]
              }
            ]
          },
          {
            "linkId": "HERF/SEC05",
            "text": "Thank you for completing these questions.",
            "type": "group",
            "item": [
              {
                "text": "OMB No. 0935-0143 Exp. Date 10/31/2014 Public reporting burden for the collection of information is estimated to average 10 minutes per response. An agency may not conduct or sponsor, and a person is not required to respond to, a collection of information unless it displays a currently valid OMB control number. Send comments regarding this burden estimate or any other aspect of this collection of information, including suggestions for reducing this burden, to: AHRQ Reports Clearance Officer, Attention: PRA, Paperwork Reduction Project (0935-0143), AHRQ, 540 Gaither Road, Room #5036, Rockville, MD 20850.",
                "type": "display"
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
            "linkId": "HERF/footer",
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
    },
    {
      "fullUrl": "http://AHRQ.org/form/Questionnaire/3921052v1.0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3921052v1.0",
        "meta": {
          "lastUpdated": "2014-05-15T17:25:15Z"
        },
        "language": "en",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
        },
        "contained": [
          {
            "resourceType": "CodeSystem",
            "id": "d1e8086-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921060v1.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Primary",
                "display": "Primary Diagnosis",
                "definition": "Occurring first in time or sequence; original; of greatest rank or importance or value.: The investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation."
              },
              {
                "code": "Secondary",
                "display": "Secondary Diagnosis",
                "definition": "Derived as a result of a primary condition; not direct or immediate; of second rank or importance or value.: The investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation."
              },
              {
                "code": "Treatment-related",
                "display": "Treatment related secondary malignancy Diagnosis",
                "definition": "A disorder characterized by development of a malignancy most probably as a result of treatment for a previously existing malignancy.: The investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation."
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Not known, not observed, not recorded, or refused."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e8086-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921060v1.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e8086-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e8407-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921071v1.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Initial same as Current",
                "display": "Initial diagnosis same as current",
                "definition": "Initial diagnosis same as current"
              },
              {
                "code": "At Progression",
                "display": "Disease Progression",
                "definition": "Cancer that continues to grow or spread."
              },
              {
                "code": "At Restaging",
                "display": "Restaging",
                "definition": "Two or more adjacent copies of an identical pattern.: The extent of a cancer within the body, especially whether the disease has spread from the original site to other parts of the body."
              },
              {
                "code": "Initial Diagnosis",
                "display": "First Diagnosis",
                "definition": "Preceding all others in time or space or degree.: The investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation."
              },
              {
                "code": "Current Diagnosis",
                "display": "Current Diagnosis",
                "definition": "Occurring in or belonging to the present time.: The investigation, analysis and recognition of the presence and nature of disease, condition, or injury from expressed signs and symptoms; also, the scientific determination of any kind; the concise results of such an investigation."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e8407-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921071v1.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e8407-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e8830-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921081v1.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Cytologic",
                "display": "Cytological Procedure",
                "definition": "Technique or procedure for manipulation of cells and analysis of cell properties and subcellular features."
              },
              {
                "code": "Histologic",
                "display": "Histological Procedure",
                "definition": "Technique or procedure used for the study of the microanatomy of tissues and their cellular structure; usually involves microscopic examination of tissue slices."
              },
              {
                "code": "Histologic and Cytologic",
                "display": "Histologic and Cytologic Procedures",
                "definition": "Pertaining to the combined microscopic physical features of cells and their surrounding extracellular environment in tissues.: The light microscopic study of normal and abnormal cells in fine needle aspirates (FNAs), body cavity fluids, and smears.: Having been established or verified."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e8830-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921081v1.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e8830-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e9025-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921085v1.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "G1",
                "display": "Well Differentiated",
                "definition": "Describes tumor cells that generally retain the appearance of normal cells and tend to grow and spread at a slower rate than undifferentiated or poorly differentiated tumor cells."
              },
              {
                "code": "G2",
                "display": "Moderately Differentiated",
                "definition": "Definition not available."
              },
              {
                "code": "G3",
                "display": "Poorly Differentiated",
                "definition": "Describes tumor cells that generally have lost most of the appearance of normal cells. They tend to grow and spread."
              },
              {
                "code": "G4",
                "display": "Undifferentiated",
                "definition": "A term used to describe cells or tissues that do not have specialized (\"mature\") structures or functions. Undifferentiated cancer cells often grow and spread quickly."
              },
              {
                "code": "GB",
                "display": "Borderline Histologic Grade",
                "definition": "Straddling the dividing line between two categories.: The degree of abnormality of cancer cells, a measure of differentiation, the extent to which cancer cells are similar in appearance and function to healthy cells of the same tissue type. The degree of differentiation often relates to the clinical behavior of the particular tumor. Based on the microscopic findings, tumor grade is commonly described by one of four degrees of severity. Histopathologic grade of a tumor may be used to plan treatment and estimate the future course, outcome, and overall prognosis of disease. Certain types of cancers, such as soft tissue sarcoma, primary brain tumors, lymphomas, and breast have special grading systems."
              },
              {
                "code": "GX",
                "display": "Grade Cannot be Assessed",
                "definition": "An operation in which a term denies or inverts the meaning of another term or construction.: Having determined the value, significance, or extent of.: The degree of abnormality of cancer cells, a measure of differentiation, the extent to which cancer cells are similar in appearance and function to healthy cells of the same tissue type. The degree of differentiation often relates to the clinical behavior of the particular tumor. Based on the microscopic findings, tumor grade is commonly described by one of four degrees of severity. Histopathologic grade of a tumor may be used to plan treatment and estimate the future course, outcome, and overall prognosis of disease. Certain types of cancers, such as soft tissue sarcoma, primary brain tumors, lymphomas, and breast have special grading systems."
              },
              {
                "code": "High Grade",
                "display": "High Grade",
                "definition": "Used to describe tumor samples that exhibit poorly differentiated or undifferentiated cells. They are generally expected to be fast growing and aggressive."
              },
              {
                "code": "Low Grade",
                "display": "Low Grade",
                "definition": "Used to describe tumor samples that exhibit well to moderately well differentiated cells. They are generally expected to be slow growing and less aggressive."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e9025-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3921052v1.0/question_identifier#3921085v1.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e9025-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "url": "http://hl7.org/fhir/Questionnaire/3921052v1.0",
        "identifier": [
          {
            "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier",
            "value": "3921052v1.0/"
          }
        ],
        "status": "draft",
        "date": "2013-10-16",
        "publisher": "National Cancer Institute (NCI)",
        "useContext": [
          {
            "coding": [
              {
                "code": "CRF"
              }
            ]
          }
        ],
        "title": "Diagnosis NCI Standard Template",
        "item": [
          {
            "linkId": "3921053v1.0",
            "text": "Mandatory Diagnosis Questions",
            "type": "group",
            "required": true,
            "item": [
              {
                "text": "These items must be included when this data is collected for reporting.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#62667v3.0"
                    }
                  }
                ],
                "linkId": "3921059v1.0",
                "text": "Date of Current Pathologic Diagnosis",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#3914869v1.0"
                    }
                  }
                ],
                "linkId": "3921060v1.0",
                "text": "Diagnosis Type",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e8086-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#3914972v1.0"
                    }
                  }
                ],
                "linkId": "3921065v1.0",
                "text": "Primary Site",
                "type": "string"
              }
            ]
          },
          {
            "linkId": "3921066v1.0",
            "text": "Conditional Diagnosis Questions",
            "type": "group",
            "item": [
              {
                "text": "There are business rules to indicate situations under which these elements should be used on a case report form.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2816923v1.0"
                    }
                  }
                ],
                "linkId": "3921071v1.0",
                "text": "Diagnosis Time Point",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e8407-vs"
                }
              }
            ]
          },
          {
            "linkId": "3921077v1.0",
            "text": "Optional Diagnosis Questions",
            "type": "group",
            "item": [
              {
                "text": "There is no requirement for inclusion of these elements on the case report form. If the design and scientific questions posed in the study dictate the need to collect this type of data, these elements should be included.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#64320v3.0"
                    }
                  }
                ],
                "linkId": "3921079v1.0",
                "text": "Reviewing Pathologist",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2004425v4.0"
                    }
                  }
                ],
                "linkId": "3921080v1.0",
                "text": "MedDRA disease code",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#3914983v1.0"
                    }
                  }
                ],
                "linkId": "3921081v1.0",
                "text": "Assessment Method",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e8830-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2785839v2.0"
                    }
                  }
                ],
                "linkId": "3921085v1.0",
                "text": "Tumor grade",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e9025-vs"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "http://AHRQ.org/form/Questionnaire/F2674812v4.0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "2674812v4.0",
        "meta": {
          "lastUpdated": "2014-05-15T17:25:15Z"
        },
        "language": "en",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
        },
        "contained": [
          {
            "resourceType": "CodeSystem",
            "id": "d1e9892-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702892v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Female",
                "display": "Female Gender",
                "definition": "An individual who reports belonging to the cultural gender role distinction of female."
              },
              {
                "code": "Male",
                "display": "Male Gender",
                "definition": "An individual who reports belonging to the cultural gender role distinction of male."
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Not known, not observed, not recorded, or refused."
              },
              {
                "code": "Unspecified",
                "display": "Unspecified",
                "definition": "Not stated explicitly or in detail."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e9892-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702892v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e9892-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e10146-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702904v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "American Indian or Alaska Native",
                "display": "American Indian or Alaska Native",
                "definition": "A person having origins in any of the original peoples of North and South America (including Central America), and who maintains tribal affiliation or community attachment."
              },
              {
                "code": "Asian",
                "display": "Asian",
                "definition": "A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam."
              },
              {
                "code": "Black or African American",
                "display": "Black or African American",
                "definition": "A person having origins in any of the black racial groups of Africa. Terms such as \"Haitian\" or \"Negro\" can be used in addition to \"Black or African American.\""
              },
              {
                "code": "Native Hawaiian or other Pacific Islander",
                "display": "Native Hawaiian or Other Pacific Islander",
                "definition": "A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands."
              },
              {
                "code": "Not Reported",
                "display": "Not Reported",
                "definition": "Not provided or available"
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Could not be determined or unsure"
              },
              {
                "code": "White",
                "display": "White",
                "definition": "A person having origins in any of the original peoples of Europe, the Middle East, or North Africa."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e10146-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702904v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e10146-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e10593-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702898v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Hispanic or Latino",
                "display": "Hispanic or Latino",
                "definition": "A person of Mexican, Puerto Rican, Cuban, Central or South American or other Spanish culture or origin, regardless of race."
              },
              {
                "code": "Not Hispanic or Latino",
                "display": "Not Hispanic or Latino",
                "definition": "A person not meeting the definition for Hispanic or Latino."
              },
              {
                "code": "Not reported",
                "display": "Not Reported",
                "definition": "Not provided or available"
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Could not be determined or unsure"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e10593-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702898v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e10593-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e10923-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702916v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Managed Care/Medicare",
                "display": "Managed Care/Medicare",
                "definition": "An arrangement whereby a third-party payer (e.g., insurance company, federal government, or corporation) mediates between physicians and patients, negotiating fees for service and overseeing the types of treatment given. Managed care has virtually replaced unmanaged indemnity plans, where payment is automatic and oversight procedures are minimal. Whereas 96% of American workers had unmanaged indemnity in 1984, only 28% did in 1988. Typically, in managed care, the third-party payer requires second opinions and pre-certification review for patients requiring hospital admission. They obtain wholesale prices from doctors, and carry out cost-containment measures, including auditing hospitals and reviewing claims. Managed care has figured heavily in the national debate over health care.: A program under the U.S. Social Security Administration that reimburses hospitals and physicians for medical care provided to qualifying people over 65 years old."
              },
              {
                "code": "Medicaid",
                "display": "Medicaid",
                "definition": "A jointly funded program of the United States federal and state governments that provides hospital expense and medical expense coverage to some people with low-income and certain aged and disabled individuals."
              },
              {
                "code": "Medicaid and Medicare",
                "display": "Medicare And Medicaid",
                "definition": "A program under the U.S. Social Security Administration that reimburses hospitals and physicians for medical care provided to qualifying people over 65 years old.: An article which expresses the relation of connection or addition. It is used to conjoin a word with a word, a clause with a clause, or a sentence with a sentence.: A jointly funded program of the United States federal and state governments that provides hospital expense and medical expense coverage to some people with low-income and certain aged and disabled individuals."
              },
              {
                "code": "Medicare",
                "display": "Medicare",
                "definition": "A program under the U.S. Social Security Administration that reimburses hospitals and physicians for medical care provided to qualifying people over 65 years old."
              },
              {
                "code": "Medicare and Private Insurance",
                "display": "Medicare And Private Insurance",
                "definition": "A program under the U.S. Social Security Administration that reimburses hospitals and physicians for medical care provided to qualifying people over 65 years old.: An article which expresses the relation of connection or addition. It is used to conjoin a word with a word, a clause with a clause, or a sentence with a sentence.: Not public; kept secret or restricted.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "Military or Veterans Sponsored, NOS",
                "display": "Military Or Veterans Sponsored Insurance, Not Otherwise Specified",
                "definition": "The armed forces of a country.: Or; used to connect words, phrases, or clauses representing alternatives; used to connect alternative terms for the same thing; used in correlation; used to correct or rephrase what was previously said; otherwise.: A division of the Executive Branch of the United States government concerned with overall planning, promoting, and administering programs pertaining to veterans. The Department of Veterans Affairs (VA) was established March 15, 1989 as a Cabinet-level position.: A person or organization that supports or champions something.: Not characterized in any other way.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "Military Sponsored (Including CHAMPUS & TriCare)",
                "display": "Military Insurance",
                "definition": "The armed forces of a country.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "No Means of Payment (No Insurance)",
                "display": "No Insurance",
                "definition": "The non-affirmative response to a question.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "Other",
                "display": "Other",
                "definition": "Not otherwise specified."
              },
              {
                "code": "Private Insurance",
                "display": "Private Insurance",
                "definition": "Not public; kept secret or restricted.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "Self-Pay (No Insurance)",
                "display": "Self Payment",
                "definition": "The individual as the object of his own reflective consciousness.: Payment; a sum of money paid."
              },
              {
                "code": "State Supplemental Health Insurance",
                "display": "State Supplemental Health Insurance",
                "definition": "A U.S. State is any one of the fifty states which is a member of the federation known as the United States of America. Other US geographic areas, such as Puerto Rico and the District of Columbia, are essentially equivalent to State when used in an address. (from Wikipedia and NCI): Something added to complete a thing, make up for a deficiency, or extend or strengthen the whole; serving to complete or make an addition.: The state of the organism when it functions optimally without evidence of disease.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Not known, not observed, not recorded, or refused."
              },
              {
                "code": "Veterans Sponsored",
                "display": "Veterans Administration Sponsor Insurance",
                "definition": "A division of the Executive Branch of the United States government concerned with overall planning, promoting, and administering programs pertaining to veterans. The Department of Veterans Affairs (VA) was established March 15, 1989 as a Cabinet-level position.: A person or organization that supports or champions something.: A mechanism for guarding against financial aspects of risk by making payments in the form of premiums to an insurance company, which pays an agreed-upon sum to the insured in the event of loss."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e10923-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702916v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e10923-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e11887-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702942v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Bachelor's Degree",
                "display": "Bachelor's Degree",
                "definition": "Bachelor's degree is an award (baccalaureate or equivalent degree, as determined by the Secretary of the U.S. Department of Education) conferred by a college, university, or other postsecondary education institution as official recognition for the successful completion of a program of studies, that normally requires at least four years of full-time equivalent college-level work. This includes bachelor's degrees conferred in a five-year cooperative program."
              },
              {
                "code": "Doctoral degree or professional degree",
                "display": "Professional Doctorate or Doctorate Degree",
                "definition": "A doctorate awarded in certain fields where most holders of the degree are not engaged primarily in scholarly research and academic activities, but rather in a profession, such as law, medicine, music, or ministry.: Or; used to connect words, phrases, or clauses representing alternatives; used to connect alternative terms for the same thing; used in correlation; used to correct or rephrase what was previously said; otherwise.: The Doctor's Degree is the highest award a student can earn for graduate study. The doctor's degree classification includes such degrees in any field."
              },
              {
                "code": "Grade School",
                "display": "Grade School",
                "definition": "A school for young children; usually the first 6 or 8 grades."
              },
              {
                "code": "Graduate or professional degree",
                "display": "Graduation Or Professional Degree",
                "definition": "Conferral or receipt of an academic degree or diploma marking the completion of a defined set of coursework.: Or; used to connect words, phrases, or clauses representing alternatives; used to connect alternative terms for the same thing; used in correlation; used to correct or rephrase what was previously said; otherwise.: An occupation requiring special education, especially in the liberal arts or sciences.: An academic degree is an award conferred by a college, university, or other postsecondary education institution as official recognition for the successful completion of a program of studies."
              },
              {
                "code": "High school graduate (including equivalency)",
                "display": "High School Completion or General Equivalency Diploma (GED) Completion",
                "definition": "Indicates that a person has attended high school and has received a high school diploma.: Or; used to connect words, phrases, or clauses representing alternatives; used to connect alternative terms for the same thing; used in correlation; used to correct or rephrase what was previously said; otherwise.: Indicates that a person has received a General Equivalency Diploma in lieu of a high school diploma."
              },
              {
                "code": "Master's Degree",
                "display": "Master's Degree",
                "definition": "The Master's Degree is an award that requires the successful completion of a program of study of at least the full-time equivalent of 1 but not more than two academic years of work beyond the bachelor's degree."
              },
              {
                "code": "No formal education",
                "display": "No Formal Schooling",
                "definition": "Indicates that a person has never attended an educational program or formal schooling."
              },
              {
                "code": "Not high school graduate",
                "display": "Not High School Graduate",
                "definition": "Indicates a person has attended high school but did not complete high school and did not receive a high school diploma."
              },
              {
                "code": "Some college or associate degree",
                "display": "Some College or Associates Degree",
                "definition": "An institution of higher education created to educate and grant degrees; often a part of a university.: At least a small amount or number of.: Or; used to connect words, phrases, or clauses representing alternatives; used to connect alternative terms for the same thing; used in correlation; used to correct or rephrase what was previously said; otherwise.: A degree granted by a two-year college on successful completion of the undergraduates course of studies."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e11887-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702942v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e11887-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e12384-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702952v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Other country",
                "display": "Other country",
                "definition": "Other country of birth."
              },
              {
                "code": "Other country, specify",
                "display": "OTHER COUNTRY, SPECIFY",
                "definition": "OTHER COUNTRY, SPECIFY"
              },
              {
                "code": "USA",
                "display": "USA",
                "definition": "USA"
              },
              {
                "code": "USA, specify the 2 letter State code, eg NY",
                "display": "USA, SPECIFY THE 2 LETTER STATE CODE, EG NY",
                "definition": "USA, SPECIFY THE 2 LETTER STATE CODE, EG NY"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e12384-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702952v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e12384-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e12630-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702957v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "10th Grade",
                "display": "10th Grade",
                "definition": "Indicates that 10th grade is the highest level of educational achievement"
              },
              {
                "code": "11th Grade",
                "display": "11th Grade",
                "definition": "Indicates that 11th grade is the highest level of educational achievement"
              },
              {
                "code": "12th Grade No Diploma",
                "display": "12th Grade",
                "definition": "Indicates that a person was in school through 12th grade but that they did not receive a high school diploma."
              },
              {
                "code": "1st Grade",
                "display": "1st Grade",
                "definition": "Indicates that 1st grade is the highest level of educational achievement."
              },
              {
                "code": "2nd Grade",
                "display": "2nd Grade",
                "definition": "Indicates that 2nd grade is the highest level of educational achievement."
              },
              {
                "code": "3rd Grade",
                "display": "3rd Grade",
                "definition": "Indicates that 3rd grade is the highest level of educational achievement."
              },
              {
                "code": "4th Grade",
                "display": "4th Grade",
                "definition": "Indicates that 4th grade is the highest level of educational achievement."
              },
              {
                "code": "5th Grade",
                "display": "5th Grade",
                "definition": "Indicates that 5th grade is the highest level of educational achievement."
              },
              {
                "code": "6th Grade",
                "display": "6th Grade",
                "definition": "Indicates that 6th grade is the highest level of educational achievement."
              },
              {
                "code": "7th Grade",
                "display": "7th Grade",
                "definition": "Indicates that 7th grade is the highest level of educational achievement"
              },
              {
                "code": "8th Grade",
                "display": "8th Grade",
                "definition": "Indicates that 8th grade is the highest level of educational achievement"
              },
              {
                "code": "9th Grade",
                "display": "9th Grade",
                "definition": "Indicates that 9th grade is the highest level of educational achievement"
              },
              {
                "code": "Academic Doctorate Degree",
                "display": "Academic Doctorate Degree Completion",
                "definition": "Indicates that a person has received a degree the highest award earned for graduate study."
              },
              {
                "code": "Associate Degree",
                "display": "Associate Degree",
                "definition": "Indicates that a person has received a degree from a 2 year college program."
              },
              {
                "code": "Bachelor Degree",
                "display": "Bachelor's Degree Completion",
                "definition": "Indicates that a person has received a degree for successful completion of a program of studies that normally requires at least 4-5 years of full-time equivalent college-level work."
              },
              {
                "code": "Don't Know",
                "display": "Does Not Know",
                "definition": "The answer is not known by the person answering."
              },
              {
                "code": "General Equivalency Diploma",
                "display": "General Equivalency Diploma",
                "definition": "Indicates that a person has received a General Equivalency Diploma in lieu of a high school diploma."
              },
              {
                "code": "High School Graduate",
                "display": "High School Graduate",
                "definition": "Indicates that a person has attended high school and has received a high school diploma."
              },
              {
                "code": "Kindergarten",
                "display": "Kindergarten Completion",
                "definition": "Indicates that kindergarten is the highest level of education achievement."
              },
              {
                "code": "Master's Degree",
                "display": "Master's Degree Completion",
                "definition": "Indicates that a person has received a degree for completion of at least one year of prescribed study beyond the bachelor's degree."
              },
              {
                "code": "No Formal Schooling",
                "display": "Never Attended",
                "definition": "Indicates that a person never attended school or only attended kindergarten."
              },
              {
                "code": "Preschool",
                "display": "Preschool Completion",
                "definition": "Indicates that preschool is the highest level of education achievement."
              },
              {
                "code": "Professional Doctorate Degree",
                "display": "Professional Doctorate Degree Completion",
                "definition": "Indicates that a person has received a degree allowing them to practice a profession, such as law, medicine, music, or ministry."
              },
              {
                "code": "Refused",
                "display": "Refuse",
                "definition": "To decline to do, accept, give, or allow something."
              },
              {
                "code": "Some College, No Degree",
                "display": "Some College",
                "definition": "Indicates that a person has attended college but that they did not receive any degree."
              },
              {
                "code": "VoTech Program",
                "display": "Vocational Degree",
                "definition": "Indicates that a person has received a degree from a occupational, technical, or vocational program."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e12630-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702957v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e12630-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e14027-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702985v4.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Divorced",
                "display": "Divorced: C51776",
                "definition": "A person whose marriage has been legally dissolved and has not remarried."
              },
              {
                "code": "Domestic Partnership",
                "display": "Domestic Partner",
                "definition": "A person who is a member of an unmarried couple, including same sex couples, living together in longstanding relationships, that are registered or unregistered."
              },
              {
                "code": "Married",
                "display": "Married: C51773",
                "definition": "A person currently joined in matrimony. Classify common law marriage as married. Includes married couples living together and not living together."
              },
              {
                "code": "Never Married",
                "display": "Never married",
                "definition": "A person who has never been married or whose only marriages have been annulled."
              },
              {
                "code": "Separated",
                "display": "SEPARATED",
                "definition": "A person living apart from his/her spouse by legal arrangement."
              },
              {
                "code": "Widowed",
                "display": "WIDOWED",
                "definition": "A person who is no longer married because of the death of his/her spouse and who has not remarried."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e14027-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/2674812v4.0/question_identifier#3702985v4.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e14027-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "url": "http://hl7.org/fhir/Questionnaire/2674812v4.0",
        "identifier": [
          {
            "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier",
            "value": "2674812v4.0/"
          }
        ],
        "status": "published",
        "date": "2013-03-22",
        "publisher": "National Cancer Institute (NCI)",
        "useContext": [
          {
            "coding": [
              {
                "code": "CRF"
              }
            ]
          },
          {
            "coding": [
              {
                "code": "Demographic"
              }
            ]
          }
        ],
        "title": "Demography NCI Standard Template",
        "item": [
          {
            "linkId": "3702891v4.0",
            "text": "Mandatory Demography Questions",
            "type": "group",
            "required": true,
            "item": [
              {
                "text": "These items must be included when this data is collected for reporting",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 4
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2200604v3.0"
                    }
                  }
                ],
                "linkId": "3702892v4.0",
                "text": "Gender",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e9892-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 5
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2192199v1.0"
                    }
                  }
                ],
                "linkId": "3702904v4.0",
                "text": "Race",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e10146-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#793v5.1"
                    }
                  }
                ],
                "linkId": "3702903v4.0",
                "text": "Patient's Date of Birth",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 7
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2192217v2.0"
                    }
                  }
                ],
                "linkId": "3702898v4.0",
                "text": "Ethnicity",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e10593-vs"
                }
              }
            ]
          },
          {
            "linkId": "3702912v4.0",
            "text": "Conditional Demography Questions",
            "type": "group",
            "item": [
              {
                "text": "There are business rules to indicate situations under which these elements should be used on a case report form.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2179606v2.0"
                    }
                  }
                ],
                "linkId": "3702914v4.0",
                "text": "ZIP Code",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2865130v1.0"
                    }
                  }
                ],
                "linkId": "3702916v4.0",
                "text": "Payment Method",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e10923-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#315v4.0"
                    }
                  }
                ],
                "linkId": "3702932v4.0",
                "text": "Country of Residence",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2003745v5.0"
                    }
                  }
                ],
                "linkId": "3702934v4.0",
                "text": "Date Completed",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2200286v1.0"
                    }
                  }
                ],
                "linkId": "3702936v4.0",
                "text": "CDC Race Code",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2200284v2.0"
                    }
                  }
                ],
                "linkId": "3702938v4.0",
                "text": "CDC Ethnicity Code",
                "type": "string"
              }
            ]
          },
          {
            "linkId": "3702940v4.0",
            "text": "Optional Demography Questions",
            "type": "group",
            "item": [
              {
                "text": "There is no requirement for inclusion of these elements on the case report form. If the design and scientific questions posed in the study dictate the need to collect this type of data, these elements should be included.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2681552v1.0"
                    }
                  }
                ],
                "linkId": "3702942v4.0",
                "text": "Highest Education Level",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e11887-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2001708v5.0"
                    }
                  }
                ],
                "linkId": "3702952v4.0",
                "text": "Country of Birth",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e12384-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2674076v2.0"
                    }
                  }
                ],
                "linkId": "3702957v4.0",
                "text": "Highest Education Level",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e12630-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/entryFormat",
                    "valueString": "9999.99"
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2943243v1.0"
                    }
                  }
                ],
                "linkId": "3702984v4.0",
                "text": "Census Tract Code at Enrollment",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2188083v2.0"
                    }
                  }
                ],
                "linkId": "3702985v4.0",
                "text": "Marital Status",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e14027-vs"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "http://AHRQ.org/form/Questionnaire/3265657v2.0",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "3265657v2.0",
        "meta": {
          "lastUpdated": "2014-05-15T17:25:15Z"
        },
        "language": "en",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">Todo</div>"
        },
        "contained": [
          {
            "resourceType": "CodeSystem",
            "id": "d1e14927-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556214v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Abdominal distension",
                "display": "Abdominal distension",
                "definition": "A disorder characterized by swelling of the abdomen."
              },
              {
                "code": "Abdominal infection",
                "display": "Abdominal infection",
                "definition": "A disorder characterized by an infectious process involving the abdominal cavity."
              },
              {
                "code": "Abdominal pain",
                "display": "Abdominal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the abdominal region."
              },
              {
                "code": "Abdominal soft tissue necrosis",
                "display": "Abdominal soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the abdominal wall."
              },
              {
                "code": "Abducens nerve disorder",
                "display": "Abducens nerve disorder",
                "definition": "A disorder characterized by involvement of the abducens nerve (sixth cranial nerve)."
              },
              {
                "code": "Accessory nerve disorder",
                "display": "Accessory nerve disorder",
                "definition": "A disorder characterized by involvement of the accessory nerve (eleventh cranial nerve)."
              },
              {
                "code": "Acidosis",
                "display": "Acidosis",
                "definition": "A disorder characterized by abnormally high acidity (high hydrogen-ion concentration) of the blood and other body tissues."
              },
              {
                "code": "Acoustic nerve disorder NOS",
                "display": "Acoustic nerve disorder NOS",
                "definition": "A disorder characterized by involvement of the acoustic nerve (eighth cranial nerve)."
              },
              {
                "code": "Activated partial thromboplastin time prolonged",
                "display": "Activated partial thromboplastin time prolonged",
                "definition": "An abnormal laboratory test result in which the partial thromboplastin time is found to be greater than the control value. As a possible indicator of coagulopathy, a prolonged partial thromboplastin time (PTT) may occur in a variety of diseases and disorders, both primary and related to treatment."
              },
              {
                "code": "Acute coronary syndrome",
                "display": "Acute coronary syndrome",
                "definition": "A disorder characterized by signs and symptoms related to acute ischemia of the myocardium secondary to coronary artery disease. The clinical presentation covers a spectrum of heart diseases from unstable angina to myocardial infarction."
              },
              {
                "code": "Acute kidney injury",
                "display": "Acute kidney injury",
                "definition": "A disorder characterized by the acute loss of renal function and is traditionally classified as pre-renal (low blood flow into kidney), renal (kidney damage) and post-renal causes (ureteral or bladder outflow obstruction)."
              },
              {
                "code": "Adrenal insufficiency",
                "display": "Adrenal insufficiency",
                "definition": "A disorder that occurs when the adrenal cortex does not produce enough of the hormone cortisol and in some cases, the hormone aldosterone. It may be due to a disorder of the adrenal cortex as in Addison's disease or primary adrenal insufficiency."
              },
              {
                "code": "Adult respiratory distress syndrome",
                "display": "Adult respiratory distress syndrome",
                "definition": "A disorder characterized by progressive and life-threatening pulmonary distress in the absence of an underlying pulmonary condition, usually following major trauma or surgery."
              },
              {
                "code": "Agitation",
                "display": "Agitation",
                "definition": "A disorder characterized by a state of restlessness associated with unpleasant feelings of irritability and tension."
              },
              {
                "code": "Akathisia",
                "display": "Akathisia",
                "definition": "A disorder characterized by an uncomfortable feeling of inner restlessness and inability to stay still; this is a side effect of some psychotropic drugs."
              },
              {
                "code": "Alanine aminotransferase increased",
                "display": "Alanine aminotransferase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of alanine aminotransferase (ALT or SGPT) in the blood specimen."
              },
              {
                "code": "Alcohol intolerance",
                "display": "Alcohol intolerance",
                "definition": "A disorder characterized by an increase in sensitivity to the adverse effects of alcohol, which can include nasal congestion, skin flushes, heart dysrhythmias, nausea, vomiting, indigestion and headaches."
              },
              {
                "code": "Alkaline phosphatase increased",
                "display": "Alkaline phosphatase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of alkaline phosphatase in a blood specimen."
              },
              {
                "code": "Alkalosis",
                "display": "Alkalosis",
                "definition": "A disorder characterized by abnormally high alkalinity (low hydrogen-ion concentration) of the blood and other body tissues."
              },
              {
                "code": "Allergic reaction",
                "display": "Allergic reaction",
                "definition": "A disorder characterized by an adverse local or general response from exposure to an allergen."
              },
              {
                "code": "Allergic rhinitis",
                "display": "Allergic rhinitis",
                "definition": "A disorder characterized by an inflammation of the nasal mucous membranes caused by an IgE-mediated response to external allergens. The inflammation may also involve the mucous membranes of the sinuses, eyes, middle ear, and pharynx. Symptoms include sneezing, nasal congestion, rhinorrhea and itching."
              },
              {
                "code": "Alopecia",
                "display": "Alopecia",
                "definition": "A disorder characterized by a decrease in density of hair compared to normal for a given individual at a given age and body location."
              },
              {
                "code": "Amnesia",
                "display": "Amnesia",
                "definition": "A disorder characterized by systematic and extensive loss of memory."
              },
              {
                "code": "Anal fistula",
                "display": "Anal fistula",
                "definition": "A disorder characterized by an abnormal communication between the opening in the anal canal to the perianal skin."
              },
              {
                "code": "Anal hemorrhage",
                "display": "Anal hemorrhage",
                "definition": "A disorder characterized by bleeding from the anal region."
              },
              {
                "code": "Anal mucositis",
                "display": "Anal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the anus."
              },
              {
                "code": "Anal necrosis",
                "display": "Anal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the anal region."
              },
              {
                "code": "Anal pain",
                "display": "Anal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the anal region."
              },
              {
                "code": "Anal stenosis",
                "display": "Anal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the anal canal."
              },
              {
                "code": "Anal ulcer",
                "display": "Anal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the anal canal."
              },
              {
                "code": "Anaphylaxis",
                "display": "Anaphylaxis",
                "definition": "A disorder characterized by an acute inflammatory reaction resulting from the release of histamine and histamine-like substances from mast cells, causing a hypersensitivity immune response. Clinically, it presents with breathing difficulty, dizziness, hypotension, cyanosis and loss of consciousness and may lead to death."
              },
              {
                "code": "Anemia",
                "display": "Anemia",
                "definition": "A disorder characterized by an reduction in the amount of hemoglobin in 100 ml of blood. Signs and symptoms of anemia may include pallor of the skin and mucous membranes, shortness of breath, palpitations of the heart, soft systolic murmurs, lethargy, and fatigability."
              },
              {
                "code": "Ankle fracture",
                "display": "Ankle fracture",
                "definition": "A finding of damage to the ankle joint characterized by a break in the continuity of the ankle bone. Symptoms include marked discomfort, swelling and difficulty moving the affected leg and foot."
              },
              {
                "code": "Anorectal infection",
                "display": "Anorectal infection",
                "definition": "A disorder characterized by an infectious process involving the anal area and the rectum."
              },
              {
                "code": "Anorexia",
                "display": "Anorexia",
                "definition": "A disorder characterized by a loss of appetite."
              },
              {
                "code": "Anorgasmia",
                "display": "Anorgasmia",
                "definition": "A disorder characterized by an inability to achieve orgasm."
              },
              {
                "code": "Anxiety",
                "display": "Anxiety",
                "definition": "A disorder characterized by apprehension of danger and dread accompanied by restlessness, tension, tachycardia, and dyspnea unattached to a clearly identifiable stimulus."
              },
              {
                "code": "Aortic injury",
                "display": "Aortic injury",
                "definition": "A finding of damage to the aorta."
              },
              {
                "code": "Aortic valve disease",
                "display": "Aortic valve disease",
                "definition": "A disorder characterized by a defect in aortic valve function or structure."
              },
              {
                "code": "Aphonia",
                "display": "Aphonia",
                "definition": "A disorder characterized by the inability to speak. It may result from injuries to the vocal cords or may be functional (psychogenic)."
              },
              {
                "code": "Apnea",
                "display": "Apnea",
                "definition": "A disorder characterized by cessation of breathing."
              },
              {
                "code": "Appendicitis",
                "display": "Appendicitis",
                "definition": "A disorder characterized by acute inflammation to the vermiform appendix caused by a pathogenic agent."
              },
              {
                "code": "Appendicitis perforated",
                "display": "Appendicitis perforated",
                "definition": "A disorder characterized by acute inflammation to the vermiform appendix caused by a pathogenic agent with gangrenous changes resulting in the rupture of the appendiceal wall. The appendiceal wall rupture causes the release of inflammatory and bacterial contents from the appendiceal lumen into the abdominal cavity."
              },
              {
                "code": "Arachnoiditis",
                "display": "Arachnoiditis",
                "definition": "A disorder characterized by inflammation of the arachnoid membrane and adjacent subarachnoid space."
              },
              {
                "code": "Arterial injury",
                "display": "Arterial injury",
                "definition": "A finding of damage to an artery."
              },
              {
                "code": "Arteritis infective",
                "display": "Arteritis infective",
                "definition": "A disorder characterized by an infectious process involving an artery."
              },
              {
                "code": "Arthralgia",
                "display": "Arthralgia",
                "definition": "A disorder characterized by a sensation of marked discomfort in a joint."
              },
              {
                "code": "Arthritis",
                "display": "Arthritis",
                "definition": "A disorder characterized by inflammation involving a joint."
              },
              {
                "code": "Ascites",
                "display": "Ascites",
                "definition": "A disorder characterized by accumulation of serous or hemorrhagic fluid in the peritoneal cavity."
              },
              {
                "code": "Aspartate aminotransferase increased",
                "display": "Aspartate aminotransferase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of aspartate aminotransferase (AST or SGOT) in a blood specimen."
              },
              {
                "code": "Aspiration",
                "display": "Aspiration",
                "definition": "A disorder characterized by inhalation of solids or liquids into the lungs."
              },
              {
                "code": "Asystole",
                "display": "Asystole",
                "definition": "A disorder characterized by a dysrhythmia without cardiac electrical activity. Typically, this is accompanied by cessation of the pumping function of the heart."
              },
              {
                "code": "Ataxia",
                "display": "Ataxia",
                "definition": "A disorder characterized by lack of coordination of muscle movements resulting in the impairment or inability to perform voluntary activities."
              },
              {
                "code": "Atelectasis",
                "display": "Atelectasis",
                "definition": "A disorder characterized by the collapse of part or the entire lung."
              },
              {
                "code": "Atrial fibrillation",
                "display": "Atrial fibrillation",
                "definition": "A disorder characterized by a dysrhythmia without discernible P waves and an irregular ventricular response due to multiple reentry circuits. The rhythm disturbance originates above the ventricles."
              },
              {
                "code": "Atrial flutter",
                "display": "Atrial flutter",
                "definition": "A disorder characterized by a dysrhythmia with organized rhythmic atrial contractions with a rate of 200-300 beats per minute. The rhythm disturbance originates in the atria."
              },
              {
                "code": "Atrioventricular block complete",
                "display": "Atrioventricular block complete",
                "definition": "A disorder characterized by a dysrhythmia with complete failure of atrial electrical impulse conduction through the AV node to the ventricles."
              },
              {
                "code": "Atrioventricular block first degree",
                "display": "Atrioventricular block first degree",
                "definition": "A disorder characterized by a dysrhythmia with a delay in the time required for the conduction of an electrical impulse through the atrioventricular (AV) node beyond 0.2 seconds; prolongation of the PR interval greater than 200 milliseconds."
              },
              {
                "code": "Autoimmune disorder",
                "display": "Autoimmune disorder",
                "definition": "A disorder resulting from loss of function or tissue destruction of an organ or multiple organs, arising from humoral or cellular immune responses of the individual to his own tissue constituents."
              },
              {
                "code": "Avascular necrosis",
                "display": "Avascular necrosis",
                "definition": "A disorder characterized by necrotic changes in the bone tissue due to interruption of blood supply. Most often affecting the epiphysis of the long bones, the necrotic changes result in the collapse and the destruction of the bone structure."
              },
              {
                "code": "Azoospermia",
                "display": "Azoospermia",
                "definition": "A disorder characterized by laboratory test results that indicate complete absence of spermatozoa in the semen."
              },
              {
                "code": "Back pain",
                "display": "Back pain",
                "definition": "A disorder characterized by marked discomfort sensation in the back region."
              },
              {
                "code": "Bile duct stenosis",
                "display": "Bile duct stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the bile duct."
              },
              {
                "code": "Biliary anastomotic leak",
                "display": "Biliary anastomotic leak",
                "definition": "A finding of leakage of bile due to breakdown of a biliary anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Biliary fistula",
                "display": "Biliary fistula",
                "definition": "A disorder characterized by an abnormal communication between the bile ducts and another organ or anatomic site."
              },
              {
                "code": "Biliary tract infection",
                "display": "Biliary tract infection",
                "definition": "A disorder characterized by an infectious process involving the biliary tract."
              },
              {
                "code": "Bladder anastomotic leak",
                "display": "Bladder anastomotic leak",
                "definition": "A finding of leakage of urine due to breakdown of a bladder anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Bladder infection",
                "display": "Bladder infection",
                "definition": "A disorder characterized by an infectious process involving the bladder."
              },
              {
                "code": "Bladder perforation",
                "display": "Bladder perforation",
                "definition": "A disorder characterized by a rupture in the bladder wall."
              },
              {
                "code": "Bladder spasm",
                "display": "Bladder spasm",
                "definition": "A disorder characterized by a sudden and involuntary contraction of the bladder wall."
              },
              {
                "code": "Bloating",
                "display": "Bloating",
                "definition": "A disorder characterized by subject-reported feeling of uncomfortable fullness of the abdomen."
              },
              {
                "code": "Blood and lymphatic system disorders - Other, Specify",
                "display": "Blood and lymphatic system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Blood antidiuretic hormone abnormal",
                "display": "Blood antidiuretic hormone abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of antidiuretic hormone in the blood specimen."
              },
              {
                "code": "Blood bilirubin increased",
                "display": "Blood bilirubin increased",
                "definition": "A finding based on laboratory test results that indicate an abnormally high level of bilirubin in the blood. Excess bilirubin is associated with jaundice."
              },
              {
                "code": "Blood corticotrophin decreased",
                "display": "Blood corticotrophin decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of corticotrophin in a blood specimen."
              },
              {
                "code": "Blood gonadotrophin abnormal",
                "display": "Blood gonadotrophin abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of gonadotrophin hormone in a blood specimen."
              },
              {
                "code": "Blood prolactin abnormal",
                "display": "Blood prolactin abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of prolactin hormone in a blood specimen."
              },
              {
                "code": "Blurred vision",
                "display": "Blurred vision",
                "definition": "A disorder characterized by visual perception of unclear or fuzzy images."
              },
              {
                "code": "Body odor",
                "display": "Body odor",
                "definition": "A disorder characterized by an abnormal body smell resulting from the growth of bacteria on the body."
              },
              {
                "code": "Bone infection",
                "display": "Bone infection",
                "definition": "A disorder characterized by an infectious process involving the bones."
              },
              {
                "code": "Bone marrow hypocellular",
                "display": "Bone marrow hypocellular",
                "definition": "A disorder characterized by the inability of the bone marrow to produce hematopoietic elements."
              },
              {
                "code": "Bone pain",
                "display": "Bone pain",
                "definition": "A disorder characterized by marked discomfort sensation in the bones."
              },
              {
                "code": "Brachial plexopathy",
                "display": "Brachial plexopathy",
                "definition": "A disorder characterized by regional paresthesia of the brachial plexus, marked discomfort and muscle weakness, and limited movement in the arm or hand."
              },
              {
                "code": "Breast atrophy",
                "display": "Breast atrophy",
                "definition": "A disorder characterized by underdevelopment of the breast."
              },
              {
                "code": "Breast infection",
                "display": "Breast infection",
                "definition": "A disorder characterized by an infectious process involving the breast."
              },
              {
                "code": "Breast pain",
                "display": "Breast pain",
                "definition": "A disorder characterized by marked discomfort sensation in the breast region."
              },
              {
                "code": "Bronchial fistula",
                "display": "Bronchial fistula",
                "definition": "A disorder characterized by an abnormal communication between the bronchus and another organ or anatomic site."
              },
              {
                "code": "Bronchial infection",
                "display": "Bronchial infection",
                "definition": "A disorder characterized by an infectious process involving the bronchi."
              },
              {
                "code": "Bronchial obstruction",
                "display": "Bronchial obstruction",
                "definition": "A disorder characterized by blockage of a bronchus passage, most often by bronchial secretions and exudates."
              },
              {
                "code": "Bronchial stricture",
                "display": "Bronchial stricture",
                "definition": "A disorder characterized by a narrowing of the bronchial tube."
              },
              {
                "code": "Bronchopleural fistula",
                "display": "Bronchopleural fistula",
                "definition": "A disorder characterized by an abnormal communication between a bronchus and the pleural cavity."
              },
              {
                "code": "Bronchopulmonary hemorrhage",
                "display": "Bronchopulmonary hemorrhage",
                "definition": "A disorder characterized by bleeding from the bronchial wall and/or lung parenchyma."
              },
              {
                "code": "Bronchospasm",
                "display": "Bronchospasm",
                "definition": "A disorder characterized by a sudden contraction of the smooth muscles of the bronchial wall."
              },
              {
                "code": "Bruising",
                "display": "Bruising",
                "definition": "A finding of injury of the soft tissues or bone characterized by leakage of blood into surrounding tissues."
              },
              {
                "code": "Bullous dermatitis",
                "display": "Bullous dermatitis",
                "definition": "A disorder characterized by inflammation of the skin characterized by the presence of bullae which are filled with fluid."
              },
              {
                "code": "Burn",
                "display": "Burn",
                "definition": "A finding of impaired integrity to the anatomic site of an adverse thermal reaction. Burns can be caused by exposure to chemicals, direct heat, electricity, flames and radiation. The extent of damage depends on the length and intensity of exposure and time until provision of treatment."
              },
              {
                "code": "Buttock pain",
                "display": "Buttock pain",
                "definition": "A disorder characterized by marked discomfort sensation in the buttocks."
              },
              {
                "code": "Capillary leak syndrome",
                "display": "Capillary leak syndrome",
                "definition": "A disorder characterized by leakage of intravascular fluids into the extravascular space. This syndrome is observed in patients who demonstrate a state of generalized leaky capillaries following shock syndromes, low-flow states, ischemia-reperfusion injuries, toxemias, medications, or poisoning. It can lead to generalized edema and multiple organ failure."
              },
              {
                "code": "Carbon monoxide diffusing capacity decreased",
                "display": "Carbon monoxide diffusing capacity decreased",
                "definition": "A finding based on lung function test results that indicate a decrease in the lung capacity to absorb carbon monoxide."
              },
              {
                "code": "Cardiac arrest",
                "display": "Cardiac arrest",
                "definition": "A disorder characterized by cessation of the pumping function of the heart."
              },
              {
                "code": "Cardiac disorders - Other, Specify",
                "display": "Cardiac disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Cardiac troponin I increased",
                "display": "Cardiac troponin I increased",
                "definition": "A laboratory test result which indicates increased levels of cardiac troponin I in a biological specimen."
              },
              {
                "code": "Cardiac troponin T increased",
                "display": "Cardiac troponin T increased",
                "definition": "A laboratory test result which indicates increased levels of cardiac troponin T in a biological specimen."
              },
              {
                "code": "Cataract",
                "display": "Cataract",
                "definition": "A disorder characterized by partial or complete opacity of the crystalline lens of one or both eyes. This results in a decrease in visual acuity and eventual blindness if untreated."
              },
              {
                "code": "Catheter related infection",
                "display": "Catheter related infection",
                "definition": "A disorder characterized by an infectious process that arises secondary to catheter use."
              },
              {
                "code": "CD4 lymphocytes decreased",
                "display": "CD4 lymphocytes decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of CD4 lymphocytes in a blood specimen."
              },
              {
                "code": "Cecal hemorrhage",
                "display": "Cecal hemorrhage",
                "definition": "A disorder characterized by bleeding from the cecum."
              },
              {
                "code": "Cecal infection",
                "display": "Cecal infection",
                "definition": "A disorder characterized by an infectious process involving the cecum."
              },
              {
                "code": "Central nervous system necrosis",
                "display": "Central nervous system necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the brain and/or spinal cord."
              },
              {
                "code": "Cerebrospinal fluid leakage",
                "display": "Cerebrospinal fluid leakage",
                "definition": "A disorder characterized by loss of cerebrospinal fluid into the surrounding tissues."
              },
              {
                "code": "Cervicitis infection",
                "display": "Cervicitis infection",
                "definition": "A disorder characterized by an infectious process involving the uterine cervix."
              },
              {
                "code": "Cheilitis",
                "display": "Cheilitis",
                "definition": "A disorder characterized by inflammation of the lip."
              },
              {
                "code": "Chest pain - cardiac",
                "display": "Chest pain - cardiac",
                "definition": "A disorder characterized by substernal discomfort due to insufficient myocardial oxygenation."
              },
              {
                "code": "Chest wall pain",
                "display": "Chest wall pain",
                "definition": "A disorder characterized by marked discomfort sensation in the chest wall region."
              },
              {
                "code": "Chills",
                "display": "Chills",
                "definition": "A disorder characterized by a sensation of cold that often marks a physiologic response to sweating after a fever."
              },
              {
                "code": "Cholecystitis",
                "display": "Cholecystitis",
                "definition": "A disorder characterized by inflammation involving the gallbladder. It may be associated with the presence of gallstones."
              },
              {
                "code": "Cholesterol high",
                "display": "Cholesterol high",
                "definition": "A finding based on laboratory test results that indicate higher than normal levels of cholesterol in a blood specimen."
              },
              {
                "code": "Chronic kidney disease",
                "display": "Chronic kidney disease",
                "definition": "A disorder characterized by gradual and usually permanent loss of kidney function resulting in renal failure."
              },
              {
                "code": "Chylothorax",
                "display": "Chylothorax",
                "definition": "A disorder characterized by milky pleural effusion (abnormal collection of fluid) resulting from accumulation of lymph fluid in the pleural cavity."
              },
              {
                "code": "Cognitive disturbance",
                "display": "Cognitive disturbance",
                "definition": "A disorder characterized by a conspicuous change in cognitive function."
              },
              {
                "code": "Colitis",
                "display": "Colitis",
                "definition": "A disorder characterized by inflammation of the colon."
              },
              {
                "code": "Colonic fistula",
                "display": "Colonic fistula",
                "definition": "A disorder characterized by an abnormal communication between the large intestine and another organ or anatomic site."
              },
              {
                "code": "Colonic hemorrhage",
                "display": "Colonic hemorrhage",
                "definition": "A disorder characterized by bleeding from the colon."
              },
              {
                "code": "Colonic obstruction",
                "display": "Colonic obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the colon."
              },
              {
                "code": "Colonic perforation",
                "display": "Colonic perforation",
                "definition": "A disorder characterized by a rupture in the colonic wall."
              },
              {
                "code": "Colonic stenosis",
                "display": "Colonic stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the colon."
              },
              {
                "code": "Colonic ulcer",
                "display": "Colonic ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the colon."
              },
              {
                "code": "Concentration impairment",
                "display": "Concentration impairment",
                "definition": "A disorder characterized by a deterioration in the ability to concentrate."
              },
              {
                "code": "Conduction disorder",
                "display": "Conduction disorder",
                "definition": "A disorder characterized by pathological irregularities in the cardiac conduction system."
              },
              {
                "code": "Confusion",
                "display": "Confusion",
                "definition": "A disorder characterized by a lack of clear and orderly thought and behavior."
              },
              {
                "code": "Congenital, familial and genetic disorders - Other, Specify",
                "display": "Congenital, familial and genetic disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Conjunctivitis",
                "display": "Conjunctivitis",
                "definition": "A disorder characterized by inflammation, swelling and redness to the conjunctiva of the eye."
              },
              {
                "code": "Conjunctivitis infective",
                "display": "Conjunctivitis infective",
                "definition": "A disorder characterized by an infectious process involving the conjunctiva. Clinical manifestations include pink or red color in the eyes."
              },
              {
                "code": "Constipation",
                "display": "Constipation",
                "definition": "A disorder characterized by irregular and infrequent or difficult evacuation of the bowels."
              },
              {
                "code": "Constrictive pericarditis",
                "display": "Constrictive pericarditis",
                "definition": "A disorder characterized by a thickened and fibrotic pericardial sac; these fibrotic changes impede normal myocardial function by restricting myocardial muscle action."
              },
              {
                "code": "Corneal infection",
                "display": "Corneal infection",
                "definition": "A disorder characterized by an infectious process involving the cornea."
              },
              {
                "code": "Corneal ulcer",
                "display": "Corneal ulcer",
                "definition": "A disorder characterized by an area of epithelial tissue loss on the surface of the cornea. It is associated with inflammatory cells in the cornea and anterior chamber."
              },
              {
                "code": "Cough",
                "display": "Cough",
                "definition": "A disorder characterized by sudden, often repetitive, spasmodic contraction of the thoracic cavity, resulting in violent release of air from the lungs and usually accompanied by a distinctive sound."
              },
              {
                "code": "CPK increased",
                "display": "CPK increased",
                "definition": "A finding based on laboratory test results that indicate an increase in levels of creatine phosphokinase in a blood specimen."
              },
              {
                "code": "Cranial nerve infection",
                "display": "Cranial nerve infection",
                "definition": "A disorder characterized by an infectious process involving a cranial nerve."
              },
              {
                "code": "Creatinine increased",
                "display": "Creatinine increased",
                "definition": "A finding based on laboratory test results that indicate increased levels of creatinine in a biological specimen."
              },
              {
                "code": "Cushingoid",
                "display": "Cushingoid",
                "definition": "A disorder characterized by signs and symptoms that resemble Cushing's disease or syndrome: buffalo hump obesity, striations, adiposity, hypertension, diabetes, and osteoporosis, usually due to exogenous corticosteroids."
              },
              {
                "code": "Cystitis noninfective",
                "display": "Cystitis noninfective",
                "definition": "A disorder characterized by inflammation of the bladder which is not caused by an infection of the urinary tract."
              },
              {
                "code": "Cytokine release syndrome",
                "display": "Cytokine release syndrome",
                "definition": "A disorder characterized by nausea, headache, tachycardia, hypotension, rash, and shortness of breath; it is caused by the release of cytokines from the cells."
              },
              {
                "code": "Death neonatal",
                "display": "Death neonatal",
                "definition": "A disorder characterized by cessation of life occurring during the first 28 days of life."
              },
              {
                "code": "Death NOS",
                "display": "Death NOS",
                "definition": "A cessation of life that cannot be attributed to a CTCAE term associated with Grade 5."
              },
              {
                "code": "Dehydration",
                "display": "Dehydration",
                "definition": "A disorder characterized by excessive loss of water from the body. It is usually caused by severe diarrhea, vomiting or diaphoresis."
              },
              {
                "code": "Delayed orgasm",
                "display": "Delayed orgasm",
                "definition": "A disorder characterized by sexual dysfunction characterized by a delay in climax."
              },
              {
                "code": "Delayed puberty",
                "display": "Delayed puberty",
                "definition": "A disorder characterized by unusually late sexual maturity."
              },
              {
                "code": "Delirium",
                "display": "Delirium",
                "definition": "A disorder characterized by the acute and sudden development of confusion, illusions, movement changes, inattentiveness, agitation, and hallucinations. Usually, it is a reversible condition."
              },
              {
                "code": "Delusions",
                "display": "Delusions",
                "definition": "A disorder characterized by false personal beliefs held contrary to reality, despite contradictory evidence and common sense."
              },
              {
                "code": "Dental caries",
                "display": "Dental caries",
                "definition": "A disorder characterized by the decay of a tooth, in which it becomes softened, discolored and/or porous."
              },
              {
                "code": "Depressed level of consciousness",
                "display": "Depressed level of consciousness",
                "definition": "A disorder characterized by a decrease in ability to perceive and respond."
              },
              {
                "code": "Depression",
                "display": "Depression",
                "definition": "A disorder characterized by melancholic feelings of grief or unhappiness."
              },
              {
                "code": "Dermatitis radiation",
                "display": "Dermatitis radiation",
                "definition": "A finding of cutaneous inflammatory reaction occurring as a result of exposure to biologically effective levels of ionizing radiation."
              },
              {
                "code": "Device related infection",
                "display": "Device related infection",
                "definition": "A disorder characterized by an infectious process involving the use of a medical device."
              },
              {
                "code": "Diarrhea",
                "display": "Diarrhea",
                "definition": "A disorder characterized by frequent and watery bowel movements."
              },
              {
                "code": "Disseminated intravascular coagulation",
                "display": "Disseminated intravascular coagulation",
                "definition": "A disorder characterized by systemic pathological activation of blood clotting mechanisms which results in clot formation throughout the body. There is an increase in the risk of hemorrhage as the body is depleted of platelets and coagulation factors."
              },
              {
                "code": "Dizziness",
                "display": "Dizziness",
                "definition": "A disorder characterized by a disturbing sensation of lightheadedness, unsteadiness, giddiness, spinning or rocking."
              },
              {
                "code": "Dry eye",
                "display": "Dry eye",
                "definition": "A disorder characterized by dryness of the cornea and conjunctiva."
              },
              {
                "code": "Dry mouth",
                "display": "Dry mouth",
                "definition": "A disorder characterized by reduced salivary flow in the oral cavity."
              },
              {
                "code": "Dry skin",
                "display": "Dry skin",
                "definition": "A disorder characterized by flaky and dull skin; the pores are generally fine, the texture is a papery thin texture."
              },
              {
                "code": "Duodenal fistula",
                "display": "Duodenal fistula",
                "definition": "A disorder characterized by an abnormal communication between the duodenum and another organ or anatomic site."
              },
              {
                "code": "Duodenal hemorrhage",
                "display": "Duodenal hemorrhage",
                "definition": "A disorder characterized by bleeding from the duodenum."
              },
              {
                "code": "Duodenal infection",
                "display": "Duodenal infection",
                "definition": "A disorder characterized by an infectious process involving the duodenum."
              },
              {
                "code": "Duodenal obstruction",
                "display": "Duodenal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of stomach contents through the duodenum."
              },
              {
                "code": "Duodenal perforation",
                "display": "Duodenal perforation",
                "definition": "A disorder characterized by a rupture in the duodenal wall."
              },
              {
                "code": "Duodenal stenosis",
                "display": "Duodenal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the duodenum."
              },
              {
                "code": "Duodenal ulcer",
                "display": "Duodenal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the duodenal wall."
              },
              {
                "code": "Dysarthria",
                "display": "Dysarthria",
                "definition": "A disorder characterized by slow and slurred speech resulting from an inability to coordinate the muscles used in speech."
              },
              {
                "code": "Dysesthesia",
                "display": "Dysesthesia",
                "definition": "A disorder characterized by distortion of sensory perception, resulting in an abnormal and unpleasant sensation."
              },
              {
                "code": "Dysgeusia",
                "display": "Dysgeusia",
                "definition": "A disorder characterized by abnormal sensual experience with the taste of foodstuffs; it can be related to a decrease in the sense of smell."
              },
              {
                "code": "Dysmenorrhea",
                "display": "Dysmenorrhea",
                "definition": "A disorder characterized by abnormally painful abdominal cramps during menses."
              },
              {
                "code": "Dyspareunia",
                "display": "Dyspareunia",
                "definition": "A disorder characterized by painful or difficult coitus."
              },
              {
                "code": "Dyspepsia",
                "display": "Dyspepsia",
                "definition": "A disorder characterized by an uncomfortable, often painful feeling in the stomach, resulting from impaired digestion. Symptoms include burning stomach, bloating, heartburn, nausea and vomiting."
              },
              {
                "code": "Dysphagia",
                "display": "Dysphagia",
                "definition": "A disorder characterized by difficulty in swallowing."
              },
              {
                "code": "Dysphasia",
                "display": "Dysphasia",
                "definition": "A disorder characterized by impairment of verbal communication skills, often resulting from brain damage."
              },
              {
                "code": "Dyspnea",
                "display": "Dyspnea",
                "definition": "A disorder characterized by an uncomfortable sensation of difficulty breathing."
              },
              {
                "code": "Ear and labyrinth disorders - Other, Specify",
                "display": "Ear and labyrinth disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Ear pain",
                "display": "Ear pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the ear."
              },
              {
                "code": "Edema cerebral",
                "display": "Edema cerebral",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the brain."
              },
              {
                "code": "Edema face",
                "display": "Edema face",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in facial tissues."
              },
              {
                "code": "Edema limbs",
                "display": "Edema limbs",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in the upper or lower extremities."
              },
              {
                "code": "Edema trunk",
                "display": "Edema trunk",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in the trunk area."
              },
              {
                "code": "Ejaculation disorder",
                "display": "Ejaculation disorder",
                "definition": "A disorder characterized by problems related to ejaculation. This category includes premature, delayed, retrograde and painful ejaculation."
              },
              {
                "code": "Ejection fraction decreased",
                "display": "Ejection fraction decreased",
                "definition": "The percentage computed when the amount of blood ejected during a ventricular contraction of the heart is compared to the amount that was present prior to the contraction."
              },
              {
                "code": "Electrocardiogram QT corrected interval prolonged",
                "display": "Electrocardiogram QT corrected interval prolonged",
                "definition": "A finding of a cardiac dysrhythmia characterized by an abnormally long corrected QT interval."
              },
              {
                "code": "Encephalitis infection",
                "display": "Encephalitis infection",
                "definition": "A disorder characterized by an infectious process involving the brain tissue."
              },
              {
                "code": "Encephalomyelitis infection",
                "display": "Encephalomyelitis infection",
                "definition": "A disorder characterized by an infectious process involving the brain and spinal cord tissues."
              },
              {
                "code": "Encephalopathy",
                "display": "Encephalopathy",
                "definition": "A disorder characterized by a pathologic process involving the brain."
              },
              {
                "code": "Endocarditis infective",
                "display": "Endocarditis infective",
                "definition": "A disorder characterized by an infectious process involving the endocardial layer of the heart."
              },
              {
                "code": "Endocrine disorders - Other, Specify",
                "display": "Endocrine disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Endophthalmitis",
                "display": "Endophthalmitis",
                "definition": "A disorder characterized by an infectious process involving the internal structures of the eye."
              },
              {
                "code": "Enterocolitis",
                "display": "Enterocolitis",
                "definition": "A disorder characterized by inflammation of the small and large intestines."
              },
              {
                "code": "Enterocolitis infectious",
                "display": "Enterocolitis infectious",
                "definition": "A disorder characterized by an infectious process involving the small and large intestines."
              },
              {
                "code": "Enterovesical fistula",
                "display": "Enterovesical fistula",
                "definition": "A disorder characterized by an abnormal communication between the urinary bladder and the intestine."
              },
              {
                "code": "Epistaxis",
                "display": "Epistaxis",
                "definition": "A disorder characterized by bleeding from the nose."
              },
              {
                "code": "Erectile dysfunction",
                "display": "Erectile dysfunction",
                "definition": "A disorder characterized by the persistent or recurrent inability to achieve or to maintain an erection during sexual activity."
              },
              {
                "code": "Erythema multiforme",
                "display": "Erythema multiforme",
                "definition": "A disorder characterized by target lesions (a pink-red ring around a pale center)."
              },
              {
                "code": "Erythroderma",
                "display": "Erythroderma",
                "definition": "A disorder characterized by generalized inflammatory erythema and exfoliation. The inflammatory process involves > 90% of the body surface area."
              },
              {
                "code": "Esophageal anastomotic leak",
                "display": "Esophageal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an esophageal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Esophageal fistula",
                "display": "Esophageal fistula",
                "definition": "A disorder characterized by an abnormal communication between the esophagus and another organ or anatomic site."
              },
              {
                "code": "Esophageal hemorrhage",
                "display": "Esophageal hemorrhage",
                "definition": "A disorder characterized by bleeding from the esophagus."
              },
              {
                "code": "Esophageal infection",
                "display": "Esophageal infection",
                "definition": "A disorder characterized by an infectious process involving the esophagus."
              },
              {
                "code": "Esophageal necrosis",
                "display": "Esophageal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the esophageal wall."
              },
              {
                "code": "Esophageal obstruction",
                "display": "Esophageal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the esophagus."
              },
              {
                "code": "Esophageal pain",
                "display": "Esophageal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the esophageal region."
              },
              {
                "code": "Esophageal perforation",
                "display": "Esophageal perforation",
                "definition": "A disorder characterized by a rupture in the wall of the esophagus."
              },
              {
                "code": "Esophageal stenosis",
                "display": "Esophageal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the esophagus."
              },
              {
                "code": "Esophageal ulcer",
                "display": "Esophageal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the esophageal wall."
              },
              {
                "code": "Esophageal varices hemorrhage",
                "display": "Esophageal varices hemorrhage",
                "definition": "A disorder characterized by bleeding from esophageal varices."
              },
              {
                "code": "Esophagitis",
                "display": "Esophagitis",
                "definition": "A disorder characterized by inflammation of the esophageal wall."
              },
              {
                "code": "Euphoria",
                "display": "Euphoria",
                "definition": "A disorder characterized by an exaggerated feeling of well-being which is disproportionate to events and stimuli."
              },
              {
                "code": "Exostosis",
                "display": "Exostosis",
                "definition": "A disorder characterized by non-neoplastic overgrowth of bone."
              },
              {
                "code": "External ear inflammation",
                "display": "External ear inflammation",
                "definition": "A disorder characterized by inflammation, swelling and redness to the outer ear and ear canal."
              },
              {
                "code": "External ear pain",
                "display": "External ear pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the external ear region."
              },
              {
                "code": "Extraocular muscle paresis",
                "display": "Extraocular muscle paresis",
                "definition": "A disorder characterized by incomplete paralysis of an extraocular muscle."
              },
              {
                "code": "Extrapyramidal disorder",
                "display": "Extrapyramidal disorder",
                "definition": "A disorder characterized by abnormal, repetitive, involuntary muscle movements, frenzied speech and extreme restlessness."
              },
              {
                "code": "Eye disorders - Other, Specify",
                "display": "Eye disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Eye infection",
                "display": "Eye infection",
                "definition": "A disorder characterized by an infectious process involving the eye."
              },
              {
                "code": "Eye pain",
                "display": "Eye pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the eye."
              },
              {
                "code": "Eyelid function disorder",
                "display": "Eyelid function disorder",
                "definition": "A disorder characterized by impaired eyelid function."
              },
              {
                "code": "Facial muscle weakness",
                "display": "Facial muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of the facial muscles."
              },
              {
                "code": "Facial nerve disorder",
                "display": "Facial nerve disorder",
                "definition": "A disorder characterized by involvement of the facial nerve (seventh cranial nerve)."
              },
              {
                "code": "Facial pain",
                "display": "Facial pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the face."
              },
              {
                "code": "Fall",
                "display": "Fall",
                "definition": "A finding of sudden movement downward, usually resulting in injury."
              },
              {
                "code": "Fallopian tube anastomotic leak",
                "display": "Fallopian tube anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a fallopian tube anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Fallopian tube obstruction",
                "display": "Fallopian tube obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the fallopian tube."
              },
              {
                "code": "Fallopian tube perforation",
                "display": "Fallopian tube perforation",
                "definition": "A finding of rupture of the fallopian tube wall."
              },
              {
                "code": "Fallopian tube stenosis",
                "display": "Fallopian tube stenosis",
                "definition": "A disorder characterized by a narrowing of the fallopian tube lumen."
              },
              {
                "code": "Fat atrophy",
                "display": "Fat atrophy",
                "definition": "A disorder characterized by shrinking of adipose tissue."
              },
              {
                "code": "Fatigue",
                "display": "Fatigue",
                "definition": "A disorder characterized by a state of generalized weakness with a pronounced inability to summon sufficient energy to accomplish daily activities."
              },
              {
                "code": "Febrile neutropenia",
                "display": "Febrile neutropenia",
                "definition": "A disorder characterized by a decrease in neutrophils associated with fever."
              },
              {
                "code": "Fecal incontinence",
                "display": "Fecal incontinence",
                "definition": "A disorder characterized by inability to control the escape of stool from the rectum."
              },
              {
                "code": "Female genital tract fistula",
                "display": "Female genital tract fistula",
                "definition": "A disorder characterized by an abnormal communication between a female reproductive system organ and another organ or anatomic site."
              },
              {
                "code": "Feminization acquired",
                "display": "Feminization acquired",
                "definition": "A disorder characterized by the development of secondary female sex characteristics in males due to extrinsic factors."
              },
              {
                "code": "Fetal death",
                "display": "Fetal death",
                "definition": "A disorder characterized by death in utero; failure of the product of conception to show evidence of respiration, heartbeat, or definite movement of a voluntary muscle after expulsion from the uterus, without possibility of resuscitation."
              },
              {
                "code": "Fetal growth retardation",
                "display": "Fetal growth retardation",
                "definition": "A disorder characterized by inhibition of fetal growth resulting in the inability of the fetus to achieve its potential weight."
              },
              {
                "code": "Fever",
                "display": "Fever",
                "definition": "A disorder characterized by elevation of the body's temperature above the upper limit of normal."
              },
              {
                "code": "Fibrinogen decreased",
                "display": "Fibrinogen decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of fibrinogen in a blood specimen."
              },
              {
                "code": "Fibrosis deep connective tissue",
                "display": "Fibrosis deep connective tissue",
                "definition": "A disorder characterized by fibrotic degeneration of the deep connective tissues."
              },
              {
                "code": "Flank pain",
                "display": "Flank pain",
                "definition": "A disorder characterized by marked discomfort sensation on the lateral side of the body in the region below the ribs and above the hip."
              },
              {
                "code": "Flashing lights",
                "display": "Flashing lights",
                "definition": "A disorder characterized by a sudden or brief burst of light."
              },
              {
                "code": "Flatulence",
                "display": "Flatulence",
                "definition": "A disorder characterized by a state of excessive gas in the alimentary canal."
              },
              {
                "code": "Floaters",
                "display": "Floaters",
                "definition": "A disorder characterized by an individual seeing spots before their eyes. The spots are shadows of opaque cell fragments in the vitreous humor or lens."
              },
              {
                "code": "Flu like symptoms",
                "display": "Flu like symptoms",
                "definition": "A disorder characterized by a group of symptoms similar to those observed in patients with the flu. It includes fever, chills, body aches, malaise, loss of appetite and dry cough."
              },
              {
                "code": "Flushing",
                "display": "Flushing",
                "definition": "A disorder characterized by episodic reddening of the face."
              },
              {
                "code": "Forced expiratory volume decreased",
                "display": "Forced expiratory volume decreased",
                "definition": "A finding based on test results that indicate a relative decrease in the fraction of the forced vital capacity that is exhaled in a specific number of seconds."
              },
              {
                "code": "Fracture",
                "display": "Fracture",
                "definition": "A finding of traumatic injury to the bone in which the continuity of the bone is broken."
              },
              {
                "code": "Gait disturbance",
                "display": "Gait disturbance",
                "definition": "A disorder characterized by walking difficulties."
              },
              {
                "code": "Gallbladder fistula",
                "display": "Gallbladder fistula",
                "definition": "A disorder characterized by an abnormal communication between the gallbladder and another organ or anatomic site."
              },
              {
                "code": "Gallbladder infection",
                "display": "Gallbladder infection",
                "definition": "A disorder characterized by an infectious process involving the gallbladder."
              },
              {
                "code": "Gallbladder necrosis",
                "display": "Gallbladder necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the gallbladder."
              },
              {
                "code": "Gallbladder obstruction",
                "display": "Gallbladder obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents of the gallbladder."
              },
              {
                "code": "Gallbladder pain",
                "display": "Gallbladder pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gallbladder region."
              },
              {
                "code": "Gallbladder perforation",
                "display": "Gallbladder perforation",
                "definition": "A disorder characterized by a rupture in the gallbladder wall."
              },
              {
                "code": "Gastric anastomotic leak",
                "display": "Gastric anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a gastric anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Gastric fistula",
                "display": "Gastric fistula",
                "definition": "A disorder characterized by an abnormal communication between the stomach and another organ or anatomic site."
              },
              {
                "code": "Gastric hemorrhage",
                "display": "Gastric hemorrhage",
                "definition": "A disorder characterized by bleeding from the gastric wall."
              },
              {
                "code": "Gastric necrosis",
                "display": "Gastric necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the gastric wall."
              },
              {
                "code": "Gastric perforation",
                "display": "Gastric perforation",
                "definition": "A disorder characterized by a rupture in the stomach wall."
              },
              {
                "code": "Gastric stenosis",
                "display": "Gastric stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the stomach."
              },
              {
                "code": "Gastric ulcer",
                "display": "Gastric ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the stomach."
              },
              {
                "code": "Gastritis",
                "display": "Gastritis",
                "definition": "A disorder characterized by inflammation of the stomach."
              },
              {
                "code": "Gastroesophageal reflux disease",
                "display": "Gastroesophageal reflux disease",
                "definition": "A disorder characterized by reflux of the gastric and/or duodenal contents into the distal esophagus. It is chronic in nature and usually caused by incompetence of the lower esophageal sphincter, and may result in injury to the esophageal mucosal. Symptoms include heartburn and acid indigestion."
              },
              {
                "code": "Gastrointestinal anastomotic leak",
                "display": "Gastrointestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a gastrointestinal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Gastrointestinal disorders - Other, Specify",
                "display": "Gastrointestinal disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Gastrointestinal fistula",
                "display": "Gastrointestinal fistula",
                "definition": "A disorder characterized by an abnormal communication between any part of the gastrointestinal system and another organ or anatomic site."
              },
              {
                "code": "Gastrointestinal pain",
                "display": "Gastrointestinal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gastrointestinal region."
              },
              {
                "code": "Gastrointestinal stoma necrosis",
                "display": "Gastrointestinal stoma necrosis",
                "definition": "A finding of a necrotic process occurring in the gastrointestinal tract stoma."
              },
              {
                "code": "Gastroparesis",
                "display": "Gastroparesis",
                "definition": "A disorder characterized by an incomplete paralysis of the muscles of the stomach wall resulting in delayed emptying of the gastric contents into the small intestine."
              },
              {
                "code": "General disorders and administration site conditions - Other, Specify",
                "display": "General disorders and administration site conditions - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Generalized muscle weakness",
                "display": "Generalized muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of muscles in multiple anatomic sites."
              },
              {
                "code": "Genital edema",
                "display": "Genital edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the genitals."
              },
              {
                "code": "GGT increased",
                "display": "GGT increased",
                "definition": "A finding based on laboratory test results that indicate higher than normal levels of the enzyme gamma-glutamyltransferase in the blood specimen. GGT (gamma-glutamyltransferase ) catalyzes the transfer of a gamma glutamyl group from a gamma glutamyl peptide to another peptide, amino acids or water."
              },
              {
                "code": "Gingival pain",
                "display": "Gingival pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gingival region."
              },
              {
                "code": "Glaucoma",
                "display": "Glaucoma",
                "definition": "A disorder characterized by an increase in pressure in the eyeball due to obstruction of the aqueous humor outflow."
              },
              {
                "code": "Glossopharyngeal nerve disorder",
                "display": "Glossopharyngeal nerve disorder",
                "definition": "A disorder characterized by involvement of the glossopharyngeal nerve (ninth cranial nerve)."
              },
              {
                "code": "Glucose intolerance",
                "display": "Glucose intolerance",
                "definition": "A disorder characterized by an inability to properly metabolize glucose."
              },
              {
                "code": "Growth accelerated",
                "display": "Growth accelerated",
                "definition": "A disorder characterized by greater growth than expected for age."
              },
              {
                "code": "Growth hormone abnormal",
                "display": "Growth hormone abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of growth hormone in a biological specimen."
              },
              {
                "code": "Growth suppression",
                "display": "Growth suppression",
                "definition": "A disorder characterized by of stature that is smaller than normal as expected for age."
              },
              {
                "code": "Gum infection",
                "display": "Gum infection",
                "definition": "A disorder characterized by an infectious process involving the gums."
              },
              {
                "code": "Gynecomastia",
                "display": "Gynecomastia",
                "definition": "A disorder characterized by excessive development of the breasts in males."
              },
              {
                "code": "Hallucinations",
                "display": "Hallucinations",
                "definition": "A disorder characterized by a false sensory perception in the absence of an external stimulus."
              },
              {
                "code": "Haptoglobin decreased",
                "display": "Haptoglobin decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of haptoglobin in a blood specimen."
              },
              {
                "code": "Head soft tissue necrosis",
                "display": "Head soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the head."
              },
              {
                "code": "Headache",
                "display": "Headache",
                "definition": "A disorder characterized by a sensation of marked discomfort in various parts of the head, not confined to the area of distribution of any nerve."
              },
              {
                "code": "Hearing impaired",
                "display": "Hearing impaired",
                "definition": "A disorder characterized by partial or complete loss of the ability to detect or understand sounds resulting from damage to ear structures."
              },
              {
                "code": "Heart failure",
                "display": "Heart failure",
                "definition": "A disorder characterized by the inability of the heart to pump blood at an adequate volume to meet tissue metabolic requirements, or, the ability to do so only at an elevation in the filling pressure."
              },
              {
                "code": "Hematoma",
                "display": "Hematoma",
                "definition": "A disorder characterized by a localized collection of blood, usually clotted, in an organ, space, or tissue, due to a break in the wall of a blood vessel."
              },
              {
                "code": "Hematosalpinx",
                "display": "Hematosalpinx",
                "definition": "A disorder characterized by the presence of blood in a fallopian tube."
              },
              {
                "code": "Hematuria",
                "display": "Hematuria",
                "definition": "A disorder characterized by laboratory test results that indicate blood in the urine."
              },
              {
                "code": "Hemoglobin increased",
                "display": "Hemoglobin increased",
                "definition": "A finding based on laboratory test results that indicate increased levels of hemoglobin in a biological specimen."
              },
              {
                "code": "Hemoglobinuria",
                "display": "Hemoglobinuria",
                "definition": "A disorder characterized by laboratory test results that indicate the presence of free hemoglobin in the urine."
              },
              {
                "code": "Hemolysis",
                "display": "Hemolysis",
                "definition": "A disorder characterized by laboratory test results that indicate widespread erythrocyte cell membrane destruction."
              },
              {
                "code": "Hemolytic uremic syndrome",
                "display": "Hemolytic uremic syndrome",
                "definition": "A disorder characterized by a form of thrombotic microangiopathy with renal failure, hemolytic anemia, and severe thrombocytopenia."
              },
              {
                "code": "Hemorrhoidal hemorrhage",
                "display": "Hemorrhoidal hemorrhage",
                "definition": "A disorder characterized by bleeding from the hemorrhoids."
              },
              {
                "code": "Hemorrhoids",
                "display": "Hemorrhoids",
                "definition": "A disorder characterized by the presence of dilated veins in the rectum and surrounding area."
              },
              {
                "code": "Hepatic failure",
                "display": "Hepatic failure",
                "definition": "A disorder characterized by the inability of the liver to metabolize chemicals in the body. Laboratory test results reveal abnormal plasma levels of ammonia, bilirubin, lactic dehydrogenase, and alkaline phosphatase."
              },
              {
                "code": "Hepatic hemorrhage",
                "display": "Hepatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the liver."
              },
              {
                "code": "Hepatic infection",
                "display": "Hepatic infection",
                "definition": "A disorder characterized by an infectious process involving the liver."
              },
              {
                "code": "Hepatic necrosis",
                "display": "Hepatic necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the hepatic parenchyma."
              },
              {
                "code": "Hepatic pain",
                "display": "Hepatic pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the liver region."
              },
              {
                "code": "Hepatitis viral",
                "display": "Hepatitis viral",
                "definition": "A disorder characterized by a viral pathologic process involving the liver parenchyma."
              },
              {
                "code": "Hepatobiliary disorders - Other, Specify",
                "display": "Hepatobiliary disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Hiccups",
                "display": "Hiccups",
                "definition": "A disorder characterized by repeated gulp sounds that result from an involuntary opening and closing of the glottis. This is attributed to a spasm of the diaphragm."
              },
              {
                "code": "Hip fracture",
                "display": "Hip fracture",
                "definition": "A finding of traumatic injury to the hip in which the continuity of either the femoral head, femoral neck, intertrochanteric or subtrochanteric regions is broken."
              },
              {
                "code": "Hirsutism",
                "display": "Hirsutism",
                "definition": "A disorder characterized by the presence of excess hair growth in women in anatomic sites where growth is considered to be a secondary male characteristic and under androgen control (beard, moustache, chest, abdomen)"
              },
              {
                "code": "Hoarseness",
                "display": "Hoarseness",
                "definition": "A disorder characterized by harsh and raspy voice arising from or spreading to the larynx."
              },
              {
                "code": "Hot flashes",
                "display": "Hot flashes",
                "definition": "A disorder characterized by an uncomfortable and temporary sensation of intense body warmth, flushing, sometimes accompanied by sweating upon cooling."
              },
              {
                "code": "Hydrocephalus",
                "display": "Hydrocephalus",
                "definition": "A disorder characterized by an abnormal increase of cerebrospinal fluid in the ventricles of the brain."
              },
              {
                "code": "Hypercalcemia",
                "display": "Hypercalcemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of calcium in blood."
              },
              {
                "code": "Hyperglycemia",
                "display": "Hyperglycemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of blood sugar. It is usually an indication of diabetes mellitus or glucose intolerance."
              },
              {
                "code": "Hyperhidrosis",
                "display": "Hyperhidrosis",
                "definition": "A disorder characterized by excessive perspiration."
              },
              {
                "code": "Hyperkalemia",
                "display": "Hyperkalemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of potassium in the blood; associated with kidney failure or sometimes with the use of diuretic drugs."
              },
              {
                "code": "Hypermagnesemia",
                "display": "Hypermagnesemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of magnesium in the blood."
              },
              {
                "code": "Hypernatremia",
                "display": "Hypernatremia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of sodium in the blood."
              },
              {
                "code": "Hyperparathyroidism",
                "display": "Hyperparathyroidism",
                "definition": "A disorder characterized by an increase in production of parathyroid hormone by the parathyroid glands. This results in hypercalcemia (abnormally high levels of calcium in the blood)."
              },
              {
                "code": "Hypersomnia",
                "display": "Hypersomnia",
                "definition": "A disorder characterized by characterized by excessive sleepiness during the daytime."
              },
              {
                "code": "Hypertension",
                "display": "Hypertension",
                "definition": "A disorder characterized by a pathological increase in blood pressure; a repeatedly elevation in the blood pressure exceeding 140 over 90 mm Hg."
              },
              {
                "code": "Hyperthyroidism",
                "display": "Hyperthyroidism",
                "definition": "A disorder characterized by excessive levels of thyroid hormone in the body. Common causes include an overactive thyroid gland or thyroid hormone overdose."
              },
              {
                "code": "Hypertrichosis",
                "display": "Hypertrichosis",
                "definition": "A disorder characterized by hair density or length beyond the accepted limits of normal in a particular body region, for a particular age or race."
              },
              {
                "code": "Hypertriglyceridemia",
                "display": "Hypertriglyceridemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of triglyceride concentration in the blood."
              },
              {
                "code": "Hyperuricemia",
                "display": "Hyperuricemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of uric acid."
              },
              {
                "code": "Hypoalbuminemia",
                "display": "Hypoalbuminemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of albumin in the blood."
              },
              {
                "code": "Hypocalcemia",
                "display": "Hypocalcemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of calcium in the blood."
              },
              {
                "code": "Hypoglossal nerve disorder",
                "display": "Hypoglossal nerve disorder",
                "definition": "A disorder characterized by involvement of the hypoglossal nerve (twelfth cranial nerve)."
              },
              {
                "code": "Hypoglycemia",
                "display": "Hypoglycemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of glucose in the blood."
              },
              {
                "code": "Hypohidrosis",
                "display": "Hypohidrosis",
                "definition": "A disorder characterized by reduced sweating."
              },
              {
                "code": "Hypokalemia",
                "display": "Hypokalemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of potassium in the blood."
              },
              {
                "code": "Hypomagnesemia",
                "display": "Hypomagnesemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of magnesium in the blood."
              },
              {
                "code": "Hyponatremia",
                "display": "Hyponatremia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of sodium in the blood."
              },
              {
                "code": "Hypoparathyroidism",
                "display": "Hypoparathyroidism",
                "definition": "A disorder characterized by a decrease in production of parathyroid hormone by the parathyroid glands."
              },
              {
                "code": "Hypophosphatemia",
                "display": "Hypophosphatemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of phosphates in the blood."
              },
              {
                "code": "Hypotension",
                "display": "Hypotension",
                "definition": "A disorder characterized by a blood pressure that is below the normal expected for an individual in a given environment."
              },
              {
                "code": "Hypothermia",
                "display": "Hypothermia",
                "definition": "A disorder characterized by an abnormally low body temperature. Treatment is required when the body temperature is 35C (95F) or below."
              },
              {
                "code": "Hypothyroidism",
                "display": "Hypothyroidism",
                "definition": "A disorder characterized by a decrease in production of thyroid hormone by the thyroid gland."
              },
              {
                "code": "Hypoxia",
                "display": "Hypoxia",
                "definition": "A disorder characterized by a decrease in the level of oxygen in the body."
              },
              {
                "code": "Ileal fistula",
                "display": "Ileal fistula",
                "definition": "A disorder characterized by an abnormal communication between the ileum and another organ or anatomic site."
              },
              {
                "code": "Ileal hemorrhage",
                "display": "Ileal hemorrhage",
                "definition": "A disorder characterized by bleeding from the ileal wall."
              },
              {
                "code": "Ileal obstruction",
                "display": "Ileal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the ileum."
              },
              {
                "code": "Ileal perforation",
                "display": "Ileal perforation",
                "definition": "A disorder characterized by a rupture in the ileal wall."
              },
              {
                "code": "Ileal stenosis",
                "display": "Ileal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the ileum."
              },
              {
                "code": "Ileal ulcer",
                "display": "Ileal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the ileum."
              },
              {
                "code": "Ileus",
                "display": "Ileus",
                "definition": "A disorder characterized by failure of the ileum to transport intestinal contents."
              },
              {
                "code": "Immune system disorders - Other, Specify",
                "display": "Immune system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Infections and infestations - Other, Specify",
                "display": "Infections and infestations - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Infective myositis",
                "display": "Infective myositis",
                "definition": "A disorder characterized by an infectious process involving the skeletal muscles."
              },
              {
                "code": "Infusion related reaction",
                "display": "Infusion related reaction",
                "definition": "A disorder characterized by adverse reaction to the infusion of pharmacological or biological substances."
              },
              {
                "code": "Infusion site extravasation",
                "display": "Infusion site extravasation",
                "definition": "A disorder characterized by leakage of a pharmacologic or a biologic substance from the infusion site into the surrounding tissue. Signs and symptoms include induration, erythema, swelling, burning sensation and marked discomfort at the infusion site."
              },
              {
                "code": "Injection site reaction",
                "display": "Injection site reaction",
                "definition": "A disorder characterized by an intense adverse reaction (usually immunologic) developing at the site of an injection."
              },
              {
                "code": "Injury to carotid artery",
                "display": "Injury to carotid artery",
                "definition": "A finding of damage to the carotid artery."
              },
              {
                "code": "Injury to inferior vena cava",
                "display": "Injury to inferior vena cava",
                "definition": "A finding of damage to the inferior vena cava."
              },
              {
                "code": "Injury to jugular vein",
                "display": "Injury to jugular vein",
                "definition": "A finding of damage to the jugular vein."
              },
              {
                "code": "Injury to superior vena cava",
                "display": "Injury to superior vena cava",
                "definition": "A finding of damage to the superior vena cava."
              },
              {
                "code": "Injury, poisoning and procedural complications - Other, Specify",
                "display": "Injury, poisoning and procedural complications - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "INR increased",
                "display": "INR increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the ratio of the patient's prothrombin time to a control sample in the blood."
              },
              {
                "code": "Insomnia",
                "display": "Insomnia",
                "definition": "A disorder characterized by difficulty in falling asleep and/or remaining asleep."
              },
              {
                "code": "Intestinal stoma leak",
                "display": "Intestinal stoma leak",
                "definition": "A finding of leakage of contents from an intestinal stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "Intestinal stoma obstruction",
                "display": "Intestinal stoma obstruction",
                "definition": "A finding of blockage of the normal flow of the contents of the intestinal stoma."
              },
              {
                "code": "Intestinal stoma site bleeding",
                "display": "Intestinal stoma site bleeding",
                "definition": "A finding of blood leakage from the intestinal stoma."
              },
              {
                "code": "Intra-abdominal hemorrhage",
                "display": "Intra-abdominal hemorrhage",
                "definition": "A disorder characterized by bleeding in the abdominal cavity."
              },
              {
                "code": "Intracranial hemorrhage",
                "display": "Intracranial hemorrhage",
                "definition": "A disorder characterized by bleeding from the cranium."
              },
              {
                "code": "Intraoperative arterial injury",
                "display": "Intraoperative arterial injury",
                "definition": "A finding of damage to an artery during a surgical procedure."
              },
              {
                "code": "Intraoperative breast injury",
                "display": "Intraoperative breast injury",
                "definition": "A finding of damage to the breast parenchyma during a surgical procedure."
              },
              {
                "code": "Intraoperative cardiac injury",
                "display": "Intraoperative cardiac injury",
                "definition": "A finding of damage to the heart during a surgical procedure."
              },
              {
                "code": "Intraoperative ear injury",
                "display": "Intraoperative ear injury",
                "definition": "A finding of damage to the ear during a surgical procedure."
              },
              {
                "code": "Intraoperative endocrine injury",
                "display": "Intraoperative endocrine injury",
                "definition": "A finding of damage to the endocrine gland during a surgical procedure."
              },
              {
                "code": "Intraoperative gastrointestinal injury",
                "display": "Intraoperative gastrointestinal injury",
                "definition": "A finding of damage to the gastrointestinal system during a surgical procedure."
              },
              {
                "code": "Intraoperative head and neck injury",
                "display": "Intraoperative head and neck injury",
                "definition": "A finding of damage to the head and neck during a surgical procedure."
              },
              {
                "code": "Intraoperative hemorrhage",
                "display": "Intraoperative hemorrhage",
                "definition": "A finding of uncontrolled bleeding during a surgical procedure."
              },
              {
                "code": "Intraoperative hepatobiliary injury",
                "display": "Intraoperative hepatobiliary injury",
                "definition": "A finding of damage to the hepatic parenchyma and/or biliary tract during a surgical procedure."
              },
              {
                "code": "Intraoperative musculoskeletal injury",
                "display": "Intraoperative musculoskeletal injury",
                "definition": "A finding of damage to the musculoskeletal system during a surgical procedure."
              },
              {
                "code": "Intraoperative neurological injury",
                "display": "Intraoperative neurological injury",
                "definition": "A finding of damage to the nervous system during a surgical procedure."
              },
              {
                "code": "Intraoperative ocular injury",
                "display": "Intraoperative ocular injury",
                "definition": "A finding of damage to the eye during a surgical procedure."
              },
              {
                "code": "Intraoperative renal injury",
                "display": "Intraoperative renal injury",
                "definition": "A finding of damage to the kidney during a surgical procedure."
              },
              {
                "code": "Intraoperative reproductive tract injury",
                "display": "Intraoperative reproductive tract injury",
                "definition": "A finding of damage to the reproductive organs during a surgical procedure."
              },
              {
                "code": "Intraoperative respiratory injury",
                "display": "Intraoperative respiratory injury",
                "definition": "A finding of damage to the respiratory system during a surgical procedure."
              },
              {
                "code": "Intraoperative skin injury",
                "display": "Intraoperative skin injury",
                "definition": "A finding of damage to the skin during a surgical procedure."
              },
              {
                "code": "Intraoperative splenic injury",
                "display": "Intraoperative splenic injury",
                "definition": "A finding of damage to the spleen during a surgical procedure."
              },
              {
                "code": "Intraoperative urinary injury",
                "display": "Intraoperative urinary injury",
                "definition": "A finding of damage to the urinary system during a surgical procedure."
              },
              {
                "code": "Intraoperative venous injury",
                "display": "Intraoperative venous injury",
                "definition": "A finding of damage to a vein during a surgical procedure."
              },
              {
                "code": "Investigations - Other, Specify",
                "display": "Investigations - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Iron overload",
                "display": "Iron overload",
                "definition": "A disorder characterized by accumulation of iron in the tissues."
              },
              {
                "code": "Irregular menstruation",
                "display": "Irregular menstruation",
                "definition": "A disorder characterized by irregular cycle or duration of menses."
              },
              {
                "code": "Irritability",
                "display": "Irritability",
                "definition": "A disorder characterized by an abnormal responsiveness to stimuli or physiological arousal; may be in response to pain, fright, a drug, an emotional situation or a medical condition."
              },
              {
                "code": "Ischemia cerebrovascular",
                "display": "Ischemia cerebrovascular",
                "definition": "A disorder characterized by a decrease or absence of blood supply to the brain caused by obstruction (thrombosis or embolism) of an artery resulting in neurological damage."
              },
              {
                "code": "IVth nerve disorder",
                "display": "IVth nerve disorder",
                "definition": "A disorder characterized by involvement of the trochlear nerve (fourth cranial nerve)."
              },
              {
                "code": "Jejunal fistula",
                "display": "Jejunal fistula",
                "definition": "A disorder characterized by an abnormal communication between the jejunum and another organ or anatomic site."
              },
              {
                "code": "Jejunal hemorrhage",
                "display": "Jejunal hemorrhage",
                "definition": "A disorder characterized by bleeding from the jejunal wall."
              },
              {
                "code": "Jejunal obstruction",
                "display": "Jejunal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the jejunum."
              },
              {
                "code": "Jejunal perforation",
                "display": "Jejunal perforation",
                "definition": "A disorder characterized by a rupture in the jejunal wall."
              },
              {
                "code": "Jejunal stenosis",
                "display": "Jejunal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the jejunum."
              },
              {
                "code": "Jejunal ulcer",
                "display": "Jejunal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the jejunum."
              },
              {
                "code": "Joint effusion",
                "display": "Joint effusion",
                "definition": "A disorder characterized by excessive fluid in a joint, usually as a result of joint inflammation."
              },
              {
                "code": "Joint infection",
                "display": "Joint infection",
                "definition": "A disorder characterized by an infectious process involving a joint."
              },
              {
                "code": "Joint range of motion decreased",
                "display": "Joint range of motion decreased",
                "definition": "A disorder characterized by a decrease in joint flexibility of any joint."
              },
              {
                "code": "Joint range of motion decreased cervical spine",
                "display": "Joint range of motion decreased cervical spine",
                "definition": "A disorder characterized by a decrease in flexibility of a cervical spine joint."
              },
              {
                "code": "Joint range of motion decreased lumbar spine",
                "display": "Joint range of motion decreased lumbar spine",
                "definition": "A disorder characterized by a decrease in flexibility of a lumbar spine joint."
              },
              {
                "code": "Keratitis",
                "display": "Keratitis",
                "definition": "A disorder characterized by inflammation to the cornea of the eye."
              },
              {
                "code": "Kidney anastomotic leak",
                "display": "Kidney anastomotic leak",
                "definition": "A finding of leakage of urine due to breakdown of a kidney anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Kidney infection",
                "display": "Kidney infection",
                "definition": "A disorder characterized by an infectious process involving the kidney."
              },
              {
                "code": "Kyphosis",
                "display": "Kyphosis",
                "definition": "A disorder characterized by an abnormal increase in the curvature of the thoracic portion of the spine."
              },
              {
                "code": "Lactation disorder",
                "display": "Lactation disorder",
                "definition": "A disorder characterized by disturbances of milk secretion. It is not necessarily related to pregnancy that is observed in females and can be observed in males."
              },
              {
                "code": "Large intestinal anastomotic leak",
                "display": "Large intestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an anastomosis (surgical connection of two separate anatomic structures) in the large intestine."
              },
              {
                "code": "Laryngeal edema",
                "display": "Laryngeal edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the larynx."
              },
              {
                "code": "Laryngeal fistula",
                "display": "Laryngeal fistula",
                "definition": "A disorder characterized by an abnormal communication between the larynx and another organ or anatomic site."
              },
              {
                "code": "Laryngeal hemorrhage",
                "display": "Laryngeal hemorrhage",
                "definition": "A disorder characterized by bleeding from the larynx."
              },
              {
                "code": "Laryngeal inflammation",
                "display": "Laryngeal inflammation",
                "definition": "A disorder characterized by an inflammation involving the larynx."
              },
              {
                "code": "Laryngeal mucositis",
                "display": "Laryngeal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the larynx."
              },
              {
                "code": "Laryngeal obstruction",
                "display": "Laryngeal obstruction",
                "definition": "A disorder characterized by blockage of the laryngeal airway."
              },
              {
                "code": "Laryngeal stenosis",
                "display": "Laryngeal stenosis",
                "definition": "A disorder characterized by a narrowing of the laryngeal airway."
              },
              {
                "code": "Laryngitis",
                "display": "Laryngitis",
                "definition": "A disorder characterized by an inflammatory process involving the larynx."
              },
              {
                "code": "Laryngopharyngeal dysesthesia",
                "display": "Laryngopharyngeal dysesthesia",
                "definition": "A disorder characterized by an uncomfortable persistent sensation in the area of the laryngopharynx."
              },
              {
                "code": "Laryngospasm",
                "display": "Laryngospasm",
                "definition": "A disorder characterized by paroxysmal spasmodic muscular contraction of the vocal cords."
              },
              {
                "code": "Left ventricular systolic dysfunction",
                "display": "Left ventricular systolic dysfunction",
                "definition": "A disorder characterized by failure of the left ventricle to produce adequate output despite an increase in distending pressure and in end-diastolic volume. Clinical manifestations mayinclude dyspnea, orthopnea, and other signs and symptoms of pulmonary congestion and edema."
              },
              {
                "code": "Lethargy",
                "display": "Lethargy",
                "definition": "A disorder characterized by a decrease in consciousness characterized by mental and physical inertness."
              },
              {
                "code": "Leukemia secondary to oncology chemotherapy",
                "display": "Leukemia secondary to oncology chemotherapy",
                "definition": "A disorder characterized by leukemia arising as a result of the mutagenic effect of chemotherapy agents."
              },
              {
                "code": "Leukocytosis",
                "display": "Leukocytosis",
                "definition": "A disorder characterized by laboratory test results that indicate an increased number of white blood cells in the blood."
              },
              {
                "code": "Leukoencephalopathy",
                "display": "Leukoencephalopathy",
                "definition": "A disorder characterized by diffuse reactive astrocytosis with multiple areas of necrotic foci without inflammation."
              },
              {
                "code": "Libido decreased",
                "display": "Libido decreased",
                "definition": "A disorder characterized by a decrease in sexual desire."
              },
              {
                "code": "Libido increased",
                "display": "Libido increased",
                "definition": "A disorder characterized by an increase in sexual desire."
              },
              {
                "code": "Lip infection",
                "display": "Lip infection",
                "definition": "A disorder characterized by an infectious process involving the lips."
              },
              {
                "code": "Lip pain",
                "display": "Lip pain",
                "definition": "A disorder characterized by a sensation of marked discomfort of the lip."
              },
              {
                "code": "Lipase increased",
                "display": "Lipase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of lipase in a biological specimen."
              },
              {
                "code": "Lipohypertrophy",
                "display": "Lipohypertrophy",
                "definition": "A disorder characterized by hypertrophy of the subcutaneous adipose tissue at the site of multiple subcutaneous injections of insulin."
              },
              {
                "code": "Localized edema",
                "display": "Localized edema",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation at a specific anatomic site."
              },
              {
                "code": "Lordosis",
                "display": "Lordosis",
                "definition": "A disorder characterized by an abnormal increase in the curvature of the lumbar portion of the spine."
              },
              {
                "code": "Lower gastrointestinal hemorrhage",
                "display": "Lower gastrointestinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the lower gastrointestinal tract (small intestine, large intestine, and anus)."
              },
              {
                "code": "Lung infection",
                "display": "Lung infection",
                "definition": "A disorder characterized by an infectious process involving the lungs."
              },
              {
                "code": "Lymph gland infection",
                "display": "Lymph gland infection",
                "definition": "A disorder characterized by an infectious process involving the lymph nodes."
              },
              {
                "code": "Lymph leakage",
                "display": "Lymph leakage",
                "definition": "A disorder characterized by the loss of lymph fluid into the surrounding tissue or body cavity."
              },
              {
                "code": "Lymph node pain",
                "display": "Lymph node pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in a lymph node."
              },
              {
                "code": "Lymphedema",
                "display": "Lymphedema",
                "definition": "A disorder characterized by excessive fluid collection in tissues that causes swelling."
              },
              {
                "code": "Lymphocele",
                "display": "Lymphocele",
                "definition": "A disorder characterized by a cystic lesion containing lymph."
              },
              {
                "code": "Lymphocyte count decreased",
                "display": "Lymphocyte count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of lymphocytes in a blood specimen."
              },
              {
                "code": "Lymphocyte count increased",
                "display": "Lymphocyte count increased",
                "definition": "A finding based on laboratory test results that indicate an abnormal increase in the number of lymphocytes in the blood, effusions or bone marrow."
              },
              {
                "code": "Malabsorption",
                "display": "Malabsorption",
                "definition": "A disorder characterized by inadequate absorption of nutrients in the small intestine. Symptoms include abdominal marked discomfort, bloating and diarrhea."
              },
              {
                "code": "Malaise",
                "display": "Malaise",
                "definition": "A disorder characterized by a feeling of general discomfort or uneasiness, an out-of-sorts feeling."
              },
              {
                "code": "Mania",
                "display": "Mania",
                "definition": "A disorder characterized by excitement of psychotic proportions manifested by mental and physical hyperactivity, disorganization of behavior and elevation of mood."
              },
              {
                "code": "Mediastinal hemorrhage",
                "display": "Mediastinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the mediastinum."
              },
              {
                "code": "Mediastinal infection",
                "display": "Mediastinal infection",
                "definition": "A disorder characterized by an infectious process involving the mediastinum."
              },
              {
                "code": "Memory impairment",
                "display": "Memory impairment",
                "definition": "A disorder characterized by a deterioration in memory function."
              },
              {
                "code": "Meningismus",
                "display": "Meningismus",
                "definition": "A disorder characterized by neck stiffness, headache, and photophobia resulting from irritation of the cerebral meninges."
              },
              {
                "code": "Meningitis",
                "display": "Meningitis",
                "definition": "A disorder characterized by acute inflammation of the meninges of the brain and/or spinal cord."
              },
              {
                "code": "Menopause",
                "display": "Menopause",
                "definition": "A disorder characterized by the permanent cessation of menses, usually defined by 12 consecutive months of amenorrhea in a woman over 45 years of age."
              },
              {
                "code": "Menorrhagia",
                "display": "Menorrhagia",
                "definition": "A disorder characterized by abnormally heavy vaginal bleeding during menses."
              },
              {
                "code": "Metabolism and nutrition disorders - Other, Specify",
                "display": "Metabolism and nutrition disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Middle ear inflammation",
                "display": "Middle ear inflammation",
                "definition": "A disorder characterized by inflammation (physiologic response to irritation), swelling and redness to the middle ear."
              },
              {
                "code": "Mitral valve disease",
                "display": "Mitral valve disease",
                "definition": "A disorder characterized by a defect in mitral valve function or structure."
              },
              {
                "code": "Mobitz (type) II atrioventricular block",
                "display": "Mobitz (type) II atrioventricular block",
                "definition": "A disorder characterized by a dysrhythmia with relatively constant PR interval prior to the block of an atrial impulse. This is the result of intermittent failure of atrial electrical impulse conduction through the atrioventricular (AV) node to the ventricles."
              },
              {
                "code": "Mobitz type I",
                "display": "Mobitz type I",
                "definition": "A disorder characterized by a dysrhythmia with a progressively lengthening PR interval prior to the blocking of an atrial impulse. This is the result of intermittent failure of atrial electrical impulse conduction through the atrioventricular (AV) node to the ventricles."
              },
              {
                "code": "Movements involuntary",
                "display": "Movements involuntary",
                "definition": "A disorder characterized by uncontrolled and purposeless movements."
              },
              {
                "code": "Mucosal infection",
                "display": "Mucosal infection",
                "definition": "A disorder characterized by an infectious process involving a mucosal surface."
              },
              {
                "code": "Mucositis oral",
                "display": "Mucositis oral",
                "definition": "A disorder characterized by inflammation of the oral mucosal."
              },
              {
                "code": "Multi-organ failure",
                "display": "Multi-organ failure",
                "definition": "A disorder characterized by progressive deterioration of the lungs, liver, kidney and clotting mechanisms."
              },
              {
                "code": "Muscle weakness left-sided",
                "display": "Muscle weakness left-sided",
                "definition": "A disorder characterized by a reduction in the strength of the muscles on the left side of the body."
              },
              {
                "code": "Muscle weakness lower limb",
                "display": "Muscle weakness lower limb",
                "definition": "A disorder characterized by a reduction in the strength of the lower limb muscles."
              },
              {
                "code": "Muscle weakness right-sided",
                "display": "Muscle weakness right-sided",
                "definition": "A disorder characterized by a reduction in the strength of the muscles on the right side of the body."
              },
              {
                "code": "Muscle weakness trunk",
                "display": "Muscle weakness trunk",
                "definition": "A disorder characterized by a reduction in the strength of the trunk muscles."
              },
              {
                "code": "Muscle weakness upper limb",
                "display": "Muscle weakness upper limb",
                "definition": "A disorder characterized by a reduction in the strength of the upper limb muscles."
              },
              {
                "code": "Musculoskeletal and connective tissue disorders - Other, Specify",
                "display": "Musculoskeletal and connective tissue disorder - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Musculoskeletal deformity",
                "display": "Musculoskeletal deformity",
                "definition": "A disorder characterized by of a malformation of the musculoskeletal system."
              },
              {
                "code": "Myalgia",
                "display": "Myalgia",
                "definition": "A disorder characterized by marked discomfort sensation originating from a muscle or group of muscles."
              },
              {
                "code": "Myelitis",
                "display": "Myelitis",
                "definition": "A disorder characterized by inflammation involving the spinal cord. Symptoms include weakness, paresthesia, sensory loss, marked discomfort and incontinence."
              },
              {
                "code": "Myelodysplastic syndrome",
                "display": "Myelodysplastic syndrome",
                "definition": "A disorder characterized by insufficiently healthy hematapoietic cell production by the bone marrow."
              },
              {
                "code": "Myocardial infarction",
                "display": "Myocardial infarction",
                "definition": "A disorder characterized by gross necrosis of the myocardium; this is due to an interruption of blood supply to the area."
              },
              {
                "code": "Myocarditis",
                "display": "Myocarditis",
                "definition": "A disorder characterized by inflammation of the muscle tissue of the heart."
              },
              {
                "code": "Myositis",
                "display": "Myositis",
                "definition": "A disorder characterized by inflammation involving the skeletal muscles."
              },
              {
                "code": "Nail discoloration",
                "display": "Nail discoloration",
                "definition": "A disorder characterized by a change in the color of the nail plate."
              },
              {
                "code": "Nail infection",
                "display": "Nail infection",
                "definition": "A disorder characterized by an infectious process involving the nail."
              },
              {
                "code": "Nail loss",
                "display": "Nail loss",
                "definition": "A disorder characterized by loss of all or a portion of the nail."
              },
              {
                "code": "Nail ridging",
                "display": "Nail ridging",
                "definition": "A disorder characterized by vertical or horizontal ridges on the nails."
              },
              {
                "code": "Nasal congestion",
                "display": "Nasal congestion",
                "definition": "A disorder characterized by obstruction of the nasal passage due to mucosal edema."
              },
              {
                "code": "Nausea",
                "display": "Nausea",
                "definition": "A disorder characterized by a queasy sensation and/or the urge to vomit."
              },
              {
                "code": "Neck edema",
                "display": "Neck edema",
                "definition": "A disorder characterized by swelling due to an accumulation of excessive fluid in the neck."
              },
              {
                "code": "Neck pain",
                "display": "Neck pain",
                "definition": "A disorder characterized by marked discomfort sensation in the neck area."
              },
              {
                "code": "Neck soft tissue necrosis",
                "display": "Neck soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the neck."
              },
              {
                "code": "Neoplasms benign, malignant and unspecified (incl cysts and polyps) - Other, Specify",
                "display": "Neoplasms benign, malignant and unspecified (incl cysts and polyps) - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Nervous system disorders - Other, Specify",
                "display": "Nervous system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Neuralgia",
                "display": "Neuralgia",
                "definition": "A disorder characterized by intense painful sensation along a nerve or group of nerves."
              },
              {
                "code": "Neutrophil count decreased",
                "display": "Neutrophil count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of neutrophils in a blood specimen."
              },
              {
                "code": "Night blindness",
                "display": "Night blindness",
                "definition": "A disorder characterized by an inability to see clearly in dim light."
              },
              {
                "code": "Nipple deformity",
                "display": "Nipple deformity",
                "definition": "A disorder characterized by a malformation of the nipple."
              },
              {
                "code": "Non-cardiac chest pain",
                "display": "Non-cardiac chest pain",
                "definition": "A disorder characterized by discomfort in the chest unrelated to a heart disorder."
              },
              {
                "code": "Nystagmus",
                "display": "Nystagmus",
                "definition": "A disorder characterized by involuntary movements of the eyeballs."
              },
              {
                "code": "Obesity",
                "display": "Obesity",
                "definition": "A disorder characterized by having a high amount of body fat."
              },
              {
                "code": "Obstruction gastric",
                "display": "Obstruction gastric",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the stomach."
              },
              {
                "code": "Oculomotor nerve disorder",
                "display": "Oculomotor nerve disorder",
                "definition": "A disorder characterized by involvement of the oculomotor nerve (third cranial nerve)."
              },
              {
                "code": "Olfactory nerve disorder",
                "display": "Olfactory nerve disorder",
                "definition": "A disorder characterized by involvement of the olfactory nerve (first cranial nerve)."
              },
              {
                "code": "Oligospermia",
                "display": "Oligospermia",
                "definition": "A disorder characterized by a decrease in the number of spermatozoa in the semen."
              },
              {
                "code": "Optic nerve disorder",
                "display": "Optic nerve disorder",
                "definition": "A disorder characterized by involvement of the optic nerve (second cranial nerve)."
              },
              {
                "code": "Oral cavity fistula",
                "display": "Oral cavity fistula",
                "definition": "A disorder characterized by an abnormal communication between the oral cavity and another organ or anatomic site."
              },
              {
                "code": "Oral dysesthesia",
                "display": "Oral dysesthesia",
                "definition": "A disorder characterized by a burning or tingling sensation on the lips, tongue or entire mouth."
              },
              {
                "code": "Oral hemorrhage",
                "display": "Oral hemorrhage",
                "definition": "A disorder characterized by bleeding from the mouth."
              },
              {
                "code": "Oral pain",
                "display": "Oral pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the mouth, tongue or lips."
              },
              {
                "code": "Osteonecrosis of jaw",
                "display": "Osteonecrosis of jaw",
                "definition": "A disorder characterized by a necrotic process occurring in the bone of the mandible."
              },
              {
                "code": "Osteoporosis",
                "display": "Osteoporosis",
                "definition": "A disorder characterized by reduced bone mass, with a decrease in cortical thickness and in the number and size of the trabeculae of cancellous bone (but normal chemical composition), resulting in increased fracture incidence."
              },
              {
                "code": "Otitis externa",
                "display": "Otitis externa",
                "definition": "A disorder characterized by an infectious process involving the outer ear and ear canal. Contributory factors include excessive water exposure (swimmer's ear infection) and cuts in the ear canal. Symptoms include fullness, itching, swelling and marked discomfort in the ear and ear drainage."
              },
              {
                "code": "Otitis media",
                "display": "Otitis media",
                "definition": "A disorder characterized by an infectious process involving the middle ear."
              },
              {
                "code": "Ovarian hemorrhage",
                "display": "Ovarian hemorrhage",
                "definition": "A disorder characterized by bleeding from the ovary."
              },
              {
                "code": "Ovarian infection",
                "display": "Ovarian infection",
                "definition": "A disorder characterized by an infectious process involving the ovary."
              },
              {
                "code": "Ovarian rupture",
                "display": "Ovarian rupture",
                "definition": "A disorder characterized by tearing or disruption of the ovarian tissue."
              },
              {
                "code": "Ovulation pain",
                "display": "Ovulation pain",
                "definition": "A disorder characterized by marked discomfort sensation in one side of the abdomen between menstrual cycles, around the time of the discharge of the ovum from the ovarian follicle."
              },
              {
                "code": "Pain",
                "display": "Pain",
                "definition": "A disorder characterized by the sensation of marked discomfort, distress or agony."
              },
              {
                "code": "Pain in extremity",
                "display": "Pain in extremity",
                "definition": "A disorder characterized by marked discomfort sensation in the upper or lower extremities."
              },
              {
                "code": "Pain of skin",
                "display": "Pain of skin",
                "definition": "A disorder characterized by marked discomfort sensation in the skin."
              },
              {
                "code": "Palmar-plantar erythrodysesthesia syndrome",
                "display": "Palmar-plantar erythrodysesthesia syndrome",
                "definition": "A disorder characterized by redness, marked discomfort, swelling, and tingling in the palms of the hands or the soles of the feet."
              },
              {
                "code": "Palpitations",
                "display": "Palpitations",
                "definition": "A disorder characterized by an unpleasant sensation of irregular and/or forceful beating of the heart."
              },
              {
                "code": "Pancreas infection",
                "display": "Pancreas infection",
                "definition": "A disorder characterized by an infectious process involving the pancreas."
              },
              {
                "code": "Pancreatic anastomotic leak",
                "display": "Pancreatic anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a pancreatic anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Pancreatic duct stenosis",
                "display": "Pancreatic duct stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the pancreatic duct."
              },
              {
                "code": "Pancreatic enzymes decreased",
                "display": "Pancreatic enzymes decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of pancreatic enzymes in a biological specimen."
              },
              {
                "code": "Pancreatic fistula",
                "display": "Pancreatic fistula",
                "definition": "A disorder characterized by an abnormal communication between the pancreas and another organ or anatomic site."
              },
              {
                "code": "Pancreatic hemorrhage",
                "display": "Pancreatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the pancreas."
              },
              {
                "code": "Pancreatic necrosis",
                "display": "Pancreatic necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the pancreas."
              },
              {
                "code": "Pancreatitis",
                "display": "Pancreatitis",
                "definition": "A disorder characterized by inflammation of the pancreas."
              },
              {
                "code": "Papilledema",
                "display": "Papilledema",
                "definition": "A disorder characterized by swelling around the optic disc."
              },
              {
                "code": "Papulopustular rash",
                "display": "Papulopustular rash",
                "definition": "A disorder characterized by an eruption consisting of papules (a small, raised pimple) and pustules (a small pus filled blister), typically appearing in face, scalp, and upper chest and back Unlike acne, this rash does not present with whiteheads or blackheads, and can be symptomatic, with itchy or tender lesions."
              },
              {
                "code": "Paresthesia",
                "display": "Paresthesia",
                "definition": "A disorder characterized by functional disturbances of sensory neurons resulting in abnormal cutaneous sensations of tingling, numbness, pressure, cold, and warmth that are experienced in the absence of a stimulus."
              },
              {
                "code": "Paronychia",
                "display": "Paronychia",
                "definition": "A disorder characterized by an infectious process involving the soft tissues around the nail."
              },
              {
                "code": "Paroxysmal atrial tachycardia",
                "display": "Paroxysmal atrial tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with abrupt onset and sudden termination of atrial contractions with a rate of 150-250 beats per minute. The rhythm disturbance originates in the atria."
              },
              {
                "code": "Pelvic floor muscle weakness",
                "display": "Pelvic floor muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of the muscles of the pelvic floor."
              },
              {
                "code": "Pelvic infection",
                "display": "Pelvic infection",
                "definition": "A disorder characterized by an infectious process involving the pelvic cavity."
              },
              {
                "code": "Pelvic pain",
                "display": "Pelvic pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pelvis."
              },
              {
                "code": "Pelvic soft tissue necrosis",
                "display": "Pelvic soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the pelvis."
              },
              {
                "code": "Penile infection",
                "display": "Penile infection",
                "definition": "A disorder characterized by an infectious process involving the penis."
              },
              {
                "code": "Penile pain",
                "display": "Penile pain",
                "definition": "A disorder characterized by marked discomfort sensation in the penis."
              },
              {
                "code": "Perforation bile duct",
                "display": "Perforation bile duct",
                "definition": "A disorder characterized by a rupture in the wall of the extrahepatic or intrahepatic bile duct."
              },
              {
                "code": "Pericardial effusion",
                "display": "Pericardial effusion",
                "definition": "A disorder characterized by fluid collection within the pericardial sac, usually due to inflammation."
              },
              {
                "code": "Pericardial tamponade",
                "display": "Pericardial tamponade",
                "definition": "A disorder characterized by an increase in intrapericardial pressure due to the collection of blood or fluid in the pericardium."
              },
              {
                "code": "Pericarditis",
                "display": "Pericarditis",
                "definition": "A disorder characterized by irritation to the layers of the pericardium (the protective sac around the heart)."
              },
              {
                "code": "Perineal pain",
                "display": "Perineal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the area between the genital organs and the anus."
              },
              {
                "code": "Periodontal disease",
                "display": "Periodontal disease",
                "definition": "A disorder in the gingival tissue around the teeth."
              },
              {
                "code": "Periorbital edema",
                "display": "Periorbital edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid around the orbits of the face."
              },
              {
                "code": "Periorbital infection",
                "display": "Periorbital infection",
                "definition": "A disorder characterized by an infectious process involving the orbit of the eye."
              },
              {
                "code": "Peripheral ischemia",
                "display": "Peripheral ischemia",
                "definition": "A disorder characterized by impaired circulation to an extremity."
              },
              {
                "code": "Peripheral motor neuropathy",
                "display": "Peripheral motor neuropathy",
                "definition": "A disorder characterized by inflammation or degeneration of the peripheral motor nerves."
              },
              {
                "code": "Peripheral nerve infection",
                "display": "Peripheral nerve infection",
                "definition": "A disorder characterized by an infectious process involving the peripheral nerves."
              },
              {
                "code": "Peripheral sensory neuropathy",
                "display": "Peripheral sensory neuropathy",
                "definition": "A disorder characterized by inflammation or degeneration of the peripheral sensory nerves."
              },
              {
                "code": "Peritoneal infection",
                "display": "Peritoneal infection",
                "definition": "A disorder characterized by an infectious process involving the peritoneum."
              },
              {
                "code": "Peritoneal necrosis",
                "display": "Peritoneal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the peritoneum."
              },
              {
                "code": "Personality change",
                "display": "Personality change",
                "definition": "A disorder characterized by a conspicuous change in a person's behavior and thinking."
              },
              {
                "code": "Phantom pain",
                "display": "Phantom pain",
                "definition": "A disorder characterized by marked discomfort related to a limb or an organ that is removed from or is not physically part of the body."
              },
              {
                "code": "Pharyngeal anastomotic leak",
                "display": "Pharyngeal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a pharyngeal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Pharyngeal fistula",
                "display": "Pharyngeal fistula",
                "definition": "A disorder characterized by an abnormal communication between the pharynx and another organ or anatomic site."
              },
              {
                "code": "Pharyngeal hemorrhage",
                "display": "Pharyngeal hemorrhage",
                "definition": "A disorder characterized by bleeding from the pharynx."
              },
              {
                "code": "Pharyngeal mucositis",
                "display": "Pharyngeal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the pharynx."
              },
              {
                "code": "Pharyngeal necrosis",
                "display": "Pharyngeal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the pharynx."
              },
              {
                "code": "Pharyngeal stenosis",
                "display": "Pharyngeal stenosis",
                "definition": "A disorder characterized by a narrowing of the pharyngeal airway."
              },
              {
                "code": "Pharyngitis",
                "display": "Pharyngitis",
                "definition": "A disorder characterized by inflammation of the throat."
              },
              {
                "code": "Pharyngolaryngeal pain",
                "display": "Pharyngolaryngeal pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pharyngolaryngeal region."
              },
              {
                "code": "Phlebitis",
                "display": "Phlebitis",
                "definition": "A disorder characterized by inflammation of the wall of a vein."
              },
              {
                "code": "Phlebitis infective",
                "display": "Phlebitis infective",
                "definition": "A disorder characterized by an infectious process involving the vein. Clinical manifestations include erythema, marked discomfort, swelling, and induration along the course of the infected vein."
              },
              {
                "code": "Photophobia",
                "display": "Photophobia",
                "definition": "A disorder characterized by fear and avoidance of light."
              },
              {
                "code": "Photosensitivity",
                "display": "Photosensitivity",
                "definition": "A disorder characterized by an increase in sensitivity of the skin to light."
              },
              {
                "code": "Platelet count decreased",
                "display": "Platelet count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of platelets in a blood specimen."
              },
              {
                "code": "Pleural effusion",
                "display": "Pleural effusion",
                "definition": "A disorder characterized by an increase in amounts of fluid within the pleural cavity. Symptoms include shortness of breath, cough and marked chest discomfort."
              },
              {
                "code": "Pleural hemorrhage",
                "display": "Pleural hemorrhage",
                "definition": "A disorder characterized by bleeding from the pleural cavity."
              },
              {
                "code": "Pleural infection",
                "display": "Pleural infection",
                "definition": "A disorder characterized by an infectious process involving the pleura."
              },
              {
                "code": "Pleuritic pain",
                "display": "Pleuritic pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pleura."
              },
              {
                "code": "Pneumonitis",
                "display": "Pneumonitis",
                "definition": "A disorder characterized by inflammation focally or diffusely affecting the lung parenchyma."
              },
              {
                "code": "Pneumothorax",
                "display": "Pneumothorax",
                "definition": "A disorder characterized by abnormal presence of air in the pleural cavity resulting in the collapse of the lung."
              },
              {
                "code": "Portal hypertension",
                "display": "Portal hypertension",
                "definition": "A disorder characterized by an increase in blood pressure in the portal venous system."
              },
              {
                "code": "Portal vein thrombosis",
                "display": "Portal vein thrombosis",
                "definition": "A disorder characterized by the formation of a thrombus (blood clot) in the portal vein."
              },
              {
                "code": "Postnasal drip",
                "display": "Postnasal drip",
                "definition": "A disorder characterized by excessive mucous secretion in the back of the nasal cavity or throat, causing sore throat and/or coughing."
              },
              {
                "code": "Postoperative hemorrhage",
                "display": "Postoperative hemorrhage",
                "definition": "A finding of bleeding occurring after a surgical procedure."
              },
              {
                "code": "Postoperative thoracic procedure complication",
                "display": "Postoperative thoracic procedure complication",
                "definition": "A finding of a previously undocumented problem that occurs after a thoracic procedure."
              },
              {
                "code": "Precocious puberty",
                "display": "Precocious puberty",
                "definition": "A disorder characterized by unusually early development of secondary sexual features; the onset of sexual maturation begins usually before age 8 for girls and before age 9 for boys."
              },
              {
                "code": "Pregnancy, puerperium and perinatal conditions - Other, Specify",
                "display": "Pregnancy, puerperium and perinatal conditions - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Premature delivery",
                "display": "Premature delivery",
                "definition": "A disorder characterized by delivery of a viable infant before the normal end of gestation. Typically, viability is achievable between the twentieth and thirty-seventh week of gestation."
              },
              {
                "code": "Premature menopause",
                "display": "Premature menopause",
                "definition": "A disorder characterized by ovarian failure before the age of 40. Symptoms include hot flashes, night sweats, mood swings and a decrease in sex drive."
              },
              {
                "code": "Presyncope",
                "display": "Presyncope",
                "definition": "A disorder characterized by an episode of lightheadedness and dizziness which may precede an episode of syncope."
              },
              {
                "code": "Proctitis",
                "display": "Proctitis",
                "definition": "A disorder characterized by inflammation of the rectum."
              },
              {
                "code": "Productive cough",
                "display": "Productive cough",
                "definition": "A disorder characterized by expectorated secretions upon coughing."
              },
              {
                "code": "Prolapse of intestinal stoma",
                "display": "Prolapse of intestinal stoma",
                "definition": "A finding of protrusion of the intestinal stoma (surgically created opening on the surface of the body) above the abdominal surface."
              },
              {
                "code": "Prolapse of urostomy",
                "display": "Prolapse of urostomy",
                "definition": "A finding of displacement of the urostomy."
              },
              {
                "code": "Prostate infection",
                "display": "Prostate infection",
                "definition": "A disorder characterized by an infectious process involving the prostate gland."
              },
              {
                "code": "Prostatic hemorrhage",
                "display": "Prostatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the prostate gland."
              },
              {
                "code": "Prostatic obstruction",
                "display": "Prostatic obstruction",
                "definition": "A disorder characterized by compression of the urethra secondary to enlargement of the prostate gland. This results in voiding difficulties (straining to void, slow urine stream, and incomplete emptying of the bladder)."
              },
              {
                "code": "Prostatic pain",
                "display": "Prostatic pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the prostate gland."
              },
              {
                "code": "Proteinuria",
                "display": "Proteinuria",
                "definition": "A disorder characterized by laboratory test results that indicate the presence of excessive protein in the urine. It is predominantly albumin, but also globulin."
              },
              {
                "code": "Pruritus",
                "display": "Pruritus",
                "definition": "A disorder characterized by an intense itching sensation."
              },
              {
                "code": "Psychiatric disorders - Other, Specify",
                "display": "Psychiatric disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Psychosis",
                "display": "Psychosis",
                "definition": "A disorder characterized by personality change, impaired functioning, and loss of touch with reality. It may be a manifestation of schizophrenia, bipolar disorder or brain tumor."
              },
              {
                "code": "Pulmonary edema",
                "display": "Pulmonary edema",
                "definition": "A disorder characterized by accumulation of fluid in the lung tissues that causes a disturbance of the gas exchange that may lead to respiratory failure."
              },
              {
                "code": "Pulmonary fibrosis",
                "display": "Pulmonary fibrosis",
                "definition": "A disorder characterized by the replacement of the lung tissue by connective tissue, leading to progressive dyspnea, respiratory failure or right heart failure."
              },
              {
                "code": "Pulmonary fistula",
                "display": "Pulmonary fistula",
                "definition": "A disorder characterized by an abnormal communication between the lung and another organ or anatomic site."
              },
              {
                "code": "Pulmonary hypertension",
                "display": "Pulmonary hypertension",
                "definition": "A disorder characterized by an increase in pressure within the pulmonary circulation due to lung or heart disorder."
              },
              {
                "code": "Pulmonary valve disease",
                "display": "Pulmonary valve disease",
                "definition": "A disorder characterized by a defect in pulmonary valve function or structure."
              },
              {
                "code": "Purpura",
                "display": "Purpura",
                "definition": "A disorder characterized by hemorrhagic areas of the skin and mucous membrane. Newer lesions appear reddish in color. Older lesions are usually a darker purple color and eventually become a brownish-yellow color."
              },
              {
                "code": "Pyramidal tract syndrome",
                "display": "Pyramidal tract syndrome",
                "definition": "A disorder characterized by dysfunction of the corticospinal (pyramidal) tracts of the spinal cord. Symptoms include an increase in the muscle tone in the lower extremities, hyperreflexia, positive Babinski and a decrease in fine motor coordination."
              },
              {
                "code": "Radiation recall reaction (dermatologic)",
                "display": "Radiation recall reaction (dermatologic)",
                "definition": "A finding of acute skin inflammatory reaction caused by drugs, especially chemotherapeutic agents, for weeks or months following radiotherapy. The inflammatory reaction is confined to the previously irradiated skin and the symptoms disappear after the removal of the pharmaceutical agent."
              },
              {
                "code": "Radiculitis",
                "display": "Radiculitis",
                "definition": "A disorder characterized by inflammation involving a nerve root. Patients experience marked discomfort radiating along a nerve path because of spinal pressure on the connecting nerve root."
              },
              {
                "code": "Rash acneiform",
                "display": "Rash acneiform",
                "definition": "A disorder characterized by an eruption of papules and pustules, typically appearing in face, scalp, upper chest and back."
              },
              {
                "code": "Rash maculo-papular",
                "display": "Rash maculo-papular",
                "definition": "A disorder characterized by the presence of macules (flat) and papules (elevated). Also known as morbillform rash, it is one of the most common cutaneous adverse events, frequently affecting the upper trunk, spreading centripetally and associated with pruritus."
              },
              {
                "code": "Rash pustular",
                "display": "Rash pustular",
                "definition": "A disorder characterized by a circumscribed and elevated skin lesion filled with pus."
              },
              {
                "code": "Rectal anastomotic leak",
                "display": "Rectal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a rectal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Rectal fistula",
                "display": "Rectal fistula",
                "definition": "A disorder characterized by an abnormal communication between the rectum and another organ or anatomic site."
              },
              {
                "code": "Rectal hemorrhage",
                "display": "Rectal hemorrhage",
                "definition": "A disorder characterized by bleeding from the rectal wall and discharged from the anus."
              },
              {
                "code": "Rectal mucositis",
                "display": "Rectal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the rectum."
              },
              {
                "code": "Rectal necrosis",
                "display": "Rectal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the rectal wall."
              },
              {
                "code": "Rectal obstruction",
                "display": "Rectal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the rectum."
              },
              {
                "code": "Rectal pain",
                "display": "Rectal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the rectal region."
              },
              {
                "code": "Rectal perforation",
                "display": "Rectal perforation",
                "definition": "A disorder characterized by a rupture in the rectal wall."
              },
              {
                "code": "Rectal stenosis",
                "display": "Rectal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the rectum."
              },
              {
                "code": "Rectal ulcer",
                "display": "Rectal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the rectum."
              },
              {
                "code": "Recurrent laryngeal nerve palsy",
                "display": "Recurrent laryngeal nerve palsy",
                "definition": "A disorder characterized by paralysis of the recurrent laryngeal nerve."
              },
              {
                "code": "Renal and urinary disorders - Other, Specify",
                "display": "Renal and urinary disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Renal calculi",
                "display": "Renal calculi",
                "definition": "A disorder characterized by the formation of crystals in the pelvis of the kidney."
              },
              {
                "code": "Renal colic",
                "display": "Renal colic",
                "definition": "A disorder characterized by paroxysmal and severe flank marked discomfort radiating to the inguinal area. Often, the cause is the passage of kidney stones."
              },
              {
                "code": "Renal hemorrhage",
                "display": "Renal hemorrhage",
                "definition": "A disorder characterized by bleeding from the kidney."
              },
              {
                "code": "Reproductive system and breast disorders - Other, Specify",
                "display": "Reproductive system and breast disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Respiratory failure",
                "display": "Respiratory failure",
                "definition": "A disorder characterized by impaired gas exchange by the respiratory system resulting in hypoxemia and a decrease in oxygenation of the tissues that may be associated with an increase in arterial levels of carbon dioxide."
              },
              {
                "code": "Respiratory, thoracic and mediastinal disorders - Other, Specify",
                "display": "Respiratory, thoracic and mediastinal disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Restlessness",
                "display": "Restlessness",
                "definition": "A disorder characterized by an inability to rest, relax or be still."
              },
              {
                "code": "Restrictive cardiomyopathy",
                "display": "Restrictive cardiomyopathy",
                "definition": "A disorder characterized by an inability of the ventricles to fill with blood because the myocardium (heart muscle) stiffens and loses its flexibility."
              },
              {
                "code": "Retinal detachment",
                "display": "Retinal detachment",
                "definition": "A disorder characterized by the separation of the inner retina layers from the underlying pigment epithelium."
              },
              {
                "code": "Retinal tear",
                "display": "Retinal tear",
                "definition": "A disorder characterized by a small laceration of the retina, this occurs when the vitreous separates from the retina. Symptoms include flashes and floaters."
              },
              {
                "code": "Retinal vascular disorder",
                "display": "Retinal vascular disorder",
                "definition": "A disorder characterized by pathological retinal blood vessels that adversely affects vision."
              },
              {
                "code": "Retinoic acid syndrome",
                "display": "Retinoic acid syndrome",
                "definition": "A disorder characterized by weight gain, dyspnea, pleural and pericardial effusions, leukocytosis and/or renal failure originally described in patients treated with all-trans retinoic acid."
              },
              {
                "code": "Retinopathy",
                "display": "Retinopathy",
                "definition": "A disorder involving the retina."
              },
              {
                "code": "Retroperitoneal hemorrhage",
                "display": "Retroperitoneal hemorrhage",
                "definition": "A disorder characterized by bleeding from the retroperitoneal area."
              },
              {
                "code": "Reversible posterior leukoencephalopathy syndrome",
                "display": "Reversible posterior leukoencephalopathy syndrome",
                "definition": "A disorder characterized by headaches, mental status changes, visual disturbances, and seizures associated with imaging findings of posterior leukoencephalopathy. It has been observed in association with hypertensive encephalopathy, eclampsia, and immunosuppressive and cytotoxic drug treatment. It is an acute or subacute reversible condition."
              },
              {
                "code": "Rhinitis infective",
                "display": "Rhinitis infective",
                "definition": "A disorder characterized by an infectious process involving the nasal mucosal."
              },
              {
                "code": "Right ventricular dysfunction",
                "display": "Right ventricular dysfunction",
                "definition": "A disorder characterized by impairment of right ventricular function associated with low ejection fraction and a decrease in motility of the right ventricular wall."
              },
              {
                "code": "Salivary duct inflammation",
                "display": "Salivary duct inflammation",
                "definition": "A disorder characterized by inflammation of the salivary duct."
              },
              {
                "code": "Salivary gland fistula",
                "display": "Salivary gland fistula",
                "definition": "A disorder characterized by an abnormal communication between a salivary gland and another organ or anatomic site."
              },
              {
                "code": "Salivary gland infection",
                "display": "Salivary gland infection",
                "definition": "A disorder characterized by an infectious process involving the salivary gland."
              },
              {
                "code": "Scalp pain",
                "display": "Scalp pain",
                "definition": "A disorder characterized by marked discomfort sensation in the skin covering the top and the back of the head."
              },
              {
                "code": "Scleral disorder",
                "display": "Scleral disorder",
                "definition": "A disorder characterized by involvement of the sclera of the eye."
              },
              {
                "code": "Scoliosis",
                "display": "Scoliosis",
                "definition": "A disorder characterized by a malformed, lateral curvature of the spine."
              },
              {
                "code": "Scrotal infection",
                "display": "Scrotal infection",
                "definition": "A disorder characterized by an infectious process involving the scrotum."
              },
              {
                "code": "Scrotal pain",
                "display": "Scrotal pain",
                "definition": "A disorder characterized by marked discomfort sensation in the scrotal area."
              },
              {
                "code": "Seizure",
                "display": "Seizure",
                "definition": "A disorder characterized by a sudden, involuntary skeletal muscular contractions of cerebral or brain stem origin."
              },
              {
                "code": "Sepsis",
                "display": "Sepsis",
                "definition": "A disorder characterized by the presence of pathogenic microorganisms in the blood stream that cause a rapidly progressing systemic reaction that may lead to shock."
              },
              {
                "code": "Seroma",
                "display": "Seroma",
                "definition": "A finding of tumor-like collection of serum in the tissues."
              },
              {
                "code": "Serum amylase increased",
                "display": "Serum amylase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the levels of amylase in a serum specimen."
              },
              {
                "code": "Serum sickness",
                "display": "Serum sickness",
                "definition": "A disorder characterized by a delayed-type hypersensitivity reaction to foreign proteins derived from an animal serum. It occurs approximately six to twenty-one days following the administration of the foreign antigen. Symptoms include fever, arthralgias, myalgias, skin eruptions, lymphadenopathy, chest marked discomfort and dyspnea."
              },
              {
                "code": "Sick sinus syndrome",
                "display": "Sick sinus syndrome",
                "definition": "A disorder characterized by a dysrhythmia with alternating periods of bradycardia and atrial tachycardia accompanied by syncope, fatigue and dizziness."
              },
              {
                "code": "Sinus bradycardia",
                "display": "Sinus bradycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate less than 60 beats per minute that originates in the sinus node."
              },
              {
                "code": "Sinus disorder",
                "display": "Sinus disorder",
                "definition": "A disorder characterized by involvement of the paranasal sinuses."
              },
              {
                "code": "Sinus pain",
                "display": "Sinus pain",
                "definition": "A disorder characterized by marked discomfort in the face, between the eyes, or upper teeth originating from the sinuses."
              },
              {
                "code": "Sinus tachycardia",
                "display": "Sinus tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates in the sinus node."
              },
              {
                "code": "Sinusitis",
                "display": "Sinusitis",
                "definition": "A disorder characterized by an infectious process involving the mucous membranes of the paranasal sinuses."
              },
              {
                "code": "Skin and subcutaneous tissue disorders - Other, Specify",
                "display": "Skin and subcutaneous tissue disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Skin atrophy",
                "display": "Skin atrophy",
                "definition": "A disorder characterized by the degeneration and thinning of the epidermis and dermis."
              },
              {
                "code": "Skin hyperpigmentation",
                "display": "Skin hyperpigmentation",
                "definition": "A disorder characterized by darkening of the skin due to excessive melanin deposition."
              },
              {
                "code": "Skin hypopigmentation",
                "display": "Skin hypopigmentation",
                "definition": "A disorder characterized by loss of skin pigment."
              },
              {
                "code": "Skin induration",
                "display": "Skin induration",
                "definition": "A disorder characterized by an area of hardness in the skin."
              },
              {
                "code": "Skin infection",
                "display": "Skin infection",
                "definition": "A disorder characterized by an infectious process involving the skin."
              },
              {
                "code": "Skin ulceration",
                "display": "Skin ulceration",
                "definition": "A disorder characterized by circumscribed, inflammatory and necrotic erosive lesion on the skin."
              },
              {
                "code": "Sleep apnea",
                "display": "Sleep apnea",
                "definition": "A disorder characterized by cessation of breathing for short periods during sleep."
              },
              {
                "code": "Small intestinal anastomotic leak",
                "display": "Small intestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an anastomosis (surgical connection of two separate anatomic structures) in the small bowel."
              },
              {
                "code": "Small intestinal mucositis",
                "display": "Small intestinal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the small intestine."
              },
              {
                "code": "Small intestinal obstruction",
                "display": "Small intestinal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents."
              },
              {
                "code": "Small intestinal perforation",
                "display": "Small intestinal perforation",
                "definition": "A disorder characterized by a rupture in the small intestine wall."
              },
              {
                "code": "Small intestinal stenosis",
                "display": "Small intestinal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the small intestine."
              },
              {
                "code": "Small intestine infection",
                "display": "Small intestine infection",
                "definition": "A disorder characterized by an infectious process involving the small intestine."
              },
              {
                "code": "Small intestine ulcer",
                "display": "Small intestine ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the small intestine."
              },
              {
                "code": "Sneezing",
                "display": "Sneezing",
                "definition": "A disorder characterized by the involuntary expulsion of air from the nose."
              },
              {
                "code": "Social circumstances - Other, Specify",
                "display": "Social circumstances - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Soft tissue infection",
                "display": "Soft tissue infection",
                "definition": "A disorder characterized by an infectious process involving soft tissues."
              },
              {
                "code": "Soft tissue necrosis lower limb",
                "display": "Soft tissue necrosis lower limb",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the lower extremity."
              },
              {
                "code": "Soft tissue necrosis upper limb",
                "display": "Soft tissue necrosis upper limb",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the upper extremity."
              },
              {
                "code": "Somnolence",
                "display": "Somnolence",
                "definition": "A disorder characterized by characterized by excessive sleepiness and drowsiness."
              },
              {
                "code": "Sore throat",
                "display": "Sore throat",
                "definition": "A disorder characterized by of marked discomfort in the throat"
              },
              {
                "code": "Spasticity",
                "display": "Spasticity",
                "definition": "A disorder characterized by increased involuntary muscle tone that affects the regions interfering with voluntary movement. It results in gait, movement, and speech disturbances."
              },
              {
                "code": "Spermatic cord anastomotic leak",
                "display": "Spermatic cord anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a spermatic cord anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Spermatic cord hemorrhage",
                "display": "Spermatic cord hemorrhage",
                "definition": "A disorder characterized by bleeding from the spermatic cord."
              },
              {
                "code": "Spermatic cord obstruction",
                "display": "Spermatic cord obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents of the spermatic cord."
              },
              {
                "code": "Spinal fracture",
                "display": "Spinal fracture",
                "definition": "A finding of traumatic injury to the spine in which the continuity of a vertebral bone is broken."
              },
              {
                "code": "Spleen disorder",
                "display": "Spleen disorder",
                "definition": "A disorder of the spleen."
              },
              {
                "code": "Splenic infection",
                "display": "Splenic infection",
                "definition": "A disorder characterized by an infectious process involving the spleen."
              },
              {
                "code": "Stenosis of gastrointestinal stoma",
                "display": "Stenosis of gastrointestinal stoma",
                "definition": "A finding of narrowing of the gastrointestinal stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "Stevens-Johnson syndrome",
                "display": "Stevens-Johnson syndrome",
                "definition": "A disorder characterized by less than 10% total body skin area separation of dermis. The syndrome is thought to be a hypersensitivity complex affecting the skin and the mucous membranes."
              },
              {
                "code": "Stoma site infection",
                "display": "Stoma site infection",
                "definition": "A disorder characterized by an infectious process involving a stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "Stomach pain",
                "display": "Stomach pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the stomach."
              },
              {
                "code": "Stomal ulcer",
                "display": "Stomal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the jejunal mucosal surface close to the anastomosis site following a gastroenterostomy procedure."
              },
              {
                "code": "Stridor",
                "display": "Stridor",
                "definition": "A disorder characterized by a high pitched breathing sound due to laryngeal or upper airway obstruction."
              },
              {
                "code": "Stroke",
                "display": "Stroke",
                "definition": "A disorder characterized by a sudden loss of sensory function due to an intracranial vascular event."
              },
              {
                "code": "Sudden death NOS",
                "display": "Sudden death NOS",
                "definition": "An unexpected cessation of life that cannot be attributed to a CTCAE term associated with Grade 5."
              },
              {
                "code": "Suicidal ideation",
                "display": "Suicidal ideation",
                "definition": "A disorder characterized by thoughts of taking one's own life."
              },
              {
                "code": "Suicide attempt",
                "display": "Suicide attempt",
                "definition": "A disorder characterized by self-inflicted harm in an attempt to end one's own life."
              },
              {
                "code": "Superficial soft tissue fibrosis",
                "display": "Superficial soft tissue fibrosis",
                "definition": "A disorder characterized by fibrotic degeneration of the superficial soft tissues."
              },
              {
                "code": "Superficial thrombophlebitis",
                "display": "Superficial thrombophlebitis",
                "definition": "A disorder characterized by a blood clot and inflammation involving a superficial vein of the extremities."
              },
              {
                "code": "Superior vena cava syndrome",
                "display": "Superior vena cava syndrome",
                "definition": "A disorder characterized by obstruction of the blood flow in the superior vena cava. Signs and symptoms include swelling and cyanosis of the face, neck, and upper arms, cough, orthopnea and headache."
              },
              {
                "code": "Supraventricular tachycardia",
                "display": "Supraventricular tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates above the ventricles."
              },
              {
                "code": "Surgical and medical procedures - Other, Specify",
                "display": "Surgical and medical procedures - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Syncope",
                "display": "Syncope",
                "definition": "A disorder characterized by spontaneous loss of consciousness caused by insufficient blood supply to the brain."
              },
              {
                "code": "Telangiectasia",
                "display": "Telangiectasia",
                "definition": "A disorder characterized by local dilatation of small vessels resulting in red discoloration of the skin or mucous membranes."
              },
              {
                "code": "Testicular disorder",
                "display": "Testicular disorder",
                "definition": "A disorder characterized by involvement of the testis."
              },
              {
                "code": "Testicular hemorrhage",
                "display": "Testicular hemorrhage",
                "definition": "A disorder characterized by bleeding from the testis."
              },
              {
                "code": "Testicular pain",
                "display": "Testicular pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the testis."
              },
              {
                "code": "Thromboembolic event",
                "display": "Thromboembolic event",
                "definition": "A disorder characterized by occlusion of a vessel by a thrombus that has migrated from a distal site via the blood stream."
              },
              {
                "code": "Thrombotic thrombocytopenic purpura",
                "display": "Thrombotic thrombocytopenic purpura",
                "definition": "A disorder characterized by the presence of microangiopathic hemolytic anemia, thrombocytopenic purpura, fever, renal abnormalities and neurological abnormalities such as seizures, hemiplegia, and visual disturbances. It is an acute or subacute condition."
              },
              {
                "code": "Tinnitus",
                "display": "Tinnitus",
                "definition": "A disorder characterized by noise in the ears, such as ringing, buzzing, roaring or clicking."
              },
              {
                "code": "Tooth development disorder",
                "display": "Tooth development disorder",
                "definition": "A disorder characterized by a pathological process of the teeth occurring during tooth development."
              },
              {
                "code": "Tooth discoloration",
                "display": "Tooth discoloration",
                "definition": "A disorder characterized by a change in tooth hue or tint."
              },
              {
                "code": "Tooth infection",
                "display": "Tooth infection",
                "definition": "A disorder characterized by an infectious process involving a tooth."
              },
              {
                "code": "Toothache",
                "display": "Toothache",
                "definition": "A disorder characterized by a sensation of marked discomfort in the tooth."
              },
              {
                "code": "Toxic epidermal necrolysis",
                "display": "Toxic epidermal necrolysis",
                "definition": "A disorder characterized by greater than 30% total body skin area separation of dermis. The syndrome is thought to be a hypersensitivity complex affecting the skin and the mucous membranes."
              },
              {
                "code": "Tracheal fistula",
                "display": "Tracheal fistula",
                "definition": "A disorder characterized by an abnormal communication between the trachea and another organ or anatomic site."
              },
              {
                "code": "Tracheal hemorrhage",
                "display": "Tracheal hemorrhage",
                "definition": "A finding of bleeding from the trachea."
              },
              {
                "code": "Tracheal mucositis",
                "display": "Tracheal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the trachea."
              },
              {
                "code": "Tracheal obstruction",
                "display": "Tracheal obstruction",
                "definition": "A finding of blockage of the lumen of the trachea."
              },
              {
                "code": "Tracheal stenosis",
                "display": "Tracheal stenosis",
                "definition": "A disorder characterized by a narrowing of the trachea."
              },
              {
                "code": "Tracheitis",
                "display": "Tracheitis",
                "definition": "A disorder characterized by an infectious process involving the trachea."
              },
              {
                "code": "Tracheostomy site bleeding",
                "display": "Tracheostomy site bleeding",
                "definition": "A finding of blood leakage from the tracheostomy site."
              },
              {
                "code": "Transient ischemic attacks",
                "display": "Transient ischemic attacks",
                "definition": "A disorder characterized by a brief attack (less than 24 hours) of cerebral dysfunction of vascular origin, with no persistent neurological deficit."
              },
              {
                "code": "Treatment related secondary malignancy",
                "display": "Treatment related secondary malignancy",
                "definition": "A disorder characterized by development of a malignancy most probably as a result of treatment for a previously existing malignancy."
              },
              {
                "code": "Tremor",
                "display": "Tremor",
                "definition": "A disorder characterized by the uncontrolled shaking movement of the whole body or individual parts."
              },
              {
                "code": "Tricuspid valve disease",
                "display": "Tricuspid valve disease",
                "definition": "A disorder characterized by a defect in tricuspid valve function or structure."
              },
              {
                "code": "Trigeminal nerve disorder",
                "display": "Trigeminal nerve disorder",
                "definition": "A disorder characterized by involvement of the trigeminal nerve (fifth cranial nerve)."
              },
              {
                "code": "Trismus",
                "display": "Trismus",
                "definition": "A disorder characterized by lack of ability to open the mouth fully due to a decrease in the range of motion of the muscles of mastication."
              },
              {
                "code": "Tumor lysis syndrome",
                "display": "Tumor lysis syndrome",
                "definition": "A disorder characterized by metabolic abnormalities that result from a spontaneous or therapy-related cytolysis of tumor cells."
              },
              {
                "code": "Tumor pain",
                "display": "Tumor pain",
                "definition": "A disorder characterized by marked discomfort from a neoplasm that may be pressing on a nerve, blocking blood vessels, inflamed or fractured from metastasis."
              },
              {
                "code": "Typhlitis",
                "display": "Typhlitis",
                "definition": "A disorder characterized by inflammation of the cecum."
              },
              {
                "code": "Unequal limb length",
                "display": "Unequal limb length",
                "definition": "A disorder characterized by of a discrepancy between the lengths of the lower or upper extremities."
              },
              {
                "code": "Unintended pregnancy",
                "display": "Unintended pregnancy",
                "definition": "A disorder characterized by an unexpected pregnancy at the time of conception."
              },
              {
                "code": "Upper gastrointestinal hemorrhage",
                "display": "Upper gastrointestinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the upper gastrointestinal tract (oral cavity, pharynx, esophagus, and stomach)."
              },
              {
                "code": "Upper respiratory infection",
                "display": "Upper respiratory infection",
                "definition": "A disorder characterized by an infectious process involving the upper respiratory tract (nose, paranasal sinuses, pharynx, larynx, or trachea)."
              },
              {
                "code": "Ureteric anastomotic leak",
                "display": "Ureteric anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a ureteral anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Urethral anastomotic leak",
                "display": "Urethral anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a urethral anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Urethral infection",
                "display": "Urethral infection",
                "definition": "A disorder characterized by an infectious process involving the urethra."
              },
              {
                "code": "Urinary fistula",
                "display": "Urinary fistula",
                "definition": "A disorder characterized by an abnormal communication between any part of the urinary system and another organ or anatomic site."
              },
              {
                "code": "Urinary frequency",
                "display": "Urinary frequency",
                "definition": "A disorder characterized by urination at short intervals."
              },
              {
                "code": "Urinary incontinence",
                "display": "Urinary incontinence",
                "definition": "A disorder characterized by inability to control the flow of urine from the bladder."
              },
              {
                "code": "Urinary retention",
                "display": "Urinary retention",
                "definition": "A disorder characterized by accumulation of urine within the bladder because of the inability to urinate."
              },
              {
                "code": "Urinary tract infection",
                "display": "Urinary tract infection",
                "definition": "A disorder characterized by an infectious process involving the urinary tract, most commonly the bladder and the urethra."
              },
              {
                "code": "Urinary tract obstruction",
                "display": "Urinary tract obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of contents of the urinary tract."
              },
              {
                "code": "Urinary tract pain",
                "display": "Urinary tract pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the urinary tract."
              },
              {
                "code": "Urinary urgency",
                "display": "Urinary urgency",
                "definition": "A disorder characterized by a sudden compelling urge to urinate."
              },
              {
                "code": "Urine discoloration",
                "display": "Urine discoloration",
                "definition": "A disorder characterized by a change in the color of the urine."
              },
              {
                "code": "Urine output decreased",
                "display": "Urine output decreased",
                "definition": "A finding based on test results that indicate urine production is less relative to previous output."
              },
              {
                "code": "Urostomy leak",
                "display": "Urostomy leak",
                "definition": "A finding of leakage of contents from a urostomy."
              },
              {
                "code": "Urostomy obstruction",
                "display": "Urostomy obstruction",
                "definition": "A finding of blockage of the urostomy."
              },
              {
                "code": "Urostomy site bleeding",
                "display": "Urostomy site bleeding",
                "definition": "A finding of bleeding from the urostomy site."
              },
              {
                "code": "Urostomy stenosis",
                "display": "Urostomy stenosis",
                "definition": "A finding of narrowing of the opening of a urostomy."
              },
              {
                "code": "Urticaria",
                "display": "Urticaria",
                "definition": "A disorder characterized by an itchy skin eruption characterized by wheals with pale interiors and well-defined red margins."
              },
              {
                "code": "Uterine anastomotic leak",
                "display": "Uterine anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a uterine anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Uterine fistula",
                "display": "Uterine fistula",
                "definition": "A disorder characterized by an abnormal communication between the uterus and another organ or anatomic site."
              },
              {
                "code": "Uterine hemorrhage",
                "display": "Uterine hemorrhage",
                "definition": "A disorder characterized by bleeding from the uterus."
              },
              {
                "code": "Uterine infection",
                "display": "Uterine infection",
                "definition": "A disorder characterized by an infectious process involving the endometrium. It may extend to the myometrium and parametrial tissues."
              },
              {
                "code": "Uterine obstruction",
                "display": "Uterine obstruction",
                "definition": "A disorder characterized by blockage of the uterine outlet."
              },
              {
                "code": "Uterine pain",
                "display": "Uterine pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the uterus."
              },
              {
                "code": "Uterine perforation",
                "display": "Uterine perforation",
                "definition": "A disorder characterized by a rupture in the uterine wall."
              },
              {
                "code": "Uveitis",
                "display": "Uveitis",
                "definition": "A disorder characterized by inflammation to the uvea of the eye."
              },
              {
                "code": "Vaginal anastomotic leak",
                "display": "Vaginal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a vaginal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Vaginal discharge",
                "display": "Vaginal discharge",
                "definition": "A disorder characterized by vaginal secretions. Mucus produced by the cervical glands is discharged from the vagina naturally, especially during the childbearing years."
              },
              {
                "code": "Vaginal dryness",
                "display": "Vaginal dryness",
                "definition": "A disorder characterized by an uncomfortable feeling of itching and burning in the vagina."
              },
              {
                "code": "Vaginal fistula",
                "display": "Vaginal fistula",
                "definition": "A disorder characterized by an abnormal communication between the vagina and another organ or anatomic site."
              },
              {
                "code": "Vaginal hemorrhage",
                "display": "Vaginal hemorrhage",
                "definition": "A disorder characterized by bleeding from the vagina."
              },
              {
                "code": "Vaginal infection",
                "display": "Vaginal infection",
                "definition": "A disorder characterized by an infectious process involving the vagina."
              },
              {
                "code": "Vaginal inflammation",
                "display": "Vaginal inflammation",
                "definition": "A disorder characterized by inflammation involving the vagina. Symptoms may include redness, edema, marked discomfort and an increase in vaginal discharge."
              },
              {
                "code": "Vaginal obstruction",
                "display": "Vaginal obstruction",
                "definition": "A disorder characterized by blockage of vaginal canal."
              },
              {
                "code": "Vaginal pain",
                "display": "Vaginal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the vagina."
              },
              {
                "code": "Vaginal perforation",
                "display": "Vaginal perforation",
                "definition": "A disorder characterized by a rupture in the vaginal wall."
              },
              {
                "code": "Vaginal stricture",
                "display": "Vaginal stricture",
                "definition": "A disorder characterized by a narrowing of the vaginal canal."
              },
              {
                "code": "Vaginismus",
                "display": "Vaginismus",
                "definition": "A disorder characterized by involuntary spasms of the pelvic floor muscles, resulting in pathologic tightness of the vaginal wall during penetration such as during sexual intercourse."
              },
              {
                "code": "Vagus nerve disorder",
                "display": "Vagus nerve disorder",
                "definition": "A disorder characterized by involvement of the vagus nerve (tenth cranial nerve)."
              },
              {
                "code": "Vas deferens anastomotic leak",
                "display": "Vas deferens anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a vas deferens anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "Vascular access complication",
                "display": "Vascular access complication",
                "definition": "A finding of a previously undocumented problem related to the vascular access site."
              },
              {
                "code": "Vascular disorders - Other, Specify",
                "display": "Vascular disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "Vasculitis",
                "display": "Vasculitis",
                "definition": "A disorder characterized by inflammation involving the wall of a vessel."
              },
              {
                "code": "Vasovagal reaction",
                "display": "Vasovagal reaction",
                "definition": "A disorder characterized by a sudden drop of the blood pressure, bradycardia, and peripheral vasodilation that may lead to loss of consciousness. It results from an increase in the stimulation of the vagus nerve."
              },
              {
                "code": "Venous injury",
                "display": "Venous injury",
                "definition": "A finding of damage to a vein."
              },
              {
                "code": "Ventricular arrhythmia",
                "display": "Ventricular arrhythmia",
                "definition": "A disorder characterized by a dysrhythmia that originates in the ventricles."
              },
              {
                "code": "Ventricular fibrillation",
                "display": "Ventricular fibrillation",
                "definition": "A disorder characterized by a dysrhythmia without discernible QRS complexes due to rapid repetitive excitation of myocardial fibers without coordinated contraction of the ventricles."
              },
              {
                "code": "Ventricular tachycardia",
                "display": "Ventricular tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates distal to the bundle of His."
              },
              {
                "code": "Vertigo",
                "display": "Vertigo",
                "definition": "A disorder characterized by a sensation as if the external world were revolving around the patient (objective vertigo) or as if he himself were revolving in space (subjective vertigo)."
              },
              {
                "code": "Vestibular disorder",
                "display": "Vestibular disorder",
                "definition": "A disorder characterized by dizziness, imbalance, nausea, and vision problems."
              },
              {
                "code": "Virilization",
                "display": "Virilization",
                "definition": "A disorder characterized by inappropriate masculinization occurring in a female or prepubertal male."
              },
              {
                "code": "Visceral arterial ischemia",
                "display": "Visceral arterial ischemia",
                "definition": "A disorder characterized by a decrease in blood supply due to narrowing or blockage of a visceral (mesenteric) artery."
              },
              {
                "code": "Vital capacity abnormal",
                "display": "Vital capacity abnormal",
                "definition": "A finding based on pulmonary function test results that indicate an abnormal vital capacity (amount of exhaled after a maximum inhalation) when compared to the predicted value."
              },
              {
                "code": "Vitreous hemorrhage",
                "display": "Vitreous hemorrhage",
                "definition": "A disorder characterized by blood extravasation into the vitreous humor."
              },
              {
                "code": "Voice alteration",
                "display": "Voice alteration",
                "definition": "A disorder characterized by a change in the sound and/or speed of the voice."
              },
              {
                "code": "Vomiting",
                "display": "Vomiting",
                "definition": "A disorder characterized by the reflexive act of ejecting the contents of the stomach through the mouth."
              },
              {
                "code": "Vulval infection",
                "display": "Vulval infection",
                "definition": "A disorder characterized by an infectious process involving the vulva."
              },
              {
                "code": "Watering eyes",
                "display": "Watering eyes",
                "definition": "A disorder of excessive tearing in the eyes; it can be caused by overproduction of tears or impaired drainage of the tear duct."
              },
              {
                "code": "Weight gain",
                "display": "Weight gain",
                "definition": "A finding characterized by an increase in overall body weight; for pediatrics, greater than the baseline growth curve."
              },
              {
                "code": "Weight loss",
                "display": "Weight loss",
                "definition": "A finding characterized by a decrease in overall body weight; for pediatrics, less than the baseline growth curve."
              },
              {
                "code": "Wheezing",
                "display": "Wheezing",
                "definition": "A disorder characterized by a high-pitched, whistling sound during breathing. It results from the narrowing or obstruction of the respiratory airways."
              },
              {
                "code": "White blood cell decreased",
                "display": "White blood cell decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in number of white blood cells in a blood specimen."
              },
              {
                "code": "Wolff-Parkinson-White syndrome",
                "display": "Wolff-Parkinson-White syndrome",
                "definition": "A disorder characterized by the presence of an accessory conductive pathway between the atria and the ventricles that causes premature ventricular activation."
              },
              {
                "code": "Wound complication",
                "display": "Wound complication",
                "definition": "A finding of development of a new problem at the site of an existing wound."
              },
              {
                "code": "Wound dehiscence",
                "display": "Wound dehiscence",
                "definition": "A finding of separation of the approximated margins of a surgical wound."
              },
              {
                "code": "Wound infection",
                "display": "Wound infection",
                "definition": "A disorder characterized by an infectious process involving the wound."
              },
              {
                "code": "Wrist fracture",
                "display": "Wrist fracture",
                "definition": "A finding of traumatic injury to the wrist joint in which the continuity of a wrist bone is broken."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e14927-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556214v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e14927-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e54652-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557008v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "1",
                "display": "Mild Adverse Event",
                "definition": "An adverse event that is asymptomatic; or involves mild or minor symptoms; or is of marginal clinical relevance; or consists of clinical or diagnostic observations alone; or for which intervention is not indicated; or for which only non-prescription intervention is indicated."
              },
              {
                "code": "2",
                "display": "Moderate Adverse Event",
                "definition": "An adverse event for which only minimal, local, or noninvasive intervention (e.g. packing, cautery) is indicated; or that limits instrumental activities of daily living (ADLs, e.g., shopping, laundry, transportation, or ability to conduct finances)."
              },
              {
                "code": "3",
                "display": "Severe Adverse Event",
                "definition": "An adverse event that is medically significant but not life-threatening; or for which inpatient care or prolongation of hospitalization are indicated; or that is an important medical event that does not result in hospitalization, but may jeopardize the patient or may require intervention either to prevent hospitalization, to prevent the AE from becoming life-threatening or causing death; or that is disabling; or that results in persistent or significant disability, incapcity, or limitation of self care activities of daily living (ADLs, e.g., getting in and our of bed, dressing, eating, getting around inside, bathing, or using the toilet)."
              },
              {
                "code": "4",
                "display": "Life Threatening Adverse Event",
                "definition": "An adverse event that has life-threatening consequences; for which urgent intervention is indicated; that puts the patient at risk of death at the time of the event if immediate intervention is not undertaken; or that causes blindness or deafness."
              },
              {
                "code": "5",
                "display": "Death Related to Adverse Event",
                "definition": "The termination of life associated with an adverse event."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e54652-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557008v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e54652-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e55041-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557021v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e55041-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557021v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e55041-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e55265-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557032v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Biological Therapy",
                "display": "Biological Therapy",
                "definition": "Biological therapy is a form of treatment that implies the administration of substances which produce a biological reaction in the organism enhancing or restoring the host immune response, modifying the behavior of cancer cells, blocking the pathways of cell neoplastic transformation and tumor ability to metastasize, or facilitating the repairment of cells damaged by aggressive forms of cancer treatment. It includes the use of sera, antitoxins, vaccines, genes, cells, tissues, and organs"
              },
              {
                "code": "Chemotherapy",
                "display": "CHEMOTHERAPY",
                "definition": "CHEMOTHERAPY"
              },
              {
                "code": "Combined modality",
                "display": "combined modality",
                "definition": "combined modality"
              },
              {
                "code": "Concomitant medication",
                "display": "Concomitant Agent",
                "definition": "A pharmaceutical agent other than agent(s) tested in a given protocol that is administered to or used by a subject either prior to or during the study. Supportive care and essential ancillary medications required by a treatment regimen should be clearly identified. A protocol complete instructions including appropriate indication, dosage, administration route, schedule, restrictions to use, and any other relevant data should be explicitly stated. Concept also refers to substance(s) used prior or during the study that are not specified by the protocol."
              },
              {
                "code": "Device",
                "display": "Medical_Device",
                "definition": "Medical device - any machinery designed to aid diagnostic and medical therapies. Medical device has to be designed with rigorous safety standards. There are several basic types of medical devices: life support equipment used to maintain a patient's body functions; therapeutic equipment; monitors and detectors to measure the indexes of a patient's state; imagine machines and laboratory equipment used with diagnostic and status monitoring purposes. In insurance parlance, the term is usually synonymous with assistive device, although it may include medical supplies."
              },
              {
                "code": "Disease",
                "display": "disease",
                "definition": "disease"
              },
              {
                "code": "Endocrine Therapy",
                "display": "Endocrine Therapy",
                "definition": "Various treatment modalities that produce the desired therapeutic effect by means of change of hormone/hormones level. The treatment may include administration of hormones or hormone analogs to the patient, or decreasing the level of hormones in the body by using hormone antagonists, or hormone ablation therapy. The concept covers but not limited to: intermittent or permanent hormone suppression or ablation in treatment of hormone-dependent tumors, hormone replacement therapy of any kind, hormonal component of gender reassignment therapy, hormonal contraception, surgical and radiation castration."
              },
              {
                "code": "Immunotherapy",
                "display": "Immunotherapy",
                "definition": "(IM-yoo-no-THER-a-pee) Treatment to stimulate or restore the ability of the immune system to fight infections and other diseases. Also used to lessen side effects that may be caused by some cancer treatments."
              },
              {
                "code": "Investigational agent",
                "display": "Investigational Agent",
                "definition": "In the process of being studied; experimental. (NCI): An active power or cause (as principle, substance, physical or biological factor, etc.) that produces a specific effect. (NCI)"
              },
              {
                "code": "Other",
                "display": "Other",
                "definition": "Not otherwise specified."
              },
              {
                "code": "Radiation therapy",
                "display": "Radiation Therapy",
                "definition": "use PHOTOTHERAPY, LASER THERAPY, or ULTRAVIOLET THERAPY for therapeutic radiation with visible, laser, or ultraviolet light, respectively."
              },
              {
                "code": "Surgery",
                "display": "Surgery",
                "definition": "A specialty in which manual or operative procedures are used in the treatment of disease, injuries, or deformities."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e55265-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557032v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e55265-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e56008-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557869v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Blood and lymphatic system disorders",
                "display": "Hematopoietic and Lymphoid System Disorder",
                "definition": "Any deviation from the normal structure or function of the blood or lymphatic system that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Cardiac disorders",
                "display": "Cardiac disorders",
                "definition": "Any deviation from the normal structure or function of the cardiac system that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Congenital, familial and genetic disorders",
                "display": "Congenital, Familial and Genetic Disorder Class",
                "definition": "A class of disorders that encompasses conditions resulting from a congenital, familial hereditary trait or genetic abnormality as is manifested by a characterstic set of symptoms and signs."
              },
              {
                "code": "Ear and labyrinth disorders",
                "display": "Ear and Labyrinth Disorder Class",
                "definition": "Any deviation from the normal structure or function of the ear or labyrinth that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Endocrine disorders",
                "display": "Endocrine Disorder",
                "definition": "Any deviation from the normal structure or function of the endocrine system that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Eye disorders",
                "display": "Eye Disorder",
                "definition": "Any deviation from the normal structure or function of the eye that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Gastrointestinal disorders",
                "display": "Gastrointestinal Disorder",
                "definition": "Diseases of the digestive tract (oral cavity to anus) and associated organs (salivary glands, liver, pancreas)."
              },
              {
                "code": "General disorders and administration site conditions",
                "display": "General Disorders and Administration Site Conditions Class",
                "definition": "A class of disorders that encompasses conditions of a general kind that result from a disease, the treatment of disease or administration of treatment at a particular site and are manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Hepatobiliary disorders",
                "display": "Liver and Biliary Tract Disorder",
                "definition": "Any deviation from the normal structure or function of the liver or biliary tract that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Immune system disorders",
                "display": "Immune System Disorder",
                "definition": "A disorder resulting from an abnormality in the immune system. -- 2003"
              },
              {
                "code": "Infections and infestations",
                "display": "Infection and infestation",
                "definition": "A disorder resulting from the presence and activity of a microbial, viral, or parasitic agent. It can be transmitted by direct or indirect contact. -- 2003"
              },
              {
                "code": "Injury, poisoning and procedural complications",
                "display": "Injury, Poisoning and Procedural Complication Class",
                "definition": "A class of disorders that encompasses conditions resulting from an injury, poisoning or procedure."
              },
              {
                "code": "Investigations",
                "display": "Investigation",
                "definition": "The act or process of a systematic and thorough examination; research, study; the process of inquiring into or following up, intended to develop facts."
              },
              {
                "code": "Metabolism and nutrition disorders",
                "display": "Metabolism and Nutrition Disorder Class",
                "definition": "A class of disorders that encompasses conditions occurring as a result of metabolic dysfunction or deviation from the normal nutritional requirements."
              },
              {
                "code": "Musculoskeletal and connective tissue disorders",
                "display": "Connective and Soft Tissue Disorder",
                "definition": "Any deviation from the normal structure or function of the musculoskeletal or connective tissue that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Neoplasms benign, malignant and unspecified (incl cysts and polyps)",
                "display": "Neoplasm",
                "definition": "An abnormal tissue growth resulted from uncontrolled cell proliferation. Benign neoplastic cells resemble normal cells without exhibiting significant cytologic atypia, while malignant ones exhibit overt signs such as dysplastic features, atypical mitotic figures, necrosis, nuclear pleomorphism, and anaplasia. Representative examples of benign neoplasms include papillomas, cystadenomas, and lipomas; malignant neoplasms include carcinomas, sarcomas, lymphomas, and leukemias."
              },
              {
                "code": "Nervous system disorders",
                "display": "Nervous System Disorder",
                "definition": "Any deviation from the normal structure or function of the nervous system that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Pregnancy, puerperium and perinatal conditions",
                "display": "Pregnancy, Puerperium and Perinatal Condition Class",
                "definition": "A class of conditions associated with pregnancy, puerperium and perinatal status."
              },
              {
                "code": "Psychiatric disorders",
                "display": "Psychiatric Disorder",
                "definition": "Any deviation from the normal structure or function of the brain and a psychiatric condition, that results in an impairment of an individual's normal cognitive, emotional, or behavioral functioning, and is caused by physiological or psychosocial factors."
              },
              {
                "code": "Renal and urinary disorders",
                "display": "Urinary Tract Disorder",
                "definition": "Disorders of any part of the urologic system."
              },
              {
                "code": "Reproductive system and breast disorders",
                "display": "Reproductive System and Breast Disorder Class",
                "definition": "Any deviation from the normal structure or function of the reproductive system or breast that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Respiratory, thoracic and mediastinal disorders",
                "display": "Respiratory and Thoracic Disorder",
                "definition": "Any deviation from the normal structure or function of the respiratory system including the thorax and mediastinum that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Skin and subcutaneous tissue disorders",
                "display": "Skin Disorder",
                "definition": "Any deviation from the normal structure or function of the skin or subcutaneous tissue that is manifested by a characteristic set of symptoms and signs."
              },
              {
                "code": "Social circumstances",
                "display": "Social Circumstances",
                "definition": "A set of concepts that results from or is influenced by criteria or activities associated with the social environment of a person."
              },
              {
                "code": "Surgical and medical procedures",
                "display": "Intervention or Procedure",
                "definition": "An activity that produces an effect, or that is intended to alter the course of a disease in a patient or population. This is a general term that encompasses the medical, social, behavioral, and environmnetal acts that can have preventive, therapeutic, or palliative effects."
              },
              {
                "code": "Vascular disorders",
                "display": "Vascular Disorder",
                "definition": "Any deviation from the normal structure or function of the vascular system that is manifested by a characteristic set of symptoms and signs."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e56008-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557869v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e56008-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e57358-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557050v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "10000060",
                "display": "Abdominal distension",
                "definition": "A disorder characterized by swelling of the abdomen."
              },
              {
                "code": "10000081",
                "display": "Abdominal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the abdominal region."
              },
              {
                "code": "10000486",
                "display": "Acidosis",
                "definition": "A disorder characterized by abnormally high acidity (high hydrogen-ion concentration) of the blood and other body tissues."
              },
              {
                "code": "10000521",
                "display": "Acoustic nerve disorder NOS",
                "definition": "A disorder characterized by involvement of the acoustic nerve (eighth cranial nerve)."
              },
              {
                "code": "10000636",
                "display": "Activated partial thromboplastin time prolonged",
                "definition": "An abnormal laboratory test result in which the partial thromboplastin time is found to be greater than the control value. As a possible indicator of coagulopathy, a prolonged partial thromboplastin time (PTT) may occur in a variety of diseases and disorders, both primary and related to treatment."
              },
              {
                "code": "10001367",
                "display": "Adrenal insufficiency",
                "definition": "A disorder that occurs when the adrenal cortex does not produce enough of the hormone cortisol and in some cases, the hormone aldosterone. It may be due to a disorder of the adrenal cortex as in Addison's disease or primary adrenal insufficiency."
              },
              {
                "code": "10001409",
                "display": "Adult respiratory distress syndrome",
                "definition": "A disorder characterized by progressive and life-threatening pulmonary distress in the absence of an underlying pulmonary condition, usually following major trauma or surgery."
              },
              {
                "code": "10001497",
                "display": "Agitation",
                "definition": "A disorder characterized by a state of restlessness associated with unpleasant feelings of irritability and tension."
              },
              {
                "code": "10001540",
                "display": "Akathisia",
                "definition": "A disorder characterized by an uncomfortable feeling of inner restlessness and inability to stay still; this is a side effect of some psychotropic drugs."
              },
              {
                "code": "10001551",
                "display": "Alanine aminotransferase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of alanine aminotransferase (ALT or SGPT) in the blood specimen."
              },
              {
                "code": "10001598",
                "display": "Alcohol intolerance",
                "definition": "A disorder characterized by an increase in sensitivity to the adverse effects of alcohol, which can include nasal congestion, skin flushes, heart dysrhythmias, nausea, vomiting, indigestion and headaches."
              },
              {
                "code": "10001675",
                "display": "Alkaline phosphatase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of alkaline phosphatase in a blood specimen."
              },
              {
                "code": "10001680",
                "display": "Alkalosis",
                "definition": "A disorder characterized by abnormally high alkalinity (low hydrogen-ion concentration) of the blood and other body tissues."
              },
              {
                "code": "10001718",
                "display": "Allergic reaction",
                "definition": "A disorder characterized by an adverse local or general response from exposure to an allergen."
              },
              {
                "code": "10001723",
                "display": "Allergic rhinitis",
                "definition": "A disorder characterized by an inflammation of the nasal mucous membranes caused by an IgE-mediated response to external allergens. The inflammation may also involve the mucous membranes of the sinuses, eyes, middle ear, and pharynx. Symptoms include sneezing, nasal congestion, rhinorrhea and itching."
              },
              {
                "code": "10001760",
                "display": "Alopecia",
                "definition": "A disorder characterized by a decrease in density of hair compared to normal for a given individual at a given age and body location."
              },
              {
                "code": "10001949",
                "display": "Amnesia",
                "definition": "A disorder characterized by systematic and extensive loss of memory."
              },
              {
                "code": "10002156",
                "display": "Anal fistula",
                "definition": "A disorder characterized by an abnormal communication between the opening in the anal canal to the perianal skin."
              },
              {
                "code": "10002167",
                "display": "Anal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the anal region."
              },
              {
                "code": "10002176",
                "display": "Anal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the anal canal."
              },
              {
                "code": "10002180",
                "display": "Anal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the anal canal."
              },
              {
                "code": "10002218",
                "display": "Anaphylaxis",
                "definition": "A disorder characterized by an acute inflammatory reaction resulting from the release of histamine and histamine-like substances from mast cells, causing a hypersensitivity immune response. Clinically, it presents with breathing difficulty, dizziness, hypotension, cyanosis and loss of consciousness and may lead to death."
              },
              {
                "code": "10002272",
                "display": "Anemia",
                "definition": "A disorder characterized by an reduction in the amount of hemoglobin in 100 ml of blood. Signs and symptoms of anemia may include pallor of the skin and mucous membranes, shortness of breath, palpitations of the heart, soft systolic murmurs, lethargy, and fatigability."
              },
              {
                "code": "10002544",
                "display": "Ankle fracture",
                "definition": "A finding of damage to the ankle joint characterized by a break in the continuity of the ankle bone. Symptoms include marked discomfort, swelling and difficulty moving the affected leg and foot."
              },
              {
                "code": "10002646",
                "display": "Anorexia",
                "definition": "A disorder characterized by a loss of appetite."
              },
              {
                "code": "10002652",
                "display": "Anorgasmia",
                "definition": "A disorder characterized by an inability to achieve orgasm."
              },
              {
                "code": "10002855",
                "display": "Anxiety",
                "definition": "A disorder characterized by apprehension of danger and dread accompanied by restlessness, tension, tachycardia, and dyspnea unattached to a clearly identifiable stimulus."
              },
              {
                "code": "10002899",
                "display": "Aortic injury",
                "definition": "A finding of damage to the aorta."
              },
              {
                "code": "10002953",
                "display": "Aphonia",
                "definition": "A disorder characterized by the inability to speak. It may result from injuries to the vocal cords or may be functional (psychogenic)."
              },
              {
                "code": "10002972",
                "display": "Apnea",
                "definition": "A disorder characterized by cessation of breathing."
              },
              {
                "code": "10003011",
                "display": "Appendicitis",
                "definition": "A disorder characterized by acute inflammation to the vermiform appendix caused by a pathogenic agent."
              },
              {
                "code": "10003012",
                "display": "Appendicitis perforated",
                "definition": "A disorder characterized by acute inflammation to the vermiform appendix caused by a pathogenic agent with gangrenous changes resulting in the rupture of the appendiceal wall. The appendiceal wall rupture causes the release of inflammatory and bacterial contents from the appendiceal lumen into the abdominal cavity."
              },
              {
                "code": "10003074",
                "display": "Arachnoiditis",
                "definition": "A disorder characterized by inflammation of the arachnoid membrane and adjacent subarachnoid space."
              },
              {
                "code": "10003162",
                "display": "Arterial injury",
                "definition": "A finding of damage to an artery."
              },
              {
                "code": "10003239",
                "display": "Arthralgia",
                "definition": "A disorder characterized by a sensation of marked discomfort in a joint."
              },
              {
                "code": "10003246",
                "display": "Arthritis",
                "definition": "A disorder characterized by inflammation involving a joint."
              },
              {
                "code": "10003445",
                "display": "Ascites",
                "definition": "A disorder characterized by accumulation of serous or hemorrhagic fluid in the peritoneal cavity."
              },
              {
                "code": "10003481",
                "display": "Aspartate aminotransferase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of aspartate aminotransferase (AST or SGOT) in a blood specimen."
              },
              {
                "code": "10003504",
                "display": "Aspiration",
                "definition": "A disorder characterized by inhalation of solids or liquids into the lungs."
              },
              {
                "code": "10003586",
                "display": "Asystole",
                "definition": "A disorder characterized by a dysrhythmia without cardiac electrical activity. Typically, this is accompanied by cessation of the pumping function of the heart."
              },
              {
                "code": "10003591",
                "display": "Ataxia",
                "definition": "A disorder characterized by lack of coordination of muscle movements resulting in the impairment or inability to perform voluntary activities."
              },
              {
                "code": "10003598",
                "display": "Atelectasis",
                "definition": "A disorder characterized by the collapse of part or the entire lung."
              },
              {
                "code": "10003658",
                "display": "Atrial fibrillation",
                "definition": "A disorder characterized by a dysrhythmia without discernible P waves and an irregular ventricular response due to multiple reentry circuits. The rhythm disturbance originates above the ventricles."
              },
              {
                "code": "10003662",
                "display": "Atrial flutter",
                "definition": "A disorder characterized by a dysrhythmia with organized rhythmic atrial contractions with a rate of 200-300 beats per minute. The rhythm disturbance originates in the atria."
              },
              {
                "code": "10003673",
                "display": "Atrioventricular block complete",
                "definition": "A disorder characterized by a dysrhythmia with complete failure of atrial electrical impulse conduction through the AV node to the ventricles."
              },
              {
                "code": "10003674",
                "display": "Atrioventricular block first degree",
                "definition": "A disorder characterized by a dysrhythmia with a delay in the time required for the conduction of an electrical impulse through the atrioventricular (AV) node beyond 0.2 seconds; prolongation of the PR interval greater than 200 milliseconds."
              },
              {
                "code": "10003883",
                "display": "Azoospermia",
                "definition": "A disorder characterized by laboratory test results that indicate complete absence of spermatozoa in the semen."
              },
              {
                "code": "10003988",
                "display": "Back pain",
                "definition": "A disorder characterized by marked discomfort sensation in the back region."
              },
              {
                "code": "10004665",
                "display": "Biliary fistula",
                "definition": "A disorder characterized by an abnormal communication between the bile ducts and another organ or anatomic site."
              },
              {
                "code": "10005047",
                "display": "Bladder infection",
                "definition": "A disorder characterized by an infectious process involving the bladder."
              },
              {
                "code": "10005265",
                "display": "Bloating",
                "definition": "A disorder characterized by subject-reported feeling of uncomfortable fullness of the abdomen."
              },
              {
                "code": "10005329",
                "display": "Blood and lymphatic system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10005332",
                "display": "Blood antidiuretic hormone abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of antidiuretic hormone in the blood specimen."
              },
              {
                "code": "10005364",
                "display": "Blood bilirubin increased",
                "definition": "A finding based on laboratory test results that indicate an abnormally high level of bilirubin in the blood. Excess bilirubin is associated with jaundice."
              },
              {
                "code": "10005452",
                "display": "Blood corticotrophin decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of corticotrophin in a blood specimen."
              },
              {
                "code": "10005561",
                "display": "Blood gonadotrophin abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of gonadotrophin hormone in a blood specimen."
              },
              {
                "code": "10005778",
                "display": "Blood prolactin abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of prolactin hormone in a blood specimen."
              },
              {
                "code": "10005886",
                "display": "Blurred vision",
                "definition": "A disorder characterized by visual perception of unclear or fuzzy images."
              },
              {
                "code": "10005901",
                "display": "Body odor",
                "definition": "A disorder characterized by an abnormal body smell resulting from the growth of bacteria on the body."
              },
              {
                "code": "10006002",
                "display": "Bone pain",
                "definition": "A disorder characterized by marked discomfort sensation in the bones."
              },
              {
                "code": "10006179",
                "display": "Breast atrophy",
                "definition": "A disorder characterized by underdevelopment of the breast."
              },
              {
                "code": "10006259",
                "display": "Breast infection",
                "definition": "A disorder characterized by an infectious process involving the breast."
              },
              {
                "code": "10006298",
                "display": "Breast pain",
                "definition": "A disorder characterized by marked discomfort sensation in the breast region."
              },
              {
                "code": "10006437",
                "display": "Bronchial fistula",
                "definition": "A disorder characterized by an abnormal communication between the bronchus and another organ or anatomic site."
              },
              {
                "code": "10006440",
                "display": "Bronchial obstruction",
                "definition": "A disorder characterized by blockage of a bronchus passage, most often by bronchial secretions and exudates."
              },
              {
                "code": "10006482",
                "display": "Bronchospasm",
                "definition": "A disorder characterized by a sudden contraction of the smooth muscles of the bronchial wall."
              },
              {
                "code": "10006504",
                "display": "Bruising",
                "definition": "A finding of injury of the soft tissues or bone characterized by leakage of blood into surrounding tissues."
              },
              {
                "code": "10006556",
                "display": "Bullous dermatitis",
                "definition": "A disorder characterized by inflammation of the skin characterized by the presence of bullae which are filled with fluid."
              },
              {
                "code": "10006634",
                "display": "Burn",
                "definition": "A finding of impaired integrity to the anatomic site of an adverse thermal reaction. Burns can be caused by exposure to chemicals, direct heat, electricity, flames and radiation. The extent of damage depends on the length and intensity of exposure and time until provision of treatment."
              },
              {
                "code": "10007196",
                "display": "Capillary leak syndrome",
                "definition": "A disorder characterized by leakage of intravascular fluids into the extravascular space. This syndrome is observed in patients who demonstrate a state of generalized leaky capillaries following shock syndromes, low-flow states, ischemia-reperfusion injuries, toxemias, medications, or poisoning. It can lead to generalized edema and multiple organ failure."
              },
              {
                "code": "10007515",
                "display": "Cardiac arrest",
                "definition": "A disorder characterized by cessation of the pumping function of the heart."
              },
              {
                "code": "10007541",
                "display": "Cardiac disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10007612",
                "display": "Cardiac troponin I increased",
                "definition": "A laboratory test result which indicates increased levels of cardiac troponin I in a biological specimen."
              },
              {
                "code": "10007613",
                "display": "Cardiac troponin T increased",
                "definition": "A laboratory test result which indicates increased levels of cardiac troponin T in a biological specimen."
              },
              {
                "code": "10007739",
                "display": "Cataract",
                "definition": "A disorder characterized by partial or complete opacity of the crystalline lens of one or both eyes. This results in a decrease in visual acuity and eventual blindness if untreated."
              },
              {
                "code": "10007810",
                "display": "Catheter related infection",
                "definition": "A disorder characterized by an infectious process that arises secondary to catheter use."
              },
              {
                "code": "10007839",
                "display": "CD4 lymphocytes decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of CD4 lymphocytes in a blood specimen."
              },
              {
                "code": "10008164",
                "display": "Cerebrospinal fluid leakage",
                "definition": "A disorder characterized by loss of cerebrospinal fluid into the surrounding tissues."
              },
              {
                "code": "10008330",
                "display": "Cervicitis infection",
                "definition": "A disorder characterized by an infectious process involving the uterine cervix."
              },
              {
                "code": "10008417",
                "display": "Cheilitis",
                "definition": "A disorder characterized by inflammation of the lip."
              },
              {
                "code": "10008481",
                "display": "Chest pain - cardiac",
                "definition": "A disorder characterized by substernal discomfort due to insufficient myocardial oxygenation."
              },
              {
                "code": "10008496",
                "display": "Chest wall pain",
                "definition": "A disorder characterized by marked discomfort sensation in the chest wall region."
              },
              {
                "code": "10008531",
                "display": "Chills",
                "definition": "A disorder characterized by a sensation of cold that often marks a physiologic response to sweating after a fever."
              },
              {
                "code": "10008612",
                "display": "Cholecystitis",
                "definition": "A disorder characterized by inflammation involving the gallbladder. It may be associated with the presence of gallstones."
              },
              {
                "code": "10008661",
                "display": "Cholesterol high",
                "definition": "A finding based on laboratory test results that indicate higher than normal levels of cholesterol in a blood specimen."
              },
              {
                "code": "10009845",
                "display": "Cognitive disturbance",
                "definition": "A disorder characterized by a conspicuous change in cognitive function."
              },
              {
                "code": "10009887",
                "display": "Colitis",
                "definition": "A disorder characterized by inflammation of the colon."
              },
              {
                "code": "10009995",
                "display": "Colonic fistula",
                "definition": "A disorder characterized by an abnormal communication between the large intestine and another organ or anatomic site."
              },
              {
                "code": "10009998",
                "display": "Colonic hemorrhage",
                "definition": "A disorder characterized by bleeding from the colon."
              },
              {
                "code": "10010000",
                "display": "Colonic obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the colon."
              },
              {
                "code": "10010001",
                "display": "Colonic perforation",
                "definition": "A disorder characterized by a rupture in the colonic wall."
              },
              {
                "code": "10010004",
                "display": "Colonic stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the colon."
              },
              {
                "code": "10010006",
                "display": "Colonic ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the colon."
              },
              {
                "code": "10010250",
                "display": "Concentration impairment",
                "definition": "A disorder characterized by a deterioration in the ability to concentrate."
              },
              {
                "code": "10010276",
                "display": "Conduction disorder",
                "definition": "A disorder characterized by pathological irregularities in the cardiac conduction system."
              },
              {
                "code": "10010300",
                "display": "Confusion",
                "definition": "A disorder characterized by a lack of clear and orderly thought and behavior."
              },
              {
                "code": "10010331",
                "display": "Congenital, familial and genetic disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10010741",
                "display": "Conjunctivitis",
                "definition": "A disorder characterized by inflammation, swelling and redness to the conjunctiva of the eye."
              },
              {
                "code": "10010742",
                "display": "Conjunctivitis infective",
                "definition": "A disorder characterized by an infectious process involving the conjunctiva. Clinical manifestations include pink or red color in the eyes."
              },
              {
                "code": "10010774",
                "display": "Constipation",
                "definition": "A disorder characterized by irregular and infrequent or difficult evacuation of the bowels."
              },
              {
                "code": "10010783",
                "display": "Constrictive pericarditis",
                "definition": "A disorder characterized by a thickened and fibrotic pericardial sac; these fibrotic changes impede normal myocardial function by restricting myocardial muscle action."
              },
              {
                "code": "10011224",
                "display": "Cough",
                "definition": "A disorder characterized by sudden, often repetitive, spasmodic contraction of the thoracic cavity, resulting in violent release of air from the lungs and usually accompanied by a distinctive sound."
              },
              {
                "code": "10011268",
                "display": "CPK increased",
                "definition": "A finding based on laboratory test results that indicate an increase in levels of creatine phosphokinase in a blood specimen."
              },
              {
                "code": "10011368",
                "display": "Creatinine increased",
                "definition": "A finding based on laboratory test results that indicate increased levels of creatinine in a biological specimen."
              },
              {
                "code": "10011655",
                "display": "Cushingoid",
                "definition": "A disorder characterized by signs and symptoms that resemble Cushing's disease or syndrome: buffalo hump obesity, striations, adiposity, hypertension, diabetes, and osteoporosis, usually due to exogenous corticosteroids."
              },
              {
                "code": "10011912",
                "display": "Death neonatal",
                "definition": "A disorder characterized by cessation of life occurring during the first 28 days of life."
              },
              {
                "code": "10011914",
                "display": "Death NOS",
                "definition": "A cessation of life that cannot be attributed to a CTCAE term associated with Grade 5."
              },
              {
                "code": "10012174",
                "display": "Dehydration",
                "definition": "A disorder characterized by excessive loss of water from the body. It is usually caused by severe diarrhea, vomiting or diaphoresis."
              },
              {
                "code": "10012205",
                "display": "Delayed puberty",
                "definition": "A disorder characterized by unusually late sexual maturity."
              },
              {
                "code": "10012218",
                "display": "Delirium",
                "definition": "A disorder characterized by the acute and sudden development of confusion, illusions, movement changes, inattentiveness, agitation, and hallucinations. Usually, it is a reversible condition."
              },
              {
                "code": "10012260",
                "display": "Delusions",
                "definition": "A disorder characterized by false personal beliefs held contrary to reality, despite contradictory evidence and common sense."
              },
              {
                "code": "10012318",
                "display": "Dental caries",
                "definition": "A disorder characterized by the decay of a tooth, in which it becomes softened, discolored and/or porous."
              },
              {
                "code": "10012373",
                "display": "Depressed level of consciousness",
                "definition": "A disorder characterized by a decrease in ability to perceive and respond."
              },
              {
                "code": "10012378",
                "display": "Depression",
                "definition": "A disorder characterized by melancholic feelings of grief or unhappiness."
              },
              {
                "code": "10012727",
                "display": "Diarrhea",
                "definition": "A disorder characterized by frequent and watery bowel movements."
              },
              {
                "code": "10013442",
                "display": "Disseminated intravascular coagulation",
                "definition": "A disorder characterized by systemic pathological activation of blood clotting mechanisms which results in clot formation throughout the body. There is an increase in the risk of hemorrhage as the body is depleted of platelets and coagulation factors."
              },
              {
                "code": "10013573",
                "display": "Dizziness",
                "definition": "A disorder characterized by a disturbing sensation of lightheadedness, unsteadiness, giddiness, spinning or rocking."
              },
              {
                "code": "10013774",
                "display": "Dry eye",
                "definition": "A disorder characterized by dryness of the cornea and conjunctiva."
              },
              {
                "code": "10013781",
                "display": "Dry mouth",
                "definition": "A disorder characterized by reduced salivary flow in the oral cavity."
              },
              {
                "code": "10013786",
                "display": "Dry skin",
                "definition": "A disorder characterized by flaky and dull skin; the pores are generally fine, the texture is a papery thin texture."
              },
              {
                "code": "10013828",
                "display": "Duodenal fistula",
                "definition": "A disorder characterized by an abnormal communication between the duodenum and another organ or anatomic site."
              },
              {
                "code": "10013830",
                "display": "Duodenal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of stomach contents through the duodenum."
              },
              {
                "code": "10013832",
                "display": "Duodenal perforation",
                "definition": "A disorder characterized by a rupture in the duodenal wall."
              },
              {
                "code": "10013836",
                "display": "Duodenal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the duodenal wall."
              },
              {
                "code": "10013887",
                "display": "Dysarthria",
                "definition": "A disorder characterized by slow and slurred speech resulting from an inability to coordinate the muscles used in speech."
              },
              {
                "code": "10013911",
                "display": "Dysgeusia",
                "definition": "A disorder characterized by abnormal sensual experience with the taste of foodstuffs; it can be related to a decrease in the sense of smell."
              },
              {
                "code": "10013934",
                "display": "Dysmenorrhea",
                "definition": "A disorder characterized by abnormally painful abdominal cramps during menses."
              },
              {
                "code": "10013941",
                "display": "Dyspareunia",
                "definition": "A disorder characterized by painful or difficult coitus."
              },
              {
                "code": "10013946",
                "display": "Dyspepsia",
                "definition": "A disorder characterized by an uncomfortable, often painful feeling in the stomach, resulting from impaired digestion. Symptoms include burning stomach, bloating, heartburn, nausea and vomiting."
              },
              {
                "code": "10013950",
                "display": "Dysphagia",
                "definition": "A disorder characterized by difficulty in swallowing."
              },
              {
                "code": "10013951",
                "display": "Dysphasia",
                "definition": "A disorder characterized by impairment of verbal communication skills, often resulting from brain damage."
              },
              {
                "code": "10013963",
                "display": "Dyspnea",
                "definition": "A disorder characterized by an uncomfortable sensation of difficulty breathing."
              },
              {
                "code": "10013993",
                "display": "Ear and labyrinth disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10014020",
                "display": "Ear pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the ear."
              },
              {
                "code": "10014217",
                "display": "Edema cerebral",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the brain."
              },
              {
                "code": "10014222",
                "display": "Edema face",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in facial tissues."
              },
              {
                "code": "10014326",
                "display": "Ejaculation disorder",
                "definition": "A disorder characterized by problems related to ejaculation. This category includes premature, delayed, retrograde and painful ejaculation."
              },
              {
                "code": "10014383",
                "display": "Electrocardiogram QT corrected interval prolonged",
                "definition": "A finding of a cardiac dysrhythmia characterized by an abnormally long corrected QT interval."
              },
              {
                "code": "10014594",
                "display": "Encephalitis infection",
                "definition": "A disorder characterized by an infectious process involving the brain tissue."
              },
              {
                "code": "10014621",
                "display": "Encephalomyelitis infection",
                "definition": "A disorder characterized by an infectious process involving the brain and spinal cord tissues."
              },
              {
                "code": "10014625",
                "display": "Encephalopathy",
                "definition": "A disorder characterized by a pathologic process involving the brain."
              },
              {
                "code": "10014678",
                "display": "Endocarditis infective",
                "definition": "A disorder characterized by an infectious process involving the endocardial layer of the heart."
              },
              {
                "code": "10014698",
                "display": "Endocrine disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10014801",
                "display": "Endophthalmitis",
                "definition": "A disorder characterized by an infectious process involving the internal structures of the eye."
              },
              {
                "code": "10014893",
                "display": "Enterocolitis",
                "definition": "A disorder characterized by inflammation of the small and large intestines."
              },
              {
                "code": "10015090",
                "display": "Epistaxis",
                "definition": "A disorder characterized by bleeding from the nose."
              },
              {
                "code": "10015218",
                "display": "Erythema multiforme",
                "definition": "A disorder characterized by target lesions (a pink-red ring around a pale center)."
              },
              {
                "code": "10015277",
                "display": "Erythroderma",
                "definition": "A disorder characterized by generalized inflammatory erythema and exfoliation. The inflammatory process involves > 90% of the body surface area."
              },
              {
                "code": "10015384",
                "display": "Esophageal hemorrhage",
                "definition": "A disorder characterized by bleeding from the esophagus."
              },
              {
                "code": "10015387",
                "display": "Esophageal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the esophagus."
              },
              {
                "code": "10015388",
                "display": "Esophageal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the esophageal region."
              },
              {
                "code": "10015448",
                "display": "Esophageal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the esophagus."
              },
              {
                "code": "10015451",
                "display": "Esophageal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the esophageal wall."
              },
              {
                "code": "10015453",
                "display": "Esophageal varices hemorrhage",
                "definition": "A disorder characterized by bleeding from esophageal varices."
              },
              {
                "code": "10015461",
                "display": "Esophagitis",
                "definition": "A disorder characterized by inflammation of the esophageal wall."
              },
              {
                "code": "10015533",
                "display": "Euphoria",
                "definition": "A disorder characterized by an exaggerated feeling of well-being which is disproportionate to events and stimuli."
              },
              {
                "code": "10015688",
                "display": "Exostosis",
                "definition": "A disorder characterized by non-neoplastic overgrowth of bone."
              },
              {
                "code": "10015829",
                "display": "Extraocular muscle paresis",
                "definition": "A disorder characterized by incomplete paralysis of an extraocular muscle."
              },
              {
                "code": "10015832",
                "display": "Extrapyramidal disorder",
                "definition": "A disorder characterized by abnormal, repetitive, involuntary muscle movements, frenzied speech and extreme restlessness."
              },
              {
                "code": "10015919",
                "display": "Eye disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10015929",
                "display": "Eye infection",
                "definition": "A disorder characterized by an infectious process involving the eye."
              },
              {
                "code": "10015958",
                "display": "Eye pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the eye."
              },
              {
                "code": "10016059",
                "display": "Facial pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the face."
              },
              {
                "code": "10016173",
                "display": "Fall",
                "definition": "A finding of sudden movement downward, usually resulting in injury."
              },
              {
                "code": "10016241",
                "display": "Fat atrophy",
                "definition": "A disorder characterized by shrinking of adipose tissue."
              },
              {
                "code": "10016256",
                "display": "Fatigue",
                "definition": "A disorder characterized by a state of generalized weakness with a pronounced inability to summon sufficient energy to accomplish daily activities."
              },
              {
                "code": "10016288",
                "display": "Febrile neutropenia",
                "definition": "A disorder characterized by a decrease in neutrophils associated with fever."
              },
              {
                "code": "10016296",
                "display": "Fecal incontinence",
                "definition": "A disorder characterized by inability to control the escape of stool from the rectum."
              },
              {
                "code": "10016479",
                "display": "Fetal death",
                "definition": "A disorder characterized by death in utero; failure of the product of conception to show evidence of respiration, heartbeat, or definite movement of a voluntary muscle after expulsion from the uterus, without possibility of resuscitation."
              },
              {
                "code": "10016558",
                "display": "Fever",
                "definition": "A disorder characterized by elevation of the body's temperature above the upper limit of normal."
              },
              {
                "code": "10016596",
                "display": "Fibrinogen decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of fibrinogen in a blood specimen."
              },
              {
                "code": "10016750",
                "display": "Flank pain",
                "definition": "A disorder characterized by marked discomfort sensation on the lateral side of the body in the region below the ribs and above the hip."
              },
              {
                "code": "10016757",
                "display": "Flashing lights",
                "definition": "A disorder characterized by a sudden or brief burst of light."
              },
              {
                "code": "10016766",
                "display": "Flatulence",
                "definition": "A disorder characterized by a state of excessive gas in the alimentary canal."
              },
              {
                "code": "10016778",
                "display": "Floaters",
                "definition": "A disorder characterized by an individual seeing spots before their eyes. The spots are shadows of opaque cell fragments in the vitreous humor or lens."
              },
              {
                "code": "10016791",
                "display": "Flu like symptoms",
                "definition": "A disorder characterized by a group of symptoms similar to those observed in patients with the flu. It includes fever, chills, body aches, malaise, loss of appetite and dry cough."
              },
              {
                "code": "10016825",
                "display": "Flushing",
                "definition": "A disorder characterized by episodic reddening of the face."
              },
              {
                "code": "10016987",
                "display": "Forced expiratory volume decreased",
                "definition": "A finding based on test results that indicate a relative decrease in the fraction of the forced vital capacity that is exhaled in a specific number of seconds."
              },
              {
                "code": "10017076",
                "display": "Fracture",
                "definition": "A finding of traumatic injury to the bone in which the continuity of the bone is broken."
              },
              {
                "code": "10017577",
                "display": "Gait disturbance",
                "definition": "A disorder characterized by walking difficulties."
              },
              {
                "code": "10017631",
                "display": "Gallbladder fistula",
                "definition": "A disorder characterized by an abnormal communication between the gallbladder and another organ or anatomic site."
              },
              {
                "code": "10017636",
                "display": "Gallbladder obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents of the gallbladder."
              },
              {
                "code": "10017638",
                "display": "Gallbladder pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gallbladder region."
              },
              {
                "code": "10017639",
                "display": "Gallbladder perforation",
                "definition": "A disorder characterized by a rupture in the gallbladder wall."
              },
              {
                "code": "10017789",
                "display": "Gastric hemorrhage",
                "definition": "A disorder characterized by bleeding from the gastric wall."
              },
              {
                "code": "10017815",
                "display": "Gastric perforation",
                "definition": "A disorder characterized by a rupture in the stomach wall."
              },
              {
                "code": "10017822",
                "display": "Gastric ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the stomach."
              },
              {
                "code": "10017853",
                "display": "Gastritis",
                "definition": "A disorder characterized by inflammation of the stomach."
              },
              {
                "code": "10017877",
                "display": "Gastrointestinal fistula",
                "definition": "A disorder characterized by an abnormal communication between any part of the gastrointestinal system and another organ or anatomic site."
              },
              {
                "code": "10017947",
                "display": "Gastrointestinal disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10017999",
                "display": "Gastrointestinal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gastrointestinal region."
              },
              {
                "code": "10018043",
                "display": "Gastroparesis",
                "definition": "A disorder characterized by an incomplete paralysis of the muscles of the stomach wall resulting in delayed emptying of the gastric contents into the small intestine."
              },
              {
                "code": "10018065",
                "display": "General disorders and administration site conditions - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10018146",
                "display": "Genital edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the genitals."
              },
              {
                "code": "10018286",
                "display": "Gingival pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the gingival region."
              },
              {
                "code": "10018304",
                "display": "Glaucoma",
                "definition": "A disorder characterized by an increase in pressure in the eyeball due to obstruction of the aqueous humor outflow."
              },
              {
                "code": "10018746",
                "display": "Growth accelerated",
                "definition": "A disorder characterized by greater growth than expected for age."
              },
              {
                "code": "10018748",
                "display": "Growth hormone abnormal",
                "definition": "A finding based on laboratory test results that indicate abnormal levels of growth hormone in a biological specimen."
              },
              {
                "code": "10018761",
                "display": "Growth suppression",
                "definition": "A disorder characterized by of stature that is smaller than normal as expected for age."
              },
              {
                "code": "10018784",
                "display": "Gum infection",
                "definition": "A disorder characterized by an infectious process involving the gums."
              },
              {
                "code": "10018801",
                "display": "Gynecomastia",
                "definition": "A disorder characterized by excessive development of the breasts in males."
              },
              {
                "code": "10019077",
                "display": "Hallucinations",
                "definition": "A disorder characterized by a false sensory perception in the absence of an external stimulus."
              },
              {
                "code": "10019150",
                "display": "Haptoglobin decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of haptoglobin in a blood specimen."
              },
              {
                "code": "10019211",
                "display": "Headache",
                "definition": "A disorder characterized by a sensation of marked discomfort in various parts of the head, not confined to the area of distribution of any nerve."
              },
              {
                "code": "10019245",
                "display": "Hearing impaired",
                "definition": "A disorder characterized by partial or complete loss of the ability to detect or understand sounds resulting from damage to ear structures."
              },
              {
                "code": "10019279",
                "display": "Heart failure",
                "definition": "A disorder characterized by the inability of the heart to pump blood at an adequate volume to meet tissue metabolic requirements, or, the ability to do so only at an elevation in the filling pressure."
              },
              {
                "code": "10019428",
                "display": "Hematoma",
                "definition": "A disorder characterized by a localized collection of blood, usually clotted, in an organ, space, or tissue, due to a break in the wall of a blood vessel."
              },
              {
                "code": "10019450",
                "display": "Hematuria",
                "definition": "A disorder characterized by laboratory test results that indicate blood in the urine."
              },
              {
                "code": "10019489",
                "display": "Hemoglobinuria",
                "definition": "A disorder characterized by laboratory test results that indicate the presence of free hemoglobin in the urine."
              },
              {
                "code": "10019491",
                "display": "Hemolysis",
                "definition": "A disorder characterized by laboratory test results that indicate widespread erythrocyte cell membrane destruction."
              },
              {
                "code": "10019515",
                "display": "Hemolytic uremic syndrome",
                "definition": "A disorder characterized by a form of thrombotic microangiopathy with renal failure, hemolytic anemia, and severe thrombocytopenia."
              },
              {
                "code": "10019611",
                "display": "Hemorrhoids",
                "definition": "A disorder characterized by the presence of dilated veins in the rectum and surrounding area."
              },
              {
                "code": "10019663",
                "display": "Hepatic failure",
                "definition": "A disorder characterized by the inability of the liver to metabolize chemicals in the body. Laboratory test results reveal abnormal plasma levels of ammonia, bilirubin, lactic dehydrogenase, and alkaline phosphatase."
              },
              {
                "code": "10019678",
                "display": "Hepatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the liver."
              },
              {
                "code": "10019692",
                "display": "Hepatic necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the hepatic parenchyma."
              },
              {
                "code": "10019705",
                "display": "Hepatic pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the liver region."
              },
              {
                "code": "10019799",
                "display": "Hepatitis viral",
                "definition": "A disorder characterized by a viral pathologic process involving the liver parenchyma."
              },
              {
                "code": "10019805",
                "display": "Hepatobiliary disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10020039",
                "display": "Hiccups",
                "definition": "A disorder characterized by repeated gulp sounds that result from an involuntary opening and closing of the glottis. This is attributed to a spasm of the diaphragm."
              },
              {
                "code": "10020100",
                "display": "Hip fracture",
                "definition": "A finding of traumatic injury to the hip in which the continuity of either the femoral head, femoral neck, intertrochanteric or subtrochanteric regions is broken."
              },
              {
                "code": "10020112",
                "display": "Hirsutism",
                "definition": "A disorder characterized by the presence of excess hair growth in women in anatomic sites where growth is considered to be a secondary male characteristic and under androgen control (beard, moustache, chest, abdomen)"
              },
              {
                "code": "10020201",
                "display": "Hoarseness",
                "definition": "A disorder characterized by harsh and raspy voice arising from or spreading to the larynx."
              },
              {
                "code": "10020407",
                "display": "Hot flashes",
                "definition": "A disorder characterized by an uncomfortable and temporary sensation of intense body warmth, flushing, sometimes accompanied by sweating upon cooling."
              },
              {
                "code": "10020508",
                "display": "Hydrocephalus",
                "definition": "A disorder characterized by an abnormal increase of cerebrospinal fluid in the ventricles of the brain."
              },
              {
                "code": "10020587",
                "display": "Hypercalcemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of calcium in blood."
              },
              {
                "code": "10020639",
                "display": "Hyperglycemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of blood sugar. It is usually an indication of diabetes mellitus or glucose intolerance."
              },
              {
                "code": "10020642",
                "display": "Hyperhidrosis",
                "definition": "A disorder characterized by excessive perspiration."
              },
              {
                "code": "10020647",
                "display": "Hyperkalemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of potassium in the blood; associated with kidney failure or sometimes with the use of diuretic drugs."
              },
              {
                "code": "10020670",
                "display": "Hypermagnesemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of magnesium in the blood."
              },
              {
                "code": "10020680",
                "display": "Hypernatremia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of sodium in the blood."
              },
              {
                "code": "10020705",
                "display": "Hyperparathyroidism",
                "definition": "A disorder characterized by an increase in production of parathyroid hormone by the parathyroid glands. This results in hypercalcemia (abnormally high levels of calcium in the blood)."
              },
              {
                "code": "10020765",
                "display": "Hypersomnia",
                "definition": "A disorder characterized by characterized by excessive sleepiness during the daytime."
              },
              {
                "code": "10020772",
                "display": "Hypertension",
                "definition": "A disorder characterized by a pathological increase in blood pressure; a repeatedly elevation in the blood pressure exceeding 140 over 90 mm Hg."
              },
              {
                "code": "10020850",
                "display": "Hyperthyroidism",
                "definition": "A disorder characterized by excessive levels of thyroid hormone in the body. Common causes include an overactive thyroid gland or thyroid hormone overdose."
              },
              {
                "code": "10020864",
                "display": "Hypertrichosis",
                "definition": "A disorder characterized by hair density or length beyond the accepted limits of normal in a particular body region, for a particular age or race."
              },
              {
                "code": "10020870",
                "display": "Hypertriglyceridemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of triglyceride concentration in the blood."
              },
              {
                "code": "10020907",
                "display": "Hyperuricemia",
                "definition": "A disorder characterized by laboratory test results that indicate an elevation in the concentration of uric acid."
              },
              {
                "code": "10020943",
                "display": "Hypoalbuminemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of albumin in the blood."
              },
              {
                "code": "10020949",
                "display": "Hypocalcemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of calcium in the blood."
              },
              {
                "code": "10021005",
                "display": "Hypoglycemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of glucose in the blood."
              },
              {
                "code": "10021013",
                "display": "Hypohidrosis",
                "definition": "A disorder characterized by reduced sweating."
              },
              {
                "code": "10021018",
                "display": "Hypokalemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of potassium in the blood."
              },
              {
                "code": "10021028",
                "display": "Hypomagnesemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of magnesium in the blood."
              },
              {
                "code": "10021038",
                "display": "Hyponatremia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of sodium in the blood."
              },
              {
                "code": "10021041",
                "display": "Hypoparathyroidism",
                "definition": "A disorder characterized by a decrease in production of parathyroid hormone by the parathyroid glands."
              },
              {
                "code": "10021059",
                "display": "Hypophosphatemia",
                "definition": "A disorder characterized by laboratory test results that indicate a low concentration of phosphates in the blood."
              },
              {
                "code": "10021097",
                "display": "Hypotension",
                "definition": "A disorder characterized by a blood pressure that is below the normal expected for an individual in a given environment."
              },
              {
                "code": "10021113",
                "display": "Hypothermia",
                "definition": "A disorder characterized by an abnormally low body temperature. Treatment is required when the body temperature is 35C (95F) or below."
              },
              {
                "code": "10021114",
                "display": "Hypothyroidism",
                "definition": "A disorder characterized by a decrease in production of thyroid hormone by the thyroid gland."
              },
              {
                "code": "10021143",
                "display": "Hypoxia",
                "definition": "A disorder characterized by a decrease in the level of oxygen in the body."
              },
              {
                "code": "10021305",
                "display": "Ileal perforation",
                "definition": "A disorder characterized by a rupture in the ileal wall."
              },
              {
                "code": "10021307",
                "display": "Ileal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the ileum."
              },
              {
                "code": "10021309",
                "display": "Ileal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the ileum."
              },
              {
                "code": "10021328",
                "display": "Ileus",
                "definition": "A disorder characterized by failure of the ileum to transport intestinal contents."
              },
              {
                "code": "10021428",
                "display": "Immune system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10021881",
                "display": "Infections and infestations - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10021918",
                "display": "Infective myositis",
                "definition": "A disorder characterized by an infectious process involving the skeletal muscles."
              },
              {
                "code": "10022095",
                "display": "Injection site reaction",
                "definition": "A disorder characterized by an intense adverse reaction (usually immunologic) developing at the site of an injection."
              },
              {
                "code": "10022117",
                "display": "Injury, poisoning and procedural complications - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10022161",
                "display": "Injury to carotid artery",
                "definition": "A finding of damage to the carotid artery."
              },
              {
                "code": "10022213",
                "display": "Injury to inferior vena cava",
                "definition": "A finding of damage to the inferior vena cava."
              },
              {
                "code": "10022356",
                "display": "Injury to superior vena cava",
                "definition": "A finding of damage to the superior vena cava."
              },
              {
                "code": "10022402",
                "display": "INR increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the ratio of the patient's prothrombin time to a control sample in the blood."
              },
              {
                "code": "10022437",
                "display": "Insomnia",
                "definition": "A disorder characterized by difficulty in falling asleep and/or remaining asleep."
              },
              {
                "code": "10022763",
                "display": "Intracranial hemorrhage",
                "definition": "A disorder characterized by bleeding from the cranium."
              },
              {
                "code": "10022891",
                "display": "Investigations - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10022992",
                "display": "Irregular menstruation",
                "definition": "A disorder characterized by irregular cycle or duration of menses."
              },
              {
                "code": "10022998",
                "display": "Irritability",
                "definition": "A disorder characterized by an abnormal responsiveness to stimuli or physiological arousal; may be in response to pain, fright, a drug, an emotional situation or a medical condition."
              },
              {
                "code": "10023030",
                "display": "Ischemia cerebrovascular",
                "definition": "A disorder characterized by a decrease or absence of blood supply to the brain caused by obstruction (thrombosis or embolism) of an artery resulting in neurological damage."
              },
              {
                "code": "10023174",
                "display": "Jejunal perforation",
                "definition": "A disorder characterized by a rupture in the jejunal wall."
              },
              {
                "code": "10023176",
                "display": "Jejunal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the jejunum."
              },
              {
                "code": "10023177",
                "display": "Jejunal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the jejunum."
              },
              {
                "code": "10023215",
                "display": "Joint effusion",
                "definition": "A disorder characterized by excessive fluid in a joint, usually as a result of joint inflammation."
              },
              {
                "code": "10023216",
                "display": "Joint infection",
                "definition": "A disorder characterized by an infectious process involving a joint."
              },
              {
                "code": "10023332",
                "display": "Keratitis",
                "definition": "A disorder characterized by inflammation to the cornea of the eye."
              },
              {
                "code": "10023424",
                "display": "Kidney infection",
                "definition": "A disorder characterized by an infectious process involving the kidney."
              },
              {
                "code": "10023509",
                "display": "Kyphosis",
                "definition": "A disorder characterized by an abnormal increase in the curvature of the thoracic portion of the spine."
              },
              {
                "code": "10023838",
                "display": "Laryngeal edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid in the larynx."
              },
              {
                "code": "10023862",
                "display": "Laryngeal stenosis",
                "definition": "A disorder characterized by a narrowing of the laryngeal airway."
              },
              {
                "code": "10023874",
                "display": "Laryngitis",
                "definition": "A disorder characterized by an inflammatory process involving the larynx."
              },
              {
                "code": "10023891",
                "display": "Laryngospasm",
                "definition": "A disorder characterized by paroxysmal spasmodic muscular contraction of the vocal cords."
              },
              {
                "code": "10024264",
                "display": "Lethargy",
                "definition": "A disorder characterized by a decrease in consciousness characterized by mental and physical inertness."
              },
              {
                "code": "10024378",
                "display": "Leukocytosis",
                "definition": "A disorder characterized by laboratory test results that indicate an increased number of white blood cells in the blood."
              },
              {
                "code": "10024382",
                "display": "Leukoencephalopathy",
                "definition": "A disorder characterized by diffuse reactive astrocytosis with multiple areas of necrotic foci without inflammation."
              },
              {
                "code": "10024419",
                "display": "Libido decreased",
                "definition": "A disorder characterized by a decrease in sexual desire."
              },
              {
                "code": "10024421",
                "display": "Libido increased",
                "definition": "A disorder characterized by an increase in sexual desire."
              },
              {
                "code": "10024561",
                "display": "Lip pain",
                "definition": "A disorder characterized by a sensation of marked discomfort of the lip."
              },
              {
                "code": "10024574",
                "display": "Lipase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the level of lipase in a biological specimen."
              },
              {
                "code": "10024842",
                "display": "Lordosis",
                "definition": "A disorder characterized by an abnormal increase in the curvature of the lumbar portion of the spine."
              },
              {
                "code": "10025182",
                "display": "Lymph node pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in a lymph node."
              },
              {
                "code": "10025233",
                "display": "Lymphedema",
                "definition": "A disorder characterized by excessive fluid collection in tissues that causes swelling."
              },
              {
                "code": "10025256",
                "display": "Lymphocyte count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of lymphocytes in a blood specimen."
              },
              {
                "code": "10025258",
                "display": "Lymphocyte count increased",
                "definition": "A finding based on laboratory test results that indicate an abnormal increase in the number of lymphocytes in the blood, effusions or bone marrow."
              },
              {
                "code": "10025476",
                "display": "Malabsorption",
                "definition": "A disorder characterized by inadequate absorption of nutrients in the small intestine. Symptoms include abdominal marked discomfort, bloating and diarrhea."
              },
              {
                "code": "10025482",
                "display": "Malaise",
                "definition": "A disorder characterized by a feeling of general discomfort or uneasiness, an out-of-sorts feeling."
              },
              {
                "code": "10026749",
                "display": "Mania",
                "definition": "A disorder characterized by excitement of psychotic proportions manifested by mental and physical hyperactivity, disorganization of behavior and elevation of mood."
              },
              {
                "code": "10027175",
                "display": "Memory impairment",
                "definition": "A disorder characterized by a deterioration in memory function."
              },
              {
                "code": "10027198",
                "display": "Meningismus",
                "definition": "A disorder characterized by neck stiffness, headache, and photophobia resulting from irritation of the cerebral meninges."
              },
              {
                "code": "10027199",
                "display": "Meningitis",
                "definition": "A disorder characterized by acute inflammation of the meninges of the brain and/or spinal cord."
              },
              {
                "code": "10027308",
                "display": "Menopause",
                "definition": "A disorder characterized by the permanent cessation of menses, usually defined by 12 consecutive months of amenorrhea in a woman over 45 years of age."
              },
              {
                "code": "10027313",
                "display": "Menorrhagia",
                "definition": "A disorder characterized by abnormally heavy vaginal bleeding during menses."
              },
              {
                "code": "10027433",
                "display": "Metabolism and nutrition disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10027786",
                "display": "Mobitz (type) II atrioventricular block",
                "definition": "A disorder characterized by a dysrhythmia with relatively constant PR interval prior to the block of an atrial impulse. This is the result of intermittent failure of atrial electrical impulse conduction through the atrioventricular (AV) node to the ventricles."
              },
              {
                "code": "10027787",
                "display": "Mobitz type I",
                "definition": "A disorder characterized by a dysrhythmia with a progressively lengthening PR interval prior to the blocking of an atrial impulse. This is the result of intermittent failure of atrial electrical impulse conduction through the atrioventricular (AV) node to the ventricles."
              },
              {
                "code": "10028041",
                "display": "Movements involuntary",
                "definition": "A disorder characterized by uncontrolled and purposeless movements."
              },
              {
                "code": "10028130",
                "display": "Mucositis oral",
                "definition": "A disorder characterized by inflammation of the oral mucosal."
              },
              {
                "code": "10028154",
                "display": "Multi-organ failure",
                "definition": "A disorder characterized by progressive deterioration of the lungs, liver, kidney and clotting mechanisms."
              },
              {
                "code": "10028395",
                "display": "Musculoskeletal and connective tissue disorder - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10028411",
                "display": "Myalgia",
                "definition": "A disorder characterized by marked discomfort sensation originating from a muscle or group of muscles."
              },
              {
                "code": "10028524",
                "display": "Myelitis",
                "definition": "A disorder characterized by inflammation involving the spinal cord. Symptoms include weakness, paresthesia, sensory loss, marked discomfort and incontinence."
              },
              {
                "code": "10028533",
                "display": "Myelodysplastic syndrome",
                "definition": "A disorder characterized by insufficiently healthy hematapoietic cell production by the bone marrow."
              },
              {
                "code": "10028596",
                "display": "Myocardial infarction",
                "definition": "A disorder characterized by gross necrosis of the myocardium; this is due to an interruption of blood supply to the area."
              },
              {
                "code": "10028606",
                "display": "Myocarditis",
                "definition": "A disorder characterized by inflammation of the muscle tissue of the heart."
              },
              {
                "code": "10028653",
                "display": "Myositis",
                "definition": "A disorder characterized by inflammation involving the skeletal muscles."
              },
              {
                "code": "10028691",
                "display": "Nail discoloration",
                "definition": "A disorder characterized by a change in the color of the nail plate."
              },
              {
                "code": "10028735",
                "display": "Nasal congestion",
                "definition": "A disorder characterized by obstruction of the nasal passage due to mucosal edema."
              },
              {
                "code": "10028813",
                "display": "Nausea",
                "definition": "A disorder characterized by a queasy sensation and/or the urge to vomit."
              },
              {
                "code": "10028836",
                "display": "Neck pain",
                "definition": "A disorder characterized by marked discomfort sensation in the neck area."
              },
              {
                "code": "10029104",
                "display": "Neoplasms benign, malignant and unspecified (incl cysts and polyps) - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10029205",
                "display": "Nervous system disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10029223",
                "display": "Neuralgia",
                "definition": "A disorder characterized by intense painful sensation along a nerve or group of nerves."
              },
              {
                "code": "10029366",
                "display": "Neutrophil count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of neutrophils in a blood specimen."
              },
              {
                "code": "10029404",
                "display": "Night blindness",
                "definition": "A disorder characterized by an inability to see clearly in dim light."
              },
              {
                "code": "10029864",
                "display": "Nystagmus",
                "definition": "A disorder characterized by involuntary movements of the eyeballs."
              },
              {
                "code": "10029883",
                "display": "Obesity",
                "definition": "A disorder characterized by having a high amount of body fat."
              },
              {
                "code": "10029957",
                "display": "Obstruction gastric",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the stomach."
              },
              {
                "code": "10030300",
                "display": "Oligospermia",
                "definition": "A disorder characterized by a decrease in the number of spermatozoa in the semen."
              },
              {
                "code": "10030980",
                "display": "Oral hemorrhage",
                "definition": "A disorder characterized by bleeding from the mouth."
              },
              {
                "code": "10031009",
                "display": "Oral pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the mouth, tongue or lips."
              },
              {
                "code": "10031282",
                "display": "Osteoporosis",
                "definition": "A disorder characterized by reduced bone mass, with a decrease in cortical thickness and in the number and size of the trabeculae of cancellous bone (but normal chemical composition), resulting in increased fracture incidence."
              },
              {
                "code": "10033072",
                "display": "Otitis externa",
                "definition": "A disorder characterized by an infectious process involving the outer ear and ear canal. Contributory factors include excessive water exposure (swimmer's ear infection) and cuts in the ear canal. Symptoms include fullness, itching, swelling and marked discomfort in the ear and ear drainage."
              },
              {
                "code": "10033078",
                "display": "Otitis media",
                "definition": "A disorder characterized by an infectious process involving the middle ear."
              },
              {
                "code": "10033279",
                "display": "Ovarian rupture",
                "definition": "A disorder characterized by tearing or disruption of the ovarian tissue."
              },
              {
                "code": "10033314",
                "display": "Ovulation pain",
                "definition": "A disorder characterized by marked discomfort sensation in one side of the abdomen between menstrual cycles, around the time of the discharge of the ovum from the ovarian follicle."
              },
              {
                "code": "10033371",
                "display": "Pain",
                "definition": "A disorder characterized by the sensation of marked discomfort, distress or agony."
              },
              {
                "code": "10033425",
                "display": "Pain in extremity",
                "definition": "A disorder characterized by marked discomfort sensation in the upper or lower extremities."
              },
              {
                "code": "10033474",
                "display": "Pain of skin",
                "definition": "A disorder characterized by marked discomfort sensation in the skin."
              },
              {
                "code": "10033557",
                "display": "Palpitations",
                "definition": "A disorder characterized by an unpleasant sensation of irregular and/or forceful beating of the heart."
              },
              {
                "code": "10033626",
                "display": "Pancreatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the pancreas."
              },
              {
                "code": "10033645",
                "display": "Pancreatitis",
                "definition": "A disorder characterized by inflammation of the pancreas."
              },
              {
                "code": "10033703",
                "display": "Papilledema",
                "definition": "A disorder characterized by swelling around the optic disc."
              },
              {
                "code": "10033987",
                "display": "Paresthesia",
                "definition": "A disorder characterized by functional disturbances of sensory neurons resulting in abnormal cutaneous sensations of tingling, numbness, pressure, cold, and warmth that are experienced in the absence of a stimulus."
              },
              {
                "code": "10034016",
                "display": "Paronychia",
                "definition": "A disorder characterized by an infectious process involving the soft tissues around the nail."
              },
              {
                "code": "10034040",
                "display": "Paroxysmal atrial tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with abrupt onset and sudden termination of atrial contractions with a rate of 150-250 beats per minute. The rhythm disturbance originates in the atria."
              },
              {
                "code": "10034263",
                "display": "Pelvic pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pelvis."
              },
              {
                "code": "10034310",
                "display": "Penile pain",
                "definition": "A disorder characterized by marked discomfort sensation in the penis."
              },
              {
                "code": "10034405",
                "display": "Perforation bile duct",
                "definition": "A disorder characterized by a rupture in the wall of the extrahepatic or intrahepatic bile duct."
              },
              {
                "code": "10034474",
                "display": "Pericardial effusion",
                "definition": "A disorder characterized by fluid collection within the pericardial sac, usually due to inflammation."
              },
              {
                "code": "10034484",
                "display": "Pericarditis",
                "definition": "A disorder characterized by irritation to the layers of the pericardium (the protective sac around the heart)."
              },
              {
                "code": "10034536",
                "display": "Periodontal disease",
                "definition": "A disorder in the gingival tissue around the teeth."
              },
              {
                "code": "10034578",
                "display": "Peripheral ischemia",
                "definition": "A disorder characterized by impaired circulation to an extremity."
              },
              {
                "code": "10034580",
                "display": "Peripheral motor neuropathy",
                "definition": "A disorder characterized by inflammation or degeneration of the peripheral motor nerves."
              },
              {
                "code": "10034620",
                "display": "Peripheral sensory neuropathy",
                "definition": "A disorder characterized by inflammation or degeneration of the peripheral sensory nerves."
              },
              {
                "code": "10034719",
                "display": "Personality change",
                "definition": "A disorder characterized by a conspicuous change in a person's behavior and thinking."
              },
              {
                "code": "10034825",
                "display": "Pharyngeal fistula",
                "definition": "A disorder characterized by an abnormal communication between the pharynx and another organ or anatomic site."
              },
              {
                "code": "10034835",
                "display": "Pharyngitis",
                "definition": "A disorder characterized by inflammation of the throat."
              },
              {
                "code": "10034844",
                "display": "Pharyngolaryngeal pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pharyngolaryngeal region."
              },
              {
                "code": "10034879",
                "display": "Phlebitis",
                "definition": "A disorder characterized by inflammation of the wall of a vein."
              },
              {
                "code": "10034960",
                "display": "Photophobia",
                "definition": "A disorder characterized by fear and avoidance of light."
              },
              {
                "code": "10034966",
                "display": "Photosensitivity",
                "definition": "A disorder characterized by an increase in sensitivity of the skin to light."
              },
              {
                "code": "10035528",
                "display": "Platelet count decreased",
                "definition": "A finding based on laboratory test results that indicate a decrease in number of platelets in a blood specimen."
              },
              {
                "code": "10035598",
                "display": "Pleural effusion",
                "definition": "A disorder characterized by an increase in amounts of fluid within the pleural cavity. Symptoms include shortness of breath, cough and marked chest discomfort."
              },
              {
                "code": "10035623",
                "display": "Pleuritic pain",
                "definition": "A disorder characterized by marked discomfort sensation in the pleura."
              },
              {
                "code": "10035742",
                "display": "Pneumonitis",
                "definition": "A disorder characterized by inflammation focally or diffusely affecting the lung parenchyma."
              },
              {
                "code": "10035759",
                "display": "Pneumothorax",
                "definition": "A disorder characterized by abnormal presence of air in the pleural cavity resulting in the collapse of the lung."
              },
              {
                "code": "10036200",
                "display": "Portal hypertension",
                "definition": "A disorder characterized by an increase in blood pressure in the portal venous system."
              },
              {
                "code": "10036206",
                "display": "Portal vein thrombosis",
                "definition": "A disorder characterized by the formation of a thrombus (blood clot) in the portal vein."
              },
              {
                "code": "10036402",
                "display": "Postnasal drip",
                "definition": "A disorder characterized by excessive mucous secretion in the back of the nasal cavity or throat, causing sore throat and/or coughing."
              },
              {
                "code": "10036585",
                "display": "Pregnancy, puerperium and perinatal conditions - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10036595",
                "display": "Premature delivery",
                "definition": "A disorder characterized by delivery of a viable infant before the normal end of gestation. Typically, viability is achievable between the twentieth and thirty-seventh week of gestation."
              },
              {
                "code": "10036601",
                "display": "Premature menopause",
                "definition": "A disorder characterized by ovarian failure before the age of 40. Symptoms include hot flashes, night sweats, mood swings and a decrease in sex drive."
              },
              {
                "code": "10036653",
                "display": "Presyncope",
                "definition": "A disorder characterized by an episode of lightheadedness and dizziness which may precede an episode of syncope."
              },
              {
                "code": "10036774",
                "display": "Proctitis",
                "definition": "A disorder characterized by inflammation of the rectum."
              },
              {
                "code": "10036790",
                "display": "Productive cough",
                "definition": "A disorder characterized by expectorated secretions upon coughing."
              },
              {
                "code": "10036968",
                "display": "Prostatic pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the prostate gland."
              },
              {
                "code": "10037032",
                "display": "Proteinuria",
                "definition": "A disorder characterized by laboratory test results that indicate the presence of excessive protein in the urine. It is predominantly albumin, but also globulin."
              },
              {
                "code": "10037087",
                "display": "Pruritus",
                "definition": "A disorder characterized by an intense itching sensation."
              },
              {
                "code": "10037175",
                "display": "Psychiatric disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10037234",
                "display": "Psychosis",
                "definition": "A disorder characterized by personality change, impaired functioning, and loss of touch with reality. It may be a manifestation of schizophrenia, bipolar disorder or brain tumor."
              },
              {
                "code": "10037375",
                "display": "Pulmonary edema",
                "definition": "A disorder characterized by accumulation of fluid in the lung tissues that causes a disturbance of the gas exchange that may lead to respiratory failure."
              },
              {
                "code": "10037383",
                "display": "Pulmonary fibrosis",
                "definition": "A disorder characterized by the replacement of the lung tissue by connective tissue, leading to progressive dyspnea, respiratory failure or right heart failure."
              },
              {
                "code": "10037400",
                "display": "Pulmonary hypertension",
                "definition": "A disorder characterized by an increase in pressure within the pulmonary circulation due to lung or heart disorder."
              },
              {
                "code": "10037549",
                "display": "Purpura",
                "definition": "A disorder characterized by hemorrhagic areas of the skin and mucous membrane. Newer lesions appear reddish in color. Older lesions are usually a darker purple color and eventually become a brownish-yellow color."
              },
              {
                "code": "10037767",
                "display": "Radiation recall reaction (dermatologic)",
                "definition": "A finding of acute skin inflammatory reaction caused by drugs, especially chemotherapeutic agents, for weeks or months following radiotherapy. The inflammatory reaction is confined to the previously irradiated skin and the symptoms disappear after the removal of the pharmaceutical agent."
              },
              {
                "code": "10037847",
                "display": "Rash acneiform",
                "definition": "A disorder characterized by an eruption of papules and pustules, typically appearing in face, scalp, upper chest and back."
              },
              {
                "code": "10037868",
                "display": "Rash maculo-papular",
                "definition": "A disorder characterized by the presence of macules (flat) and papules (elevated). Also known as morbillform rash, it is one of the most common cutaneous adverse events, frequently affecting the upper trunk, spreading centripetally and associated with pruritus."
              },
              {
                "code": "10037888",
                "display": "Rash pustular",
                "definition": "A disorder characterized by a circumscribed and elevated skin lesion filled with pus."
              },
              {
                "code": "10038062",
                "display": "Rectal fistula",
                "definition": "A disorder characterized by an abnormal communication between the rectum and another organ or anatomic site."
              },
              {
                "code": "10038064",
                "display": "Rectal hemorrhage",
                "definition": "A disorder characterized by bleeding from the rectal wall and discharged from the anus."
              },
              {
                "code": "10038072",
                "display": "Rectal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the rectal region."
              },
              {
                "code": "10038073",
                "display": "Rectal perforation",
                "definition": "A disorder characterized by a rupture in the rectal wall."
              },
              {
                "code": "10038079",
                "display": "Rectal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the rectum."
              },
              {
                "code": "10038080",
                "display": "Rectal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the rectum."
              },
              {
                "code": "10038130",
                "display": "Recurrent laryngeal nerve palsy",
                "definition": "A disorder characterized by paralysis of the recurrent laryngeal nerve."
              },
              {
                "code": "10038359",
                "display": "Renal and urinary disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10038385",
                "display": "Renal calculi",
                "definition": "A disorder characterized by the formation of crystals in the pelvis of the kidney."
              },
              {
                "code": "10038419",
                "display": "Renal colic",
                "definition": "A disorder characterized by paroxysmal and severe flank marked discomfort radiating to the inguinal area. Often, the cause is the passage of kidney stones."
              },
              {
                "code": "10038463",
                "display": "Renal hemorrhage",
                "definition": "A disorder characterized by bleeding from the kidney."
              },
              {
                "code": "10038604",
                "display": "Reproductive system and breast disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10038695",
                "display": "Respiratory failure",
                "definition": "A disorder characterized by impaired gas exchange by the respiratory system resulting in hypoxemia and a decrease in oxygenation of the tissues that may be associated with an increase in arterial levels of carbon dioxide."
              },
              {
                "code": "10038738",
                "display": "Respiratory, thoracic and mediastinal disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10038743",
                "display": "Restlessness",
                "definition": "A disorder characterized by an inability to rest, relax or be still."
              },
              {
                "code": "10038748",
                "display": "Restrictive cardiomyopathy",
                "definition": "A disorder characterized by an inability of the ventricles to fill with blood because the myocardium (heart muscle) stiffens and loses its flexibility."
              },
              {
                "code": "10038848",
                "display": "Retinal detachment",
                "definition": "A disorder characterized by the separation of the inner retina layers from the underlying pigment epithelium."
              },
              {
                "code": "10038897",
                "display": "Retinal tear",
                "definition": "A disorder characterized by a small laceration of the retina, this occurs when the vitreous separates from the retina. Symptoms include flashes and floaters."
              },
              {
                "code": "10038901",
                "display": "Retinal vascular disorder",
                "definition": "A disorder characterized by pathological retinal blood vessels that adversely affects vision."
              },
              {
                "code": "10038921",
                "display": "Retinoic acid syndrome",
                "definition": "A disorder characterized by weight gain, dyspnea, pleural and pericardial effusions, leukocytosis and/or renal failure originally described in patients treated with all-trans retinoic acid."
              },
              {
                "code": "10038923",
                "display": "Retinopathy",
                "definition": "A disorder involving the retina."
              },
              {
                "code": "10038981",
                "display": "Retroperitoneal hemorrhage",
                "definition": "A disorder characterized by bleeding from the retroperitoneal area."
              },
              {
                "code": "10039411",
                "display": "Salivary gland fistula",
                "definition": "A disorder characterized by an abnormal communication between a salivary gland and another organ or anatomic site."
              },
              {
                "code": "10039413",
                "display": "Salivary gland infection",
                "definition": "A disorder characterized by an infectious process involving the salivary gland."
              },
              {
                "code": "10039722",
                "display": "Scoliosis",
                "definition": "A disorder characterized by a malformed, lateral curvature of the spine."
              },
              {
                "code": "10039757",
                "display": "Scrotal pain",
                "definition": "A disorder characterized by marked discomfort sensation in the scrotal area."
              },
              {
                "code": "10039906",
                "display": "Seizure",
                "definition": "A disorder characterized by a sudden, involuntary skeletal muscular contractions of cerebral or brain stem origin."
              },
              {
                "code": "10040047",
                "display": "Sepsis",
                "definition": "A disorder characterized by the presence of pathogenic microorganisms in the blood stream that cause a rapidly progressing systemic reaction that may lead to shock."
              },
              {
                "code": "10040102",
                "display": "Seroma",
                "definition": "A finding of tumor-like collection of serum in the tissues."
              },
              {
                "code": "10040139",
                "display": "Serum amylase increased",
                "definition": "A finding based on laboratory test results that indicate an increase in the levels of amylase in a serum specimen."
              },
              {
                "code": "10040400",
                "display": "Serum sickness",
                "definition": "A disorder characterized by a delayed-type hypersensitivity reaction to foreign proteins derived from an animal serum. It occurs approximately six to twenty-one days following the administration of the foreign antigen. Symptoms include fever, arthralgias, myalgias, skin eruptions, lymphadenopathy, chest marked discomfort and dyspnea."
              },
              {
                "code": "10040639",
                "display": "Sick sinus syndrome",
                "definition": "A disorder characterized by a dysrhythmia with alternating periods of bradycardia and atrial tachycardia accompanied by syncope, fatigue and dizziness."
              },
              {
                "code": "10040741",
                "display": "Sinus bradycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate less than 60 beats per minute that originates in the sinus node."
              },
              {
                "code": "10040747",
                "display": "Sinus pain",
                "definition": "A disorder characterized by marked discomfort in the face, between the eyes, or upper teeth originating from the sinuses."
              },
              {
                "code": "10040752",
                "display": "Sinus tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates in the sinus node."
              },
              {
                "code": "10040753",
                "display": "Sinusitis",
                "definition": "A disorder characterized by an infectious process involving the mucous membranes of the paranasal sinuses."
              },
              {
                "code": "10040785",
                "display": "Skin and subcutaneous tissue disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10040799",
                "display": "Skin atrophy",
                "definition": "A disorder characterized by the degeneration and thinning of the epidermis and dermis."
              },
              {
                "code": "10040865",
                "display": "Skin hyperpigmentation",
                "definition": "A disorder characterized by darkening of the skin due to excessive melanin deposition."
              },
              {
                "code": "10040868",
                "display": "Skin hypopigmentation",
                "definition": "A disorder characterized by loss of skin pigment."
              },
              {
                "code": "10040872",
                "display": "Skin infection",
                "definition": "A disorder characterized by an infectious process involving the skin."
              },
              {
                "code": "10040947",
                "display": "Skin ulceration",
                "definition": "A disorder characterized by circumscribed, inflammatory and necrotic erosive lesion on the skin."
              },
              {
                "code": "10040975",
                "display": "Sleep apnea",
                "definition": "A disorder characterized by cessation of breathing for short periods during sleep."
              },
              {
                "code": "10041101",
                "display": "Small intestinal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents."
              },
              {
                "code": "10041103",
                "display": "Small intestinal perforation",
                "definition": "A disorder characterized by a rupture in the small intestine wall."
              },
              {
                "code": "10041133",
                "display": "Small intestine ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the mucosal surface of the small intestine."
              },
              {
                "code": "10041232",
                "display": "Sneezing",
                "definition": "A disorder characterized by the involuntary expulsion of air from the nose."
              },
              {
                "code": "10041244",
                "display": "Social circumstances - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10041349",
                "display": "Somnolence",
                "definition": "A disorder characterized by characterized by excessive sleepiness and drowsiness."
              },
              {
                "code": "10041367",
                "display": "Sore throat",
                "definition": "A disorder characterized by of marked discomfort in the throat"
              },
              {
                "code": "10041416",
                "display": "Spasticity",
                "definition": "A disorder characterized by increased involuntary muscle tone that affects the regions interfering with voluntary movement. It results in gait, movement, and speech disturbances."
              },
              {
                "code": "10041569",
                "display": "Spinal fracture",
                "definition": "A finding of traumatic injury to the spine in which the continuity of a vertebral bone is broken."
              },
              {
                "code": "10041633",
                "display": "Spleen disorder",
                "definition": "A disorder of the spleen."
              },
              {
                "code": "10042033",
                "display": "Stevens-Johnson syndrome",
                "definition": "A disorder characterized by less than 10% total body skin area separation of dermis. The syndrome is thought to be a hypersensitivity complex affecting the skin and the mucous membranes."
              },
              {
                "code": "10042112",
                "display": "Stomach pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the stomach."
              },
              {
                "code": "10042127",
                "display": "Stomal ulcer",
                "definition": "A disorder characterized by a circumscribed, inflammatory and necrotic erosive lesion on the jejunal mucosal surface close to the anastomosis site following a gastroenterostomy procedure."
              },
              {
                "code": "10042241",
                "display": "Stridor",
                "definition": "A disorder characterized by a high pitched breathing sound due to laryngeal or upper airway obstruction."
              },
              {
                "code": "10042244",
                "display": "Stroke",
                "definition": "A disorder characterized by a sudden loss of sensory function due to an intracranial vascular event."
              },
              {
                "code": "10042435",
                "display": "Sudden death NOS",
                "definition": "An unexpected cessation of life that cannot be attributed to a CTCAE term associated with Grade 5."
              },
              {
                "code": "10042458",
                "display": "Suicidal ideation",
                "definition": "A disorder characterized by thoughts of taking one's own life."
              },
              {
                "code": "10042464",
                "display": "Suicide attempt",
                "definition": "A disorder characterized by self-inflicted harm in an attempt to end one's own life."
              },
              {
                "code": "10042554",
                "display": "Superficial thrombophlebitis",
                "definition": "A disorder characterized by a blood clot and inflammation involving a superficial vein of the extremities."
              },
              {
                "code": "10042569",
                "display": "Superior vena cava syndrome",
                "definition": "A disorder characterized by obstruction of the blood flow in the superior vena cava. Signs and symptoms include swelling and cyanosis of the face, neck, and upper arms, cough, orthopnea and headache."
              },
              {
                "code": "10042604",
                "display": "Supraventricular tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates above the ventricles."
              },
              {
                "code": "10042613",
                "display": "Surgical and medical procedures - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10042772",
                "display": "Syncope",
                "definition": "A disorder characterized by spontaneous loss of consciousness caused by insufficient blood supply to the brain."
              },
              {
                "code": "10043189",
                "display": "Telangiectasia",
                "definition": "A disorder characterized by local dilatation of small vessels resulting in red discoloration of the skin or mucous membranes."
              },
              {
                "code": "10043306",
                "display": "Testicular disorder",
                "definition": "A disorder characterized by involvement of the testis."
              },
              {
                "code": "10043345",
                "display": "Testicular pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the testis."
              },
              {
                "code": "10043565",
                "display": "Thromboembolic event",
                "definition": "A disorder characterized by occlusion of a vessel by a thrombus that has migrated from a distal site via the blood stream."
              },
              {
                "code": "10043648",
                "display": "Thrombotic thrombocytopenic purpura",
                "definition": "A disorder characterized by the presence of microangiopathic hemolytic anemia, thrombocytopenic purpura, fever, renal abnormalities and neurological abnormalities such as seizures, hemiplegia, and visual disturbances. It is an acute or subacute condition."
              },
              {
                "code": "10043882",
                "display": "Tinnitus",
                "definition": "A disorder characterized by noise in the ears, such as ringing, buzzing, roaring or clicking."
              },
              {
                "code": "10044030",
                "display": "Tooth development disorder",
                "definition": "A disorder characterized by a pathological process of the teeth occurring during tooth development."
              },
              {
                "code": "10044031",
                "display": "Tooth discoloration",
                "definition": "A disorder characterized by a change in tooth hue or tint."
              },
              {
                "code": "10044055",
                "display": "Toothache",
                "definition": "A disorder characterized by a sensation of marked discomfort in the tooth."
              },
              {
                "code": "10044223",
                "display": "Toxic epidermal necrolysis",
                "definition": "A disorder characterized by greater than 30% total body skin area separation of dermis. The syndrome is thought to be a hypersensitivity complex affecting the skin and the mucous membranes."
              },
              {
                "code": "10044291",
                "display": "Tracheal obstruction",
                "definition": "A finding of blockage of the lumen of the trachea."
              },
              {
                "code": "10044302",
                "display": "Tracheitis",
                "definition": "A disorder characterized by an infectious process involving the trachea."
              },
              {
                "code": "10044391",
                "display": "Transient ischemic attacks",
                "definition": "A disorder characterized by a brief attack (less than 24 hours) of cerebral dysfunction of vascular origin, with no persistent neurological deficit."
              },
              {
                "code": "10044565",
                "display": "Tremor",
                "definition": "A disorder characterized by the uncontrolled shaking movement of the whole body or individual parts."
              },
              {
                "code": "10044684",
                "display": "Trismus",
                "definition": "A disorder characterized by lack of ability to open the mouth fully due to a decrease in the range of motion of the muscles of mastication."
              },
              {
                "code": "10045152",
                "display": "Tumor lysis syndrome",
                "definition": "A disorder characterized by metabolic abnormalities that result from a spontaneous or therapy-related cytolysis of tumor cells."
              },
              {
                "code": "10045158",
                "display": "Tumor pain",
                "definition": "A disorder characterized by marked discomfort from a neoplasm that may be pressing on a nerve, blocking blood vessels, inflamed or fractured from metastasis."
              },
              {
                "code": "10045271",
                "display": "Typhlitis",
                "definition": "A disorder characterized by inflammation of the cecum."
              },
              {
                "code": "10045542",
                "display": "Unintended pregnancy",
                "definition": "A disorder characterized by an unexpected pregnancy at the time of conception."
              },
              {
                "code": "10046300",
                "display": "Upper respiratory infection",
                "definition": "A disorder characterized by an infectious process involving the upper respiratory tract (nose, paranasal sinuses, pharynx, larynx, or trachea)."
              },
              {
                "code": "10046539",
                "display": "Urinary frequency",
                "definition": "A disorder characterized by urination at short intervals."
              },
              {
                "code": "10046543",
                "display": "Urinary incontinence",
                "definition": "A disorder characterized by inability to control the flow of urine from the bladder."
              },
              {
                "code": "10046555",
                "display": "Urinary retention",
                "definition": "A disorder characterized by accumulation of urine within the bladder because of the inability to urinate."
              },
              {
                "code": "10046571",
                "display": "Urinary tract infection",
                "definition": "A disorder characterized by an infectious process involving the urinary tract, most commonly the bladder and the urethra."
              },
              {
                "code": "10046593",
                "display": "Urinary urgency",
                "definition": "A disorder characterized by a sudden compelling urge to urinate."
              },
              {
                "code": "10046628",
                "display": "Urine discoloration",
                "definition": "A disorder characterized by a change in the color of the urine."
              },
              {
                "code": "10046735",
                "display": "Urticaria",
                "definition": "A disorder characterized by an itchy skin eruption characterized by wheals with pale interiors and well-defined red margins."
              },
              {
                "code": "10046789",
                "display": "Uterine hemorrhage",
                "definition": "A disorder characterized by bleeding from the uterus."
              },
              {
                "code": "10046809",
                "display": "Uterine pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the uterus."
              },
              {
                "code": "10046810",
                "display": "Uterine perforation",
                "definition": "A disorder characterized by a rupture in the uterine wall."
              },
              {
                "code": "10046851",
                "display": "Uveitis",
                "definition": "A disorder characterized by inflammation to the uvea of the eye."
              },
              {
                "code": "10046901",
                "display": "Vaginal discharge",
                "definition": "A disorder characterized by vaginal secretions. Mucus produced by the cervical glands is discharged from the vagina naturally, especially during the childbearing years."
              },
              {
                "code": "10046904",
                "display": "Vaginal dryness",
                "definition": "A disorder characterized by an uncomfortable feeling of itching and burning in the vagina."
              },
              {
                "code": "10046912",
                "display": "Vaginal hemorrhage",
                "definition": "A disorder characterized by bleeding from the vagina."
              },
              {
                "code": "10046914",
                "display": "Vaginal infection",
                "definition": "A disorder characterized by an infectious process involving the vagina."
              },
              {
                "code": "10046916",
                "display": "Vaginal inflammation",
                "definition": "A disorder characterized by inflammation involving the vagina. Symptoms may include redness, edema, marked discomfort and an increase in vaginal discharge."
              },
              {
                "code": "10046937",
                "display": "Vaginal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the vagina."
              },
              {
                "code": "10046947",
                "display": "Vaginismus",
                "definition": "A disorder characterized by involuntary spasms of the pelvic floor muscles, resulting in pathologic tightness of the vaginal wall during penetration such as during sexual intercourse."
              },
              {
                "code": "10047065",
                "display": "Vascular disorders - Other, specify",
                "definition": "No Value Exists"
              },
              {
                "code": "10047115",
                "display": "Vasculitis",
                "definition": "A disorder characterized by inflammation involving the wall of a vessel."
              },
              {
                "code": "10047166",
                "display": "Vasovagal reaction",
                "definition": "A disorder characterized by a sudden drop of the blood pressure, bradycardia, and peripheral vasodilation that may lead to loss of consciousness. It results from an increase in the stimulation of the vagus nerve."
              },
              {
                "code": "10047228",
                "display": "Venous injury",
                "definition": "A finding of damage to a vein."
              },
              {
                "code": "10047281",
                "display": "Ventricular arrhythmia",
                "definition": "A disorder characterized by a dysrhythmia that originates in the ventricles."
              },
              {
                "code": "10047290",
                "display": "Ventricular fibrillation",
                "definition": "A disorder characterized by a dysrhythmia without discernible QRS complexes due to rapid repetitive excitation of myocardial fibers without coordinated contraction of the ventricles."
              },
              {
                "code": "10047302",
                "display": "Ventricular tachycardia",
                "definition": "A disorder characterized by a dysrhythmia with a heart rate greater than 100 beats per minute that originates distal to the bundle of His."
              },
              {
                "code": "10047340",
                "display": "Vertigo",
                "definition": "A disorder characterized by a sensation as if the external world were revolving around the patient (objective vertigo) or as if he himself were revolving in space (subjective vertigo)."
              },
              {
                "code": "10047386",
                "display": "Vestibular disorder",
                "definition": "A disorder characterized by dizziness, imbalance, nausea, and vision problems."
              },
              {
                "code": "10047488",
                "display": "Virilization",
                "definition": "A disorder characterized by inappropriate masculinization occurring in a female or prepubertal male."
              },
              {
                "code": "10047580",
                "display": "Vital capacity abnormal",
                "definition": "A finding based on pulmonary function test results that indicate an abnormal vital capacity (amount of exhaled after a maximum inhalation) when compared to the predicted value."
              },
              {
                "code": "10047656",
                "display": "Vitreous hemorrhage",
                "definition": "A disorder characterized by blood extravasation into the vitreous humor."
              },
              {
                "code": "10047681",
                "display": "Voice alteration",
                "definition": "A disorder characterized by a change in the sound and/or speed of the voice."
              },
              {
                "code": "10047700",
                "display": "Vomiting",
                "definition": "A disorder characterized by the reflexive act of ejecting the contents of the stomach through the mouth."
              },
              {
                "code": "10047848",
                "display": "Watering eyes",
                "definition": "A disorder of excessive tearing in the eyes; it can be caused by overproduction of tears or impaired drainage of the tear duct."
              },
              {
                "code": "10047896",
                "display": "Weight gain",
                "definition": "A finding characterized by an increase in overall body weight; for pediatrics, greater than the baseline growth curve."
              },
              {
                "code": "10047900",
                "display": "Weight loss",
                "definition": "A finding characterized by a decrease in overall body weight; for pediatrics, less than the baseline growth curve."
              },
              {
                "code": "10047924",
                "display": "Wheezing",
                "definition": "A disorder characterized by a high-pitched, whistling sound during breathing. It results from the narrowing or obstruction of the respiratory airways."
              },
              {
                "code": "10048015",
                "display": "Wolff-Parkinson-White syndrome",
                "definition": "A disorder characterized by the presence of an accessory conductive pathway between the atria and the ventricles that causes premature ventricular activation."
              },
              {
                "code": "10048031",
                "display": "Wound dehiscence",
                "definition": "A finding of separation of the approximated margins of a surgical wound."
              },
              {
                "code": "10048038",
                "display": "Wound infection",
                "definition": "A disorder characterized by an infectious process involving the wound."
              },
              {
                "code": "10048049",
                "display": "Wrist fracture",
                "definition": "A finding of traumatic injury to the wrist joint in which the continuity of a wrist bone is broken."
              },
              {
                "code": "10048293",
                "display": "Leukemia secondary to oncology chemotherapy",
                "definition": "A disorder characterized by leukemia arising as a result of the mutagenic effect of chemotherapy agents."
              },
              {
                "code": "10048492",
                "display": "Corneal ulcer",
                "definition": "A disorder characterized by an area of epithelial tissue loss on the surface of the cornea. It is associated with inflammatory cells in the cornea and anterior chamber."
              },
              {
                "code": "10048580",
                "display": "Bone marrow hypocellular",
                "definition": "A disorder characterized by the inability of the bone marrow to produce hematopoietic elements."
              },
              {
                "code": "10048642",
                "display": "Lymphocele",
                "definition": "A disorder characterized by a cystic lesion containing lymph."
              },
              {
                "code": "10048677",
                "display": "Buttock pain",
                "definition": "A disorder characterized by marked discomfort sensation in the buttocks."
              },
              {
                "code": "10048706",
                "display": "Joint range of motion decreased",
                "definition": "A disorder characterized by a decrease in joint flexibility of any joint."
              },
              {
                "code": "10048762",
                "display": "Tooth infection",
                "definition": "A disorder characterized by an infectious process involving a tooth."
              },
              {
                "code": "10048994",
                "display": "Bladder spasm",
                "definition": "A disorder characterized by a sudden and involuntary contraction of the bladder wall."
              },
              {
                "code": "10049120",
                "display": "Scalp pain",
                "definition": "A disorder characterized by marked discomfort sensation in the skin covering the top and the back of the head."
              },
              {
                "code": "10049182",
                "display": "White blood cell decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in number of white blood cells in a blood specimen."
              },
              {
                "code": "10049192",
                "display": "Pancreatic fistula",
                "definition": "A disorder characterized by an abnormal communication between the pancreas and another organ or anatomic site."
              },
              {
                "code": "10049281",
                "display": "Nail loss",
                "definition": "A disorder characterized by loss of all or a portion of the nail."
              },
              {
                "code": "10049468",
                "display": "Intestinal stoma site bleeding",
                "definition": "A finding of blood leakage from the intestinal stoma."
              },
              {
                "code": "10049737",
                "display": "Treatment related secondary malignancy",
                "definition": "A disorder characterized by development of a malignancy most probably as a result of treatment for a previously existing malignancy."
              },
              {
                "code": "10050028",
                "display": "Pharyngeal stenosis",
                "definition": "A disorder characterized by a narrowing of the pharyngeal airway."
              },
              {
                "code": "10050068",
                "display": "Edema limbs",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in the upper or lower extremities."
              },
              {
                "code": "10050094",
                "display": "Duodenal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the duodenum."
              },
              {
                "code": "10050457",
                "display": "Pancreatic anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a pancreatic anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10050458",
                "display": "Biliary anastomotic leak",
                "definition": "A finding of leakage of bile due to breakdown of a biliary anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10050528",
                "display": "Ejection fraction decreased",
                "definition": "The percentage computed when the amount of blood ejected during a ventricular contraction of the heart is compared to the amount that was present prior to the contraction."
              },
              {
                "code": "10050662",
                "display": "Prostate infection",
                "definition": "A disorder characterized by an infectious process involving the prostate gland."
              },
              {
                "code": "10050816",
                "display": "Tracheal stenosis",
                "definition": "A disorder characterized by a narrowing of the trachea."
              },
              {
                "code": "10050823",
                "display": "Lymph gland infection",
                "definition": "A disorder characterized by an infectious process involving the lymph nodes."
              },
              {
                "code": "10051228",
                "display": "Chylothorax",
                "definition": "A disorder characterized by milky pleural effusion (abnormal collection of fluid) resulting from accumulation of lymph fluid in the pleural cavity."
              },
              {
                "code": "10051272",
                "display": "Facial muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of the facial muscles."
              },
              {
                "code": "10051341",
                "display": "Bile duct stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the bile duct."
              },
              {
                "code": "10051472",
                "display": "Periorbital infection",
                "definition": "A disorder characterized by an infectious process involving the orbit of the eye."
              },
              {
                "code": "10051592",
                "display": "Acute coronary syndrome",
                "definition": "A disorder characterized by signs and symptoms related to acute ischemia of the myocardium secondary to coronary artery disease. The clinical presentation covers a spectrum of heart diseases from unstable angina to myocardial infarction."
              },
              {
                "code": "10051741",
                "display": "Pancreas infection",
                "definition": "A disorder characterized by an infectious process involving the pancreas."
              },
              {
                "code": "10051746",
                "display": "Lower gastrointestinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the lower gastrointestinal tract (small intestine, large intestine, and anus)."
              },
              {
                "code": "10051792",
                "display": "Infusion related reaction",
                "definition": "A disorder characterized by adverse reaction to the infusion of pharmacological or biological substances."
              },
              {
                "code": "10051837",
                "display": "Skin induration",
                "definition": "A disorder characterized by an area of hardness in the skin."
              },
              {
                "code": "10051886",
                "display": "Gastric necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the gastric wall."
              },
              {
                "code": "10052015",
                "display": "Cytokine release syndrome",
                "definition": "A disorder characterized by nausea, headache, tachycardia, hypotension, rash, and shortness of breath; it is caused by the release of cytokines from the cells."
              },
              {
                "code": "10052298",
                "display": "Urethral infection",
                "definition": "A disorder characterized by an infectious process involving the urethra."
              },
              {
                "code": "10052426",
                "display": "Glucose intolerance",
                "definition": "A disorder characterized by an inability to properly metabolize glucose."
              },
              {
                "code": "10053481",
                "display": "Bronchopleural fistula",
                "definition": "A disorder characterized by an abnormal communication between a bronchus and the pleural cavity."
              },
              {
                "code": "10053496",
                "display": "Vaginal stricture",
                "definition": "A disorder characterized by a narrowing of the vaginal canal."
              },
              {
                "code": "10053565",
                "display": "Pericardial tamponade",
                "definition": "A disorder characterized by an increase in intrapericardial pressure due to the collection of blood or fluid in the pericardium."
              },
              {
                "code": "10053661",
                "display": "Oculomotor nerve disorder",
                "definition": "A disorder characterized by involvement of the oculomotor nerve (third cranial nerve)."
              },
              {
                "code": "10053662",
                "display": "Abducens nerve disorder",
                "definition": "A disorder characterized by involvement of the abducens nerve (sixth cranial nerve)."
              },
              {
                "code": "10053692",
                "display": "Wound complication",
                "definition": "A finding of development of a new problem at the site of an existing wound."
              },
              {
                "code": "10054382",
                "display": "Feminization acquired",
                "definition": "A disorder characterized by the development of secondary female sex characteristics in males due to extrinsic factors."
              },
              {
                "code": "10054482",
                "display": "Neck edema",
                "definition": "A disorder characterized by swelling due to an accumulation of excessive fluid in the neck."
              },
              {
                "code": "10054520",
                "display": "Oral dysesthesia",
                "definition": "A disorder characterized by a burning or tingling sensation on the lips, tongue or entire mouth."
              },
              {
                "code": "10054524",
                "display": "Palmar-plantar erythrodysesthesia syndrome",
                "definition": "A disorder characterized by redness, marked discomfort, swelling, and tingling in the palms of the hands or the soles of the feet."
              },
              {
                "code": "10054541",
                "display": "Periorbital edema",
                "definition": "A disorder characterized by swelling due to an excessive accumulation of fluid around the orbits of the face."
              },
              {
                "code": "10054692",
                "display": "Visceral arterial ischemia",
                "definition": "A disorder characterized by a decrease in blood supply due to narrowing or blockage of a visceral (mesenteric) artery."
              },
              {
                "code": "10054746",
                "display": "Fetal growth retardation",
                "definition": "A disorder characterized by inhibition of fetal growth resulting in the inability of the fetus to achieve its potential weight."
              },
              {
                "code": "10055005",
                "display": "Ovarian infection",
                "definition": "A disorder characterized by an infectious process involving the ovary."
              },
              {
                "code": "10055026",
                "display": "Prostatic obstruction",
                "definition": "A disorder characterized by compression of the urethra secondary to enlargement of the prostate gland. This results in voiding difficulties (straining to void, slow urine stream, and incomplete emptying of the bladder)."
              },
              {
                "code": "10055078",
                "display": "Bronchial infection",
                "definition": "A disorder characterized by an infectious process involving the bronchi."
              },
              {
                "code": "10055226",
                "display": "Anal hemorrhage",
                "definition": "A disorder characterized by bleeding from the anal region."
              },
              {
                "code": "10055242",
                "display": "Duodenal hemorrhage",
                "definition": "A disorder characterized by bleeding from the duodenum."
              },
              {
                "code": "10055287",
                "display": "Ileal hemorrhage",
                "definition": "A disorder characterized by bleeding from the ileal wall."
              },
              {
                "code": "10055291",
                "display": "Intra-abdominal hemorrhage",
                "definition": "A disorder characterized by bleeding in the abdominal cavity."
              },
              {
                "code": "10055298",
                "display": "Intraoperative hemorrhage",
                "definition": "A finding of uncontrolled bleeding during a surgical procedure."
              },
              {
                "code": "10055300",
                "display": "Jejunal hemorrhage",
                "definition": "A disorder characterized by bleeding from the jejunal wall."
              },
              {
                "code": "10055315",
                "display": "Pharyngeal hemorrhage",
                "definition": "A disorder characterized by bleeding from the pharynx."
              },
              {
                "code": "10055319",
                "display": "Pleural hemorrhage",
                "definition": "A disorder characterized by bleeding from the pleural cavity."
              },
              {
                "code": "10055322",
                "display": "Postoperative hemorrhage",
                "definition": "A finding of bleeding occurring after a surgical procedure."
              },
              {
                "code": "10055325",
                "display": "Prostatic hemorrhage",
                "definition": "A disorder characterized by bleeding from the prostate gland."
              },
              {
                "code": "10055347",
                "display": "Testicular hemorrhage",
                "definition": "A disorder characterized by bleeding from the testis."
              },
              {
                "code": "10055356",
                "display": "Upper gastrointestinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the upper gastrointestinal tract (oral cavity, pharynx, esophagus, and stomach)."
              },
              {
                "code": "10055472",
                "display": "Esophageal perforation",
                "definition": "A disorder characterized by a rupture in the wall of the esophagus."
              },
              {
                "code": "10055599",
                "display": "Hemoglobin increased",
                "definition": "A finding based on laboratory test results that indicate increased levels of hemoglobin in a biological specimen."
              },
              {
                "code": "10056238",
                "display": "Phantom pain",
                "definition": "A disorder characterized by marked discomfort related to a limb or an organ that is removed from or is not physically part of the body."
              },
              {
                "code": "10056356",
                "display": "Mediastinal hemorrhage",
                "definition": "A disorder characterized by bleeding from the mediastinum."
              },
              {
                "code": "10056388",
                "display": "Olfactory nerve disorder",
                "definition": "A disorder characterized by involvement of the olfactory nerve (first cranial nerve)."
              },
              {
                "code": "10056519",
                "display": "Abdominal infection",
                "definition": "A disorder characterized by an infectious process involving the abdominal cavity."
              },
              {
                "code": "10056522",
                "display": "Hepatic infection",
                "definition": "A disorder characterized by an infectious process involving the liver."
              },
              {
                "code": "10056627",
                "display": "Phlebitis infective",
                "definition": "A disorder characterized by an infectious process involving the vein. Clinical manifestations include erythema, marked discomfort, swelling, and induration along the course of the infected vein."
              },
              {
                "code": "10056681",
                "display": "Salivary duct inflammation",
                "definition": "A disorder characterized by inflammation of the salivary duct."
              },
              {
                "code": "10056745",
                "display": "Postoperative thoracic procedure complication",
                "definition": "A finding of a previously undocumented problem that occurs after a thoracic procedure."
              },
              {
                "code": "10056910",
                "display": "GGT increased",
                "definition": "A finding based on laboratory test results that indicate higher than normal levels of the enzyme gamma-glutamyltransferase in the blood specimen. GGT (gamma-glutamyltransferase ) catalyzes the transfer of a gamma glutamyl group from a gamma glutamyl peptide to another peptide, amino acids or water."
              },
              {
                "code": "10057066",
                "display": "Delayed orgasm",
                "definition": "A disorder characterized by sexual dysfunction characterized by a delay in climax."
              },
              {
                "code": "10057262",
                "display": "Peritoneal infection",
                "definition": "A disorder characterized by an infectious process involving the peritoneum."
              },
              {
                "code": "10057483",
                "display": "Mediastinal infection",
                "definition": "A disorder characterized by an infectious process involving the mediastinum."
              },
              {
                "code": "10058084",
                "display": "Precocious puberty",
                "definition": "A disorder characterized by unusually early development of secondary sexual features; the onset of sexual maturation begins usually before age 8 for girls and before age 9 for boys."
              },
              {
                "code": "10058096",
                "display": "Pancreatic necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the pancreas."
              },
              {
                "code": "10058597",
                "display": "Right ventricular dysfunction",
                "definition": "A disorder characterized by impairment of right ventricular function associated with low ejection fraction and a decrease in motility of the right ventricular wall."
              },
              {
                "code": "10058674",
                "display": "Pelvic infection",
                "definition": "A disorder characterized by an infectious process involving the pelvic cavity."
              },
              {
                "code": "10058720",
                "display": "Edema trunk",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation in the trunk area."
              },
              {
                "code": "10058804",
                "display": "Esophageal infection",
                "definition": "A disorder characterized by an infectious process involving the esophagus."
              },
              {
                "code": "10058838",
                "display": "Enterocolitis infectious",
                "definition": "A disorder characterized by an infectious process involving the small and large intestines."
              },
              {
                "code": "10059094",
                "display": "Intestinal stoma obstruction",
                "definition": "A finding of blockage of the normal flow of the contents of the intestinal stoma."
              },
              {
                "code": "10059095",
                "display": "Intestinal stoma leak",
                "definition": "A finding of leakage of contents from an intestinal stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "10059446",
                "display": "Gallbladder necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the gallbladder."
              },
              {
                "code": "10059639",
                "display": "Laryngeal obstruction",
                "definition": "A disorder characterized by blockage of the laryngeal airway."
              },
              {
                "code": "10059827",
                "display": "Rhinitis infective",
                "definition": "A disorder characterized by an infectious process involving the nasal mucosal."
              },
              {
                "code": "10059895",
                "display": "Urine output decreased",
                "definition": "A finding based on test results that indicate urine production is less relative to previous output."
              },
              {
                "code": "10060602",
                "display": "Hematosalpinx",
                "definition": "A disorder characterized by the presence of blood in a fallopian tube."
              },
              {
                "code": "10060640",
                "display": "Hemorrhoidal hemorrhage",
                "definition": "A disorder characterized by bleeding from the hemorrhoids."
              },
              {
                "code": "10060890",
                "display": "Trigeminal nerve disorder",
                "definition": "A disorder characterized by involvement of the trigeminal nerve (fifth cranial nerve)."
              },
              {
                "code": "10060929",
                "display": "Accessory nerve disorder",
                "definition": "A disorder characterized by involvement of the accessory nerve (eleventh cranial nerve)."
              },
              {
                "code": "10061017",
                "display": "Bone infection",
                "definition": "A disorder characterized by an infectious process involving the bones."
              },
              {
                "code": "10061103",
                "display": "Dermatitis radiation",
                "definition": "A finding of cutaneous inflammatory reaction occurring as a result of exposure to biologically effective levels of ionizing radiation."
              },
              {
                "code": "10061145",
                "display": "Eyelid function disorder",
                "definition": "A disorder characterized by impaired eyelid function."
              },
              {
                "code": "10061149",
                "display": "Female genital tract fistula",
                "definition": "A disorder characterized by an abnormal communication between a female reproductive system organ and another organ or anatomic site."
              },
              {
                "code": "10061185",
                "display": "Glossopharyngeal nerve disorder",
                "definition": "A disorder characterized by involvement of the glossopharyngeal nerve (ninth cranial nerve)."
              },
              {
                "code": "10061212",
                "display": "Hypoglossal nerve disorder",
                "definition": "A disorder characterized by involvement of the hypoglossal nerve (twelfth cranial nerve)."
              },
              {
                "code": "10061229",
                "display": "Lung infection",
                "definition": "A disorder characterized by an infectious process involving the lungs."
              },
              {
                "code": "10061261",
                "display": "Lactation disorder",
                "definition": "A disorder characterized by disturbances of milk secretion. It is not necessarily related to pregnancy that is observed in females and can be observed in males."
              },
              {
                "code": "10061304",
                "display": "Nail infection",
                "definition": "A disorder characterized by an infectious process involving the nail."
              },
              {
                "code": "10061322",
                "display": "Optic nerve disorder",
                "definition": "A disorder characterized by involvement of the optic nerve (second cranial nerve)."
              },
              {
                "code": "10061339",
                "display": "Perineal pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the area between the genital organs and the anus."
              },
              {
                "code": "10061351",
                "display": "Pleural infection",
                "definition": "A disorder characterized by an infectious process involving the pleura."
              },
              {
                "code": "10061389",
                "display": "Tricuspid valve disease",
                "definition": "A disorder characterized by a defect in tricuspid valve function or structure."
              },
              {
                "code": "10061403",
                "display": "Vagus nerve disorder",
                "definition": "A disorder characterized by involvement of the vagus nerve (tenth cranial nerve)."
              },
              {
                "code": "10061457",
                "display": "Facial nerve disorder",
                "definition": "A disorder characterized by involvement of the facial nerve (seventh cranial nerve)."
              },
              {
                "code": "10061461",
                "display": "Erectile dysfunction",
                "definition": "A disorder characterized by the persistent or recurrent inability to achieve or to maintain an erection during sexual activity."
              },
              {
                "code": "10061510",
                "display": "Scleral disorder",
                "definition": "A disorder characterized by involvement of the sclera of the eye."
              },
              {
                "code": "10061532",
                "display": "Mitral valve disease",
                "definition": "A disorder characterized by a defect in mitral valve function or structure."
              },
              {
                "code": "10061541",
                "display": "Pulmonary valve disease",
                "definition": "A disorder characterized by a defect in pulmonary valve function or structure."
              },
              {
                "code": "10061574",
                "display": "Urinary tract obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of contents of the urinary tract."
              },
              {
                "code": "10061589",
                "display": "Aortic valve disease",
                "definition": "A disorder characterized by a defect in aortic valve function or structure."
              },
              {
                "code": "10061640",
                "display": "Anorectal infection",
                "definition": "A disorder characterized by an infectious process involving the anal area and the rectum."
              },
              {
                "code": "10061664",
                "display": "Autoimmune disorder",
                "definition": "A disorder resulting from loss of function or tissue destruction of an organ or multiple organs, arising from humoral or cellular immune responses of the individual to his own tissue constituents."
              },
              {
                "code": "10061695",
                "display": "Biliary tract infection",
                "definition": "A disorder characterized by an infectious process involving the biliary tract."
              },
              {
                "code": "10061788",
                "display": "Corneal infection",
                "definition": "A disorder characterized by an infectious process involving the cornea."
              },
              {
                "code": "10061912",
                "display": "Penile infection",
                "definition": "A disorder characterized by an infectious process involving the penis."
              },
              {
                "code": "10061928",
                "display": "Radiculitis",
                "definition": "A disorder characterized by inflammation involving a nerve root. Patients experience marked discomfort radiating along a nerve path because of spinal pressure on the connecting nerve root."
              },
              {
                "code": "10061970",
                "display": "Gastric stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the stomach."
              },
              {
                "code": "10062112",
                "display": "Splenic infection",
                "definition": "A disorder characterized by an infectious process involving the spleen."
              },
              {
                "code": "10062156",
                "display": "Scrotal infection",
                "definition": "A disorder characterized by an infectious process involving the scrotum."
              },
              {
                "code": "10062169",
                "display": "Vascular access complication",
                "definition": "A finding of a previously undocumented problem related to the vascular access site."
              },
              {
                "code": "10062225",
                "display": "Urinary tract pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the urinary tract."
              },
              {
                "code": "10062233",
                "display": "Uterine infection",
                "definition": "A disorder characterized by an infectious process involving the endometrium. It may extend to the myometrium and parametrial tissues."
              },
              {
                "code": "10062244",
                "display": "Sinus disorder",
                "definition": "A disorder characterized by involvement of the paranasal sinuses."
              },
              {
                "code": "10062255",
                "display": "Soft tissue infection",
                "definition": "A disorder characterized by an infectious process involving soft tissues."
              },
              {
                "code": "10062263",
                "display": "Small intestinal stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the small intestine."
              },
              {
                "code": "10062283",
                "display": "Nail ridging",
                "definition": "A disorder characterized by vertical or horizontal ridges on the nails."
              },
              {
                "code": "10062315",
                "display": "Lipohypertrophy",
                "definition": "A disorder characterized by hypertrophy of the subcutaneous adipose tissue at the site of multiple subcutaneous injections of insulin."
              },
              {
                "code": "10062466",
                "display": "Localized edema",
                "definition": "A disorder characterized by swelling due to excessive fluid accumulation at a specific anatomic site."
              },
              {
                "code": "10062501",
                "display": "Non-cardiac chest pain",
                "definition": "A disorder characterized by discomfort in the chest unrelated to a heart disorder."
              },
              {
                "code": "10062548",
                "display": "Tracheal hemorrhage",
                "definition": "A finding of bleeding from the trachea."
              },
              {
                "code": "10062570",
                "display": "Enterovesical fistula",
                "definition": "A disorder characterized by an abnormal communication between the urinary bladder and the intestine."
              },
              {
                "code": "10062572",
                "display": "Generalized muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of muscles in multiple anatomic sites."
              },
              {
                "code": "10062632",
                "display": "Gallbladder infection",
                "definition": "A disorder characterized by an infectious process involving the gallbladder."
              },
              {
                "code": "10062646",
                "display": "Pancreatic enzymes decreased",
                "definition": "A finding based on laboratory test results that indicate an decrease in levels of pancreatic enzymes in a biological specimen."
              },
              {
                "code": "10062667",
                "display": "Laryngopharyngeal dysesthesia",
                "definition": "A disorder characterized by an uncomfortable persistent sensation in the area of the laryngopharynx."
              },
              {
                "code": "10062872",
                "display": "Dysesthesia",
                "definition": "A disorder characterized by distortion of sensory perception, resulting in an abnormal and unpleasant sensation."
              },
              {
                "code": "10063057",
                "display": "Cystitis noninfective",
                "definition": "A disorder characterized by inflammation of the bladder which is not caused by an infection of the urinary tract."
              },
              {
                "code": "10063190",
                "display": "Rectal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the rectum."
              },
              {
                "code": "10063524",
                "display": "Bronchial stricture",
                "definition": "A disorder characterized by a narrowing of the bronchial tube."
              },
              {
                "code": "10063575",
                "display": "Bladder perforation",
                "definition": "A disorder characterized by a rupture in the bladder wall."
              },
              {
                "code": "10063636",
                "display": "Pyramidal tract syndrome",
                "definition": "A disorder characterized by dysfunction of the corticospinal (pyramidal) tracts of the spinal cord. Symptoms include an increase in the muscle tone in the lower extremities, hyperreflexia, positive Babinski and a decrease in fine motor coordination."
              },
              {
                "code": "10063761",
                "display": "Reversible posterior leukoencephalopathy syndrome",
                "definition": "A disorder characterized by headaches, mental status changes, visual disturbances, and seizures associated with imaging findings of posterior leukoencephalopathy. It has been observed in association with hypertensive encephalopathy, eclampsia, and immunosuppressive and cytotoxic drug treatment. It is an acute or subacute reversible condition."
              },
              {
                "code": "10064026",
                "display": "Pelvic floor muscle weakness",
                "definition": "A disorder characterized by a reduction in the strength of the muscles of the pelvic floor."
              },
              {
                "code": "10064505",
                "display": "Stoma site infection",
                "definition": "A disorder characterized by an infectious process involving a stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "10064658",
                "display": "Osteonecrosis of jaw",
                "definition": "A disorder characterized by a necrotic process occurring in the bone of the mandible."
              },
              {
                "code": "10064687",
                "display": "Device related infection",
                "definition": "A disorder characterized by an infectious process involving the use of a medical device."
              },
              {
                "code": "10064774",
                "display": "Infusion site extravasation",
                "definition": "A disorder characterized by leakage of a pharmacologic or a biologic substance from the infusion site into the surrounding tissue. Signs and symptoms include induration, erythema, swelling, burning sensation and marked discomfort at the infusion site."
              },
              {
                "code": "10064848",
                "display": "Chronic kidney disease",
                "definition": "A disorder characterized by gradual and usually permanent loss of kidney function resulting in renal failure."
              },
              {
                "code": "10065368",
                "display": "Urinary fistula",
                "definition": "A disorder characterized by an abnormal communication between any part of the urinary system and another organ or anatomic site."
              },
              {
                "code": "10065417",
                "display": "Brachial plexopathy",
                "definition": "A disorder characterized by regional paresthesia of the brachial plexus, marked discomfort and muscle weakness, and limited movement in the arm or hand."
              },
              {
                "code": "10065703",
                "display": "Pancreatic duct stenosis",
                "definition": "A disorder characterized by a narrowing of the lumen of the pancreatic duct."
              },
              {
                "code": "10065704",
                "display": "Peritoneal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the peritoneum."
              },
              {
                "code": "10065705",
                "display": "Pharyngeal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a pharyngeal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065706",
                "display": "Pharyngeal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the pharynx."
              },
              {
                "code": "10065707",
                "display": "Rectal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the rectum."
              },
              {
                "code": "10065709",
                "display": "Rectal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the rectal wall."
              },
              {
                "code": "10065710",
                "display": "Small intestinal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the small intestine."
              },
              {
                "code": "10065712",
                "display": "Gastrointestinal stoma necrosis",
                "definition": "A finding of a necrotic process occurring in the gastrointestinal tract stoma."
              },
              {
                "code": "10065713",
                "display": "Gastric fistula",
                "definition": "A disorder characterized by an abnormal communication between the stomach and another organ or anatomic site."
              },
              {
                "code": "10065719",
                "display": "Jejunal fistula",
                "definition": "A disorder characterized by an abnormal communication between the jejunum and another organ or anatomic site."
              },
              {
                "code": "10065720",
                "display": "Oral cavity fistula",
                "definition": "A disorder characterized by an abnormal communication between the oral cavity and another organ or anatomic site."
              },
              {
                "code": "10065721",
                "display": "Anal mucositis",
                "definition": "A disorder characterized by inflammation of the mucous membrane of the anus."
              },
              {
                "code": "10065722",
                "display": "Anal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the anal region."
              },
              {
                "code": "10065727",
                "display": "Esophageal necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the esophageal wall."
              },
              {
                "code": "10065728",
                "display": "Ileal fistula",
                "definition": "A disorder characterized by an abnormal communication between the ileum and another organ or anatomic site."
              },
              {
                "code": "10065730",
                "display": "Ileal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the ileum."
              },
              {
                "code": "10065732",
                "display": "Jejunal obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the intestinal contents in the jejunum."
              },
              {
                "code": "10065735",
                "display": "Laryngeal inflammation",
                "definition": "A disorder characterized by an inflammation involving the larynx."
              },
              {
                "code": "10065738",
                "display": "Unequal limb length",
                "definition": "A disorder characterized by of a discrepancy between the lengths of the lower or upper extremities."
              },
              {
                "code": "10065744",
                "display": "Arteritis infective",
                "definition": "A disorder characterized by an infectious process involving an artery."
              },
              {
                "code": "10065745",
                "display": "Prolapse of intestinal stoma",
                "definition": "A finding of protrusion of the intestinal stoma (surgically created opening on the surface of the body) above the abdominal surface."
              },
              {
                "code": "10065746",
                "display": "Bronchopulmonary hemorrhage",
                "definition": "A disorder characterized by bleeding from the bronchial wall and/or lung parenchyma."
              },
              {
                "code": "10065747",
                "display": "Cecal hemorrhage",
                "definition": "A disorder characterized by bleeding from the cecum."
              },
              {
                "code": "10065748",
                "display": "Urostomy site bleeding",
                "definition": "A finding of bleeding from the urostomy site."
              },
              {
                "code": "10065749",
                "display": "Tracheostomy site bleeding",
                "definition": "A finding of blood leakage from the tracheostomy site."
              },
              {
                "code": "10065752",
                "display": "Duodenal infection",
                "definition": "A disorder characterized by an infectious process involving the duodenum."
              },
              {
                "code": "10065755",
                "display": "Lip infection",
                "definition": "A disorder characterized by an infectious process involving the lips."
              },
              {
                "code": "10065759",
                "display": "Laryngeal hemorrhage",
                "definition": "A disorder characterized by bleeding from the larynx."
              },
              {
                "code": "10065761",
                "display": "Cecal infection",
                "definition": "A disorder characterized by an infectious process involving the cecum."
              },
              {
                "code": "10065762",
                "display": "Spermatic cord hemorrhage",
                "definition": "A disorder characterized by bleeding from the spermatic cord."
              },
              {
                "code": "10065763",
                "display": "Ovarian hemorrhage",
                "definition": "A disorder characterized by bleeding from the ovary."
              },
              {
                "code": "10065764",
                "display": "Mucosal infection",
                "definition": "A disorder characterized by an infectious process involving a mucosal surface."
              },
              {
                "code": "10065765",
                "display": "Cranial nerve infection",
                "definition": "A disorder characterized by an infectious process involving a cranial nerve."
              },
              {
                "code": "10065766",
                "display": "Peripheral nerve infection",
                "definition": "A disorder characterized by an infectious process involving the peripheral nerves."
              },
              {
                "code": "10065771",
                "display": "Small intestine infection",
                "definition": "A disorder characterized by an infectious process involving the small intestine."
              },
              {
                "code": "10065772",
                "display": "Vulval infection",
                "definition": "A disorder characterized by an infectious process involving the vulva."
              },
              {
                "code": "10065773",
                "display": "Lymph leakage",
                "definition": "A disorder characterized by the loss of lymph fluid into the surrounding tissue or body cavity."
              },
              {
                "code": "10065775",
                "display": "Abdominal soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the abdominal wall."
              },
              {
                "code": "10065776",
                "display": "Muscle weakness lower limb",
                "definition": "A disorder characterized by a reduction in the strength of the lower limb muscles."
              },
              {
                "code": "10065777",
                "display": "Soft tissue necrosis lower limb",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the lower extremity."
              },
              {
                "code": "10065778",
                "display": "Soft tissue necrosis upper limb",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the upper extremity."
              },
              {
                "code": "10065779",
                "display": "Head soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the head."
              },
              {
                "code": "10065780",
                "display": "Muscle weakness left-sided",
                "definition": "A disorder characterized by a reduction in the strength of the muscles on the left side of the body."
              },
              {
                "code": "10065781",
                "display": "Neck soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the neck."
              },
              {
                "code": "10065783",
                "display": "Musculoskeletal deformity",
                "definition": "A disorder characterized by of a malformation of the musculoskeletal system."
              },
              {
                "code": "10065784",
                "display": "Central nervous system necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the brain and/or spinal cord."
              },
              {
                "code": "10065785",
                "display": "External ear pain",
                "definition": "A disorder characterized by a sensation of marked discomfort in the external ear region."
              },
              {
                "code": "10065786",
                "display": "Laryngeal fistula",
                "definition": "A disorder characterized by an abnormal communication between the larynx and another organ or anatomic site."
              },
              {
                "code": "10065787",
                "display": "Tracheal fistula",
                "definition": "A disorder characterized by an abnormal communication between the trachea and another organ or anatomic site."
              },
              {
                "code": "10065788",
                "display": "Fallopian tube anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a fallopian tube anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065789",
                "display": "Fallopian tube obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents in the fallopian tube."
              },
              {
                "code": "10065790",
                "display": "Fallopian tube perforation",
                "definition": "A finding of rupture of the fallopian tube wall."
              },
              {
                "code": "10065791",
                "display": "Fallopian tube stenosis",
                "definition": "A disorder characterized by a narrowing of the fallopian tube lumen."
              },
              {
                "code": "10065793",
                "display": "Pelvic soft tissue necrosis",
                "definition": "A disorder characterized by a necrotic process occurring in the soft tissues of the pelvis."
              },
              {
                "code": "10065794",
                "display": "Muscle weakness right-sided",
                "definition": "A disorder characterized by a reduction in the strength of the muscles on the right side of the body."
              },
              {
                "code": "10065795",
                "display": "Muscle weakness trunk",
                "definition": "A disorder characterized by a reduction in the strength of the trunk muscles."
              },
              {
                "code": "10065796",
                "display": "Joint range of motion decreased cervical spine",
                "definition": "A disorder characterized by a decrease in flexibility of a cervical spine joint."
              },
              {
                "code": "10065798",
                "display": "Superficial soft tissue fibrosis",
                "definition": "A disorder characterized by fibrotic degeneration of the superficial soft tissues."
              },
              {
                "code": "10065799",
                "display": "Fibrosis deep connective tissue",
                "definition": "A disorder characterized by fibrotic degeneration of the deep connective tissues."
              },
              {
                "code": "10065800",
                "display": "Joint range of motion decreased lumbar spine",
                "definition": "A disorder characterized by a decrease in flexibility of a lumbar spine joint."
              },
              {
                "code": "10065802",
                "display": "Bladder anastomotic leak",
                "definition": "A finding of leakage of urine due to breakdown of a bladder anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065803",
                "display": "Kidney anastomotic leak",
                "definition": "A finding of leakage of urine due to breakdown of a kidney anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065805",
                "display": "Spermatic cord obstruction",
                "definition": "A disorder characterized by blockage of the normal flow of the contents of the spermatic cord."
              },
              {
                "code": "10065811",
                "display": "Uterine fistula",
                "definition": "A disorder characterized by an abnormal communication between the uterus and another organ or anatomic site."
              },
              {
                "code": "10065813",
                "display": "Vaginal fistula",
                "definition": "A disorder characterized by an abnormal communication between the vagina and another organ or anatomic site."
              },
              {
                "code": "10065814",
                "display": "Ureteric anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a ureteral anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065815",
                "display": "Urethral anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a urethral anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065817",
                "display": "Vaginal obstruction",
                "definition": "A disorder characterized by blockage of vaginal canal."
              },
              {
                "code": "10065818",
                "display": "Vaginal perforation",
                "definition": "A disorder characterized by a rupture in the vaginal wall."
              },
              {
                "code": "10065822",
                "display": "Prolapse of urostomy",
                "definition": "A finding of displacement of the urostomy."
              },
              {
                "code": "10065823",
                "display": "Nipple deformity",
                "definition": "A disorder characterized by a malformation of the nipple."
              },
              {
                "code": "10065825",
                "display": "Intraoperative gastrointestinal injury",
                "definition": "A finding of damage to the gastrointestinal system during a surgical procedure."
              },
              {
                "code": "10065826",
                "display": "Intraoperative arterial injury",
                "definition": "A finding of damage to an artery during a surgical procedure."
              },
              {
                "code": "10065827",
                "display": "Intraoperative hepatobiliary injury",
                "definition": "A finding of damage to the hepatic parenchyma and/or biliary tract during a surgical procedure."
              },
              {
                "code": "10065828",
                "display": "Intraoperative urinary injury",
                "definition": "A finding of damage to the urinary system during a surgical procedure."
              },
              {
                "code": "10065829",
                "display": "Intraoperative musculoskeletal injury",
                "definition": "A finding of damage to the musculoskeletal system during a surgical procedure."
              },
              {
                "code": "10065830",
                "display": "Intraoperative neurological injury",
                "definition": "A finding of damage to the nervous system during a surgical procedure."
              },
              {
                "code": "10065831",
                "display": "Intraoperative breast injury",
                "definition": "A finding of damage to the breast parenchyma during a surgical procedure."
              },
              {
                "code": "10065832",
                "display": "Intraoperative respiratory injury",
                "definition": "A finding of damage to the respiratory system during a surgical procedure."
              },
              {
                "code": "10065834",
                "display": "Intraoperative endocrine injury",
                "definition": "A finding of damage to the endocrine gland during a surgical procedure."
              },
              {
                "code": "10065836",
                "display": "IVth nerve disorder",
                "definition": "A disorder characterized by involvement of the trochlear nerve (fourth cranial nerve)."
              },
              {
                "code": "10065837",
                "display": "External ear inflammation",
                "definition": "A disorder characterized by inflammation, swelling and redness to the outer ear and ear canal."
              },
              {
                "code": "10065838",
                "display": "Middle ear inflammation",
                "definition": "A disorder characterized by inflammation (physiologic response to irritation), swelling and redness to the middle ear."
              },
              {
                "code": "10065840",
                "display": "Intraoperative reproductive tract injury",
                "definition": "A finding of damage to the reproductive organs during a surgical procedure."
              },
              {
                "code": "10065841",
                "display": "Intraoperative ocular injury",
                "definition": "A finding of damage to the eye during a surgical procedure."
              },
              {
                "code": "10065842",
                "display": "Intraoperative head and neck injury",
                "definition": "A finding of damage to the head and neck during a surgical procedure."
              },
              {
                "code": "10065843",
                "display": "Intraoperative cardiac injury",
                "definition": "A finding of damage to the heart during a surgical procedure."
              },
              {
                "code": "10065844",
                "display": "Intraoperative ear injury",
                "definition": "A finding of damage to the ear during a surgical procedure."
              },
              {
                "code": "10065845",
                "display": "Intraoperative renal injury",
                "definition": "A finding of damage to the kidney during a surgical procedure."
              },
              {
                "code": "10065846",
                "display": "Intraoperative skin injury",
                "definition": "A finding of damage to the skin during a surgical procedure."
              },
              {
                "code": "10065847",
                "display": "Intraoperative splenic injury",
                "definition": "A finding of damage to the spleen during a surgical procedure."
              },
              {
                "code": "10065848",
                "display": "Intraoperative venous injury",
                "definition": "A finding of damage to a vein during a surgical procedure."
              },
              {
                "code": "10065849",
                "display": "Injury to jugular vein",
                "definition": "A finding of damage to the jugular vein."
              },
              {
                "code": "10065851",
                "display": "Esophageal fistula",
                "definition": "A disorder characterized by an abnormal communication between the esophagus and another organ or anatomic site."
              },
              {
                "code": "10065873",
                "display": "Pulmonary fistula",
                "definition": "A disorder characterized by an abnormal communication between the lung and another organ or anatomic site."
              },
              {
                "code": "10065879",
                "display": "Gastrointestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a gastrointestinal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065880",
                "display": "Laryngeal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the larynx."
              },
              {
                "code": "10065881",
                "display": "Pharyngeal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the pharynx."
              },
              {
                "code": "10065882",
                "display": "Urostomy leak",
                "definition": "A finding of leakage of contents from a urostomy."
              },
              {
                "code": "10065883",
                "display": "Urostomy obstruction",
                "definition": "A finding of blockage of the urostomy."
              },
              {
                "code": "10065885",
                "display": "Urostomy stenosis",
                "definition": "A finding of narrowing of the opening of a urostomy."
              },
              {
                "code": "10065886",
                "display": "Uterine anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a uterine anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065887",
                "display": "Vaginal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a vaginal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065888",
                "display": "Vas deferens anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a vas deferens anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065891",
                "display": "Large intestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an anastomosis (surgical connection of two separate anatomic structures) in the large intestine."
              },
              {
                "code": "10065892",
                "display": "Small intestinal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an anastomosis (surgical connection of two separate anatomic structures) in the small bowel."
              },
              {
                "code": "10065893",
                "display": "Gastric anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a gastric anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065894",
                "display": "Rectal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a rectal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065895",
                "display": "Muscle weakness upper limb",
                "definition": "A disorder characterized by a reduction in the strength of the upper limb muscles."
              },
              {
                "code": "10065897",
                "display": "Spermatic cord anastomotic leak",
                "definition": "A finding of leakage due to breakdown of a spermatic cord anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065898",
                "display": "Stenosis of gastrointestinal stoma",
                "definition": "A finding of narrowing of the gastrointestinal stoma (surgically created opening on the surface of the body)."
              },
              {
                "code": "10065900",
                "display": "Tracheal mucositis",
                "definition": "A disorder characterized by an inflammation involving the mucous membrane of the trachea."
              },
              {
                "code": "10065906",
                "display": "Carbon monoxide diffusing capacity decreased",
                "definition": "A finding based on lung function test results that indicate a decrease in the lung capacity to absorb carbon monoxide."
              },
              {
                "code": "10065928",
                "display": "Uterine obstruction",
                "definition": "A disorder characterized by blockage of the uterine outlet."
              },
              {
                "code": "10065961",
                "display": "Esophageal anastomotic leak",
                "definition": "A finding of leakage due to breakdown of an esophageal anastomosis (surgical connection of two separate anatomic structures)."
              },
              {
                "code": "10065973",
                "display": "Iron overload",
                "definition": "A disorder characterized by accumulation of iron in the tissues."
              },
              {
                "code": "10066480",
                "display": "Avascular necrosis",
                "definition": "A disorder characterized by necrotic changes in the bone tissue due to interruption of blood supply. Most often affecting the epiphysis of the long bones, the necrotic changes result in the collapse and the destruction of the bone structure."
              },
              {
                "code": "10066874",
                "display": "Gastroesophageal reflux disease",
                "definition": "A disorder characterized by reflux of the gastric and/or duodenal contents into the distal esophagus. It is chronic in nature and usually caused by incompetence of the lower esophageal sphincter, and may result in injury to the esophageal mucosal. Symptoms include heartburn and acid indigestion."
              },
              {
                "code": "10069138",
                "display": "Papulopustular rash",
                "definition": "A disorder characterized by an eruption consisting of papules (a small, raised pimple) and pustules (a small pus filled blister), typically appearing in face, scalp, and upper chest and back Unlike acne, this rash does not present with whiteheads or blackheads, and can be symptomatic, with itchy or tender lesions."
              },
              {
                "code": "10069339",
                "display": "Acute kidney injury",
                "definition": "A disorder characterized by the acute loss of renal function and is traditionally classified as pre-renal (low blood flow into kidney), renal (kidney damage) and post-renal causes (ureteral or bladder outflow obstruction)."
              },
              {
                "code": "10069501",
                "display": "Left ventricular systolic dysfunction",
                "definition": "A disorder characterized by failure of the left ventricle to produce adequate output despite an increase in distending pressure and in end-diastolic volume. Clinical manifestations mayinclude dyspnea, orthopnea, and other signs and symptoms of pulmonary congestion and edema."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e57358-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557050v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e57358-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e97042-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557842v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Definite",
                "display": "DEFINITE",
                "definition": "No Value Exists"
              },
              {
                "code": "Possible",
                "display": "POSSIBLE",
                "definition": "POSSIBLE"
              },
              {
                "code": "Probable",
                "display": "PROBABLE",
                "definition": "PROBABLE"
              },
              {
                "code": "Unlikely",
                "display": "UNLIKELY",
                "definition": "UNLIKELY"
              },
              {
                "code": "Unrelated",
                "display": "UNRELATED",
                "definition": "UNRELATED"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e97042-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557842v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e97042-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e97392-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557851v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Not known, not observed, not recorded, or refused."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e97392-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557851v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e97392-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e97594-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557856v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e97594-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557856v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e97594-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e97746-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557859v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e97746-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557859v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e97746-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e98036-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557913v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e98036-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557913v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e98036-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e98234-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557028v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e98234-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557028v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e98234-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e98385-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557896v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Fatal",
                "display": "Death",
                "definition": "The absence of life or state of being dead."
              },
              {
                "code": "Not Recovered/Not Resolved",
                "display": "NOT RECOVERED OR NOT RESOLVED",
                "definition": "One of the possible results of an adverse event outcome that indicates that the event has not improved or recuperated."
              },
              {
                "code": "Recovered/Resolved",
                "display": "Recovered or Resolved",
                "definition": "One of the possible results of an adverse event outcome that indicates that the event has improved or recuperated."
              },
              {
                "code": "Recovered/Resolved with Sequelae",
                "display": "RECOVERED OR RESOLVED WITH SEQUELAE",
                "definition": "One of the possible results of an adverse event outcome where the subject recuperated but retained pathological conditions resulting from the prior disease or injury."
              },
              {
                "code": "Recovering/Resolving",
                "display": "RECOVERING OR RESOLVING",
                "definition": "One of the possible results of an adverse event outcome that indicates that the event is improving."
              },
              {
                "code": "Unknown",
                "display": "Unknown",
                "definition": "Not known, not observed, not recorded, or refused."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e98385-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557896v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e98385-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e98732-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557906v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "1",
                "display": "single episode",
                "definition": "single episode"
              },
              {
                "code": "2",
                "display": "intermittent",
                "definition": "intermittent"
              },
              {
                "code": "3",
                "display": "CONTINUOUS",
                "definition": "Existing in time or space without stop or interruption."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e98732-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557906v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e98732-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e98928-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557917v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "Yes",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              },
              {
                "code": "No",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              },
              {
                "code": "N/A",
                "display": "Not Applicable",
                "definition": "Determination of a value is not relevant in the current context."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e98928-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3557917v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e98928-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e99214-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556199v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "1",
                "display": "Results in Death",
                "definition": "Results in Death"
              },
              {
                "code": "2",
                "display": "Is life-threatening",
                "definition": "Is life-threatening"
              },
              {
                "code": "3",
                "display": "Requires inpatient hospitalization or prolongation of existing hospitalization",
                "definition": "Requires inpatient hospitalization or prolongation of existing hospitalization"
              },
              {
                "code": "4",
                "display": "Results in persistent or significant disability/incapacity",
                "definition": "Results in persistent or significant disability/incapacity"
              },
              {
                "code": "5",
                "display": "Is a congenital anomaly/birth defect",
                "definition": "Is a congenital anomaly/birth defect"
              },
              {
                "code": "6",
                "display": "In the medical judgment of the treating physician and/or investigator, it may jeopardize the participant or require intervention to prevent one of these outcomes",
                "definition": "In the medical judgment of the treating physician and/or investigator, it may jeopardize the participant or require intervention to prevent one of these outcomes"
              },
              {
                "code": "7",
                "display": "Other, specify",
                "definition": "Other, specify"
              },
              {
                "code": "8",
                "display": "Meets criteria per protocol but does not meet other criterion (above)",
                "definition": "Meets criteria per protocol but does not meet other criterion (above)"
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e99214-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556199v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e99214-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "resourceType": "CodeSystem",
            "id": "d1e99668-cs",
            "url": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556209v2.0-cs",
            "status": "active",
            "content": "complete",
            "concept": [
              {
                "code": "N",
                "display": "No",
                "definition": "The non-affirmative response to a question."
              },
              {
                "code": "Y",
                "display": "Yes",
                "definition": "The affirmative response to a question or activity."
              }
            ]
          },
          {
            "resourceType": "ValueSet",
            "id": "d1e99668-vs",
            "status": "active",
            "compose": {
              "include": [
                {
                  "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier/3265657v2.0/question_identifier#3556209v2.0-cs",
                  "_system": {
                    "extension": [
                      {
                        "url": "http://hl7.org/fhir/StructureDefinition/valueset-system",
                        "valueReference": {
                          "reference": "#d1e99668-cs"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ],
        "url": "http://hl7.org/fhir/Questionnaire/3265657v2.0",
        "identifier": [
          {
            "system": "http://nci.nih.gov/xml/owl/cadsr/form/form_design_identifier",
            "value": "3265657v2.0/"
          }
        ],
        "status": "published",
        "date": "2012-08-15",
        "publisher": "National Cancer Institute (NCI)",
        "useContext": [
          {
            "coding": [
              {
                "code": "CRF"
              }
            ]
          }
        ],
        "title": "Adverse Event/Serious Adverse Event CTCAE v4 NCI Standard Template",
        "item": [
          {
            "linkId": "3556213v2.0",
            "text": "Mandatory Adverse Event Questions",
            "type": "group",
            "required": true,
            "item": [
              {
                "text": "Must be included when this data is collected for reporting.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#3125302v1.1"
                    }
                  }
                ],
                "linkId": "3556214v2.0",
                "text": "Adverse Event Term (v4.0)",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e14927-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2188132v1.0"
                    }
                  }
                ],
                "linkId": "3557006v2.0",
                "text": "Describe 'Other' Adverse Event",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2944515v1.0"
                    }
                  }
                ],
                "linkId": "3557008v2.0",
                "text": "Adverse Event Grade",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e54652-vs"
                }
              }
            ]
          },
          {
            "linkId": "3557016v2.0",
            "text": "Conditional Adverse Event Questions",
            "type": "group",
            "item": [
              {
                "text": "There are business rules to indicate situations under which this data element should be used in a CRF.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 4
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/entryFormat",
                    "valueString": "MM/DD/YYYY"
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2744993v1.0"
                    }
                  }
                ],
                "linkId": "3557017v2.0",
                "text": "AE Start Date",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2552398v1.0"
                    }
                  }
                ],
                "linkId": "3557021v2.0",
                "text": "Was patient hospitalized for toxicity?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e55041-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2744948v1.0"
                    }
                  }
                ],
                "linkId": "3557025v2.0",
                "text": "Cycle #",
                "type": "string"
              }
            ]
          },
          {
            "linkId": "3557027v2.0",
            "text": "Optional Adverse Event Questions",
            "type": "group",
            "item": [
              {
                "text": "No requirement for inclusion of this element on the CRF; if the design and scientific questions posed in the study dictate the need to collect this type of data, this is the element to include on the CRF.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2179892v2.0"
                    }
                  }
                ],
                "linkId": "3557032v2.0",
                "text": "To what is the AE attributed?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e55265-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2201348v1.0"
                    }
                  }
                ],
                "linkId": "3557863v2.0",
                "text": "Other Attribution, Specify",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/entryFormat",
                    "valueString": "DD/MON/YYYY"
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2189843v1.0"
                    }
                  }
                ],
                "linkId": "3557046v2.0",
                "text": "AE Stop Date",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2943864v1.0"
                    }
                  }
                ],
                "linkId": "3557869v2.0",
                "text": "MedDRA System Organ Class (SOC)",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e56008-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 8
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#3133353v1.0"
                    }
                  }
                ],
                "linkId": "3557050v2.0",
                "text": "MedDRA AE Code (CTCAE v4.0)",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e57358-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#1285v3.0"
                    }
                  }
                ],
                "linkId": "3557842v2.0",
                "text": "AE Attribution",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e97042-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2006851v4.0"
                    }
                  }
                ],
                "linkId": "3557849v2.0",
                "text": "Reporting Period End Date",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2179971v1.0"
                    }
                  }
                ],
                "linkId": "3557851v2.0",
                "text": "Were adverse events assessed during most recent period",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e97392-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2183619v1.0"
                    }
                  }
                ],
                "linkId": "3557856v2.0",
                "text": "Expected? (Yes/No)",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e97594-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2199908v1.0"
                    }
                  }
                ],
                "linkId": "3557859v2.0",
                "text": "Serious?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e97746-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2585234v1.0"
                    }
                  }
                ],
                "linkId": "3557911v2.0",
                "text": "Event Onset Time",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2732184v1.0"
                    }
                  }
                ],
                "linkId": "3557865v2.0",
                "text": "Course",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2744943v1.0"
                    }
                  }
                ],
                "linkId": "3557867v2.0",
                "text": "AE Evaluation Period Start Date",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2746280v1.0"
                    }
                  }
                ],
                "linkId": "3557913v2.0",
                "text": "Pre-existing AE?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e98036-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2746301v1.0"
                    }
                  }
                ],
                "linkId": "3557904v2.0",
                "text": "AE Resolved Time",
                "type": "string"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2746311v1.0"
                    }
                  }
                ],
                "linkId": "3557028v2.0",
                "text": "AE Ongoing?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e98234-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2746517v1.0"
                    }
                  }
                ],
                "linkId": "3557896v2.0",
                "text": "Participant Status/Outcome",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e98385-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2008418v1.0"
                    }
                  }
                ],
                "linkId": "3557906v2.0",
                "text": "Adverse Event Condition Pattern",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e98732-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 2
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2179615v1.0"
                    }
                  }
                ],
                "linkId": "3557917v2.0",
                "text": "Did event reappear after study agent was reintroduced?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e98928-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#797v5.0"
                    }
                  }
                ],
                "linkId": "3557922v2.0",
                "text": "Comments",
                "type": "string"
              }
            ]
          },
          {
            "linkId": "3556197v2.0",
            "text": "Optional Serious Adverse Event Questions",
            "type": "group",
            "item": [
              {
                "text": "The following additional elements are optional on a SAE form.",
                "type": "display"
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2179679v3.0"
                    }
                  }
                ],
                "linkId": "3556199v2.0",
                "text": "Why serious?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e99214-vs"
                }
              },
              {
                "extension": [
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/minLength",
                    "valueInteger": 1
                  },
                  {
                    "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-deReference",
                    "valueReference": {
                      "reference": "http://nci.nih.gov/xml/owl/cadsr/data_element_scoped_identifier#2004106v3.0"
                    }
                  }
                ],
                "linkId": "3556209v2.0",
                "text": "Dose-Limiting Toxicity?",
                "type": "open-choice",
                "options": {
                  "reference": "#d1e99668-vs"
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
