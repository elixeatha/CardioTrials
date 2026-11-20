/* Trial data. Edit this file to add or correct trials (see README for the schema).
   Loaded as a plain script so the app also works when opened from disk (file://). */
window.TRIALS = [
 {
  "n": "4S",
  "full": "Scandinavian Simvastatin Survival Study",
  "y": 1994,
  "j": "Lancet",
  "cat": "Lipids",
  "pop": "Angina or prior MI; total cholesterol 5.5–8.0 mmol/L",
  "N": "4,444",
  "arms": [
   "Simvastatin 20–40 mg",
   "Placebo"
  ],
  "fu": "Median 5.4 years",
  "ep": "All-cause mortality",
  "stat": "Mortality 8% vs 12% (RR 0.70)",
  "f": "Simvastatin cut total mortality by about 30% in patients with coronary disease",
  "fw": [
   "Simvastatin reduced coronary events but did not change mortality",
   "Simvastatin increased non-cardiovascular deaths, offsetting benefit",
   "No benefit in patients with a prior MI"
  ],
  "q": [
   [
    "What made this trial a milestone in lipid-lowering?",
    "First statin trial to show a mortality benefit in secondary prevention",
    [
     "First trial of PCSK9 inhibition",
     "First to show statins work in primary prevention",
     "Showed very low LDL levels are harmful"
    ],
    "It showed that lowering cholesterol saves lives in established CHD, launching the statin era."
   ],
   [
    "Who was enrolled?",
    "Patients with angina or previous MI and raised cholesterol",
    [
     "Healthy men with high cholesterol",
     "Diabetics without vascular disease",
     "Elderly patients with heart failure"
    ],
    "A secondary-prevention population with elevated total cholesterol."
   ]
  ],
  "km": [
   5.4,
   "years",
   [
    8,
    12
   ]
  ]
 },
 {
  "n": "WOSCOPS",
  "full": "West of Scotland Coronary Prevention Study",
  "y": 1995,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "Men aged 45–64, raised LDL, no prior MI",
  "N": "6,595",
  "arms": [
   "Pravastatin 40 mg",
   "Placebo"
  ],
  "fu": "Mean 4.9 years",
  "ep": "Non-fatal MI or CHD death",
  "stat": "31% relative risk reduction",
  "f": "Pravastatin cut non-fatal MI or CHD death by about 31% in men without prior MI",
  "fw": [
   "Pravastatin lowered LDL but did not change clinical events",
   "Benefit was confined to men with prior MI",
   "Pravastatin raised cancer deaths, cancelling benefit"
  ],
  "q": [
   [
    "WOSCOPS supported statins in which setting?",
    "Primary prevention in hypercholesterolaemic men",
    [
     "Secondary prevention after MI",
     "Acute coronary syndrome",
     "Heart failure"
    ],
    "It was the first major statin primary-prevention outcome trial."
   ],
   [
    "Which statin was used?",
    "Pravastatin",
    [
     "Simvastatin",
     "Atorvastatin",
     "Rosuvastatin"
    ],
    "Pravastatin 40 mg daily versus placebo."
   ]
  ],
  "km": [
   4.9,
   "years",
   [
    5.5,
    7.9
   ]
  ]
 },
 {
  "n": "CAST I",
  "full": "Cardiac Arrhythmia Suppression Trial I",
  "y": 1991,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Post-MI patients with asymptomatic or mild ventricular ectopy",
  "N": "~1,500 (CAST I)",
  "arms": [
   "Encainide or flecainide",
   "Placebo"
  ],
  "fu": "Mean 10 months",
  "ep": "Arrhythmic death or cardiac arrest",
  "stat": "4.5% vs 1.2% (RR 3.6)",
  "f": "Suppressing ventricular ectopy with class IC drugs increased mortality",
  "fw": [
   "Class IC drugs reduced sudden death after MI",
   "No difference between drug and placebo",
   "Benefit seen only in patients with EF above 40%"
  ],
  "q": [
   [
    "What lesson did CAST teach?",
    "Suppressing an arrhythmia surrogate does not mean better outcomes",
    [
     "Beta-blockers are harmful after MI",
     "ICDs always outperform drugs",
     "Ventricular ectopy never needs evaluation"
    ],
    "Drugs that cleaned up the ECG killed patients: surrogate endpoints can mislead."
   ],
   [
    "Class IC agents are now generally avoided in whom?",
    "Patients with structural heart disease or prior MI",
    [
     "Young patients with lone AF",
     "Patients with a normal ECG",
     "Patients with SVT only"
    ],
    "CAST underpins this contraindication."
   ]
  ],
  "km": [
   10,
   "months",
   [
    4.5,
    1.2
   ]
  ]
 },
 {
  "n": "ISIS-2",
  "full": "Second International Study of Infarct Survival",
  "y": 1988,
  "j": "Lancet",
  "cat": "Acute coronary",
  "pop": "Suspected acute MI, within 24 hours of onset",
  "N": "17,187",
  "arms": [
   "Streptokinase",
   "Aspirin",
   "Both",
   "Neither (placebo)"
  ],
  "fu": "5-week vascular mortality",
  "ep": "Vascular mortality at 5 weeks",
  "stat": "Combination ~42% reduction",
  "f": "Streptokinase and aspirin each cut mortality, with additive benefit when combined",
  "fw": [
   "Streptokinase helped but aspirin did not",
   "Aspirin helped but streptokinase caused excess death",
   "Neither reduced mortality; only reinfarction fell"
  ],
  "q": [
   [
    "What design did ISIS-2 use?",
    "2×2 factorial",
    [
     "Cluster randomised",
     "Non-inferiority crossover",
     "Open-label registry"
    ],
    "Each patient was randomised to streptokinase and/or aspirin versus placebo."
   ],
   [
    "What aspirin regimen was used?",
    "160 mg daily for one month",
    [
     "325 mg once only",
     "75 mg for one year",
     "1 g daily"
    ],
    "A low-cost intervention with a large effect."
   ]
  ],
  "km": [
   5,
   "weeks",
   [
    9.2,
    9.4,
    8,
    13.2
   ]
  ]
 },
 {
  "n": "AFFIRM",
  "full": "Atrial Fibrillation Follow-up Investigation of Rhythm Management",
  "y": 2002,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "AF, age ≥65 or with stroke/death risk factors",
  "N": "4,060",
  "arms": [
   "Rhythm control",
   "Rate control"
  ],
  "fu": "Mean 3.5 years",
  "ep": "All-cause mortality",
  "stat": "5-y mortality 23.8% vs 21.3% (HR 1.15)",
  "f": "Rhythm control gave no survival advantage over rate control",
  "fw": [
   "Rhythm control cut mortality by about 30%",
   "Rate control doubled stroke risk",
   "Rhythm control reduced hospitalisation substantially"
  ],
  "q": [
   [
    "When did most strokes occur in AFFIRM?",
    "When anticoagulation was stopped or INR was subtherapeutic",
    [
     "Only with INR 2–3",
     "Only in the rate-control arm",
     "Within the first week"
    ],
    "Sinus rhythm did not protect against stroke."
   ],
   [
    "What practical principle followed?",
    "Continue anticoagulation by stroke risk regardless of rhythm strategy",
    [
     "Sinus rhythm removes need for anticoagulation",
     "Amiodarone is first line",
     "Always target heart rate below 60"
    ],
    "Anticoagulation decisions follow stroke risk, not rhythm."
   ]
  ],
  "km": [
   5,
   "years",
   [
    23.8,
    21.3
   ]
  ]
 },
 {
  "n": "SOLVD",
  "full": "Studies of Left Ventricular Dysfunction (Treatment trial)",
  "y": 1991,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "Chronic heart failure, LVEF ≤35%",
  "N": "2,569",
  "arms": [
   "Enalapril",
   "Placebo"
  ],
  "fu": "Mean 41 months",
  "ep": "All-cause mortality",
  "stat": "35.2% vs 39.7% (RR 0.84)",
  "f": "Enalapril reduced mortality and HF hospitalisation in LV dysfunction",
  "fw": [
   "Enalapril reduced hospitalisation but not mortality",
   "Enalapril improved symptoms only",
   "Enalapril increased mortality through hypotension"
  ],
  "q": [
   [
    "Which drug class did SOLVD cement as foundation therapy in HFrEF?",
    "ACE inhibitors",
    [
     "ARBs",
     "Digoxin",
     "Calcium channel blockers"
    ],
    "Together with CONSENSUS it made ACEi standard for HFrEF."
   ],
   [
    "What did the companion SOLVD Prevention trial enrol?",
    "Asymptomatic LV dysfunction",
    [
     "Acute MI only",
     "HFpEF",
     "Valve disease only"
    ],
    "It showed enalapril reduced progression to symptomatic heart failure."
   ]
  ],
  "km": [
   41,
   "months",
   [
    35.2,
    39.7
   ]
  ]
 },
 {
  "n": "CONSENSUS",
  "full": "Cooperative North Scandinavian Enalapril Survival Study",
  "y": 1987,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "Severe heart failure, NYHA IV, on diuretics and digoxin",
  "N": "253",
  "arms": [
   "Enalapril",
   "Placebo"
  ],
  "fu": "6 months (to 20 months)",
  "ep": "Mortality at 6 months",
  "stat": "26% vs 44% (40% reduction)",
  "f": "Enalapril markedly reduced mortality in severe heart failure",
  "fw": [
   "No significant mortality difference",
   "Benefit only in mild heart failure",
   "Enalapril increased sudden death"
  ],
  "q": [
   [
    "Which NYHA class was enrolled?",
    "Class IV",
    [
     "Class I",
     "Class II",
     "Class III"
    ],
    "The sickest patients, with 44% placebo mortality at 6 months."
   ],
   [
    "Why was CONSENSUS notable?",
    "A small trial with a large effect that launched ACEi use in HF",
    [
     "First beta-blocker trial",
     "Largest HF trial of its era",
     "Neutral trial that still changed guidelines"
    ],
    "Only 253 patients, but a dramatic survival difference."
   ]
  ],
  "km": [
   6,
   "months",
   [
    26,
    44
   ]
  ]
 },
 {
  "n": "MADIT-II",
  "full": "Multicenter Automatic Defibrillator Implantation Trial II",
  "y": 2002,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Prior MI and LVEF ≤30%, no arrhythmia required",
  "N": "1,232",
  "arms": [
   "Prophylactic ICD",
   "Conventional therapy"
  ],
  "fu": "Average 20 months",
  "ep": "All-cause mortality",
  "stat": "14.2% vs 19.8% (HR 0.69)",
  "f": "Prophylactic ICD cut mortality after MI in patients with LVEF ≤30%",
  "fw": [
   "ICD helped only if VT was inducible at EP study",
   "No mortality benefit, only fewer appropriate shocks",
   "Benefit limited to NYHA IV patients"
  ],
  "q": [
   [
    "How did MADIT-II differ from MADIT-I?",
    "No EP-study inducibility required for enrolment",
    [
     "It included non-ischaemic cardiomyopathy",
     "It used amiodarone as control",
     "It required documented prior VT"
    ],
    "Low EF after MI alone was enough."
   ],
   [
    "Which trials showed no benefit from ICD implanted early after MI?",
    "DINAMIT and IRIS",
    [
     "AFFIRM and RACE",
     "SCD-HeFT and DANISH",
     "CAST and CASH"
    ],
    "MADIT-II required ≥40 days since MI; early ICDs did not help."
   ]
  ],
  "km": [
   20,
   "months",
   [
    14.2,
    19.8
   ]
  ]
 },
 {
  "n": "SCD-HeFT",
  "full": "Sudden Cardiac Death in Heart Failure Trial",
  "y": 2005,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "NYHA II–III heart failure, LVEF ≤35%, ischaemic or not",
  "N": "2,521",
  "arms": [
   "ICD",
   "Amiodarone",
   "Placebo"
  ],
  "fu": "Median 45.5 months",
  "ep": "All-cause mortality",
  "stat": "ICD HR 0.77; amiodarone HR 1.06",
  "f": "ICD reduced mortality by 23%; amiodarone gave no benefit",
  "fw": [
   "Amiodarone and ICD reduced mortality equally",
   "ICD helped only in ischaemic cardiomyopathy",
   "Amiodarone reduced mortality; ICD did not"
  ],
  "q": [
   [
    "Which aetiologies benefited from ICD?",
    "Both ischaemic and non-ischaemic",
    [
     "Ischaemic only",
     "Non-ischaemic only",
     "Neither on subgroup analysis"
    ],
    "Benefit looked similar in both (later DANISH challenged the non-ischaemic data)."
   ],
   [
    "What happened with amiodarone in NYHA III patients?",
    "Associated with increased mortality",
    [
     "Reduced mortality by 40%",
     "Equal to ICD",
     "Reduced sudden death only"
    ],
    "Amiodarone was not a substitute for an ICD."
   ]
  ],
  "km": [
   5,
   "years",
   [
    29,
    34,
    36
   ]
  ]
 },
 {
  "n": "PARADIGM-HF",
  "full": "Prospective Comparison of ARNI with ACEI to Determine Impact on Global Mortality and Morbidity in HF",
  "y": 2014,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HFrEF, NYHA II–IV, LVEF ≤40%, raised natriuretic peptides",
  "N": "8,442",
  "arms": [
   "Sacubitril/valsartan",
   "Enalapril"
  ],
  "fu": "Median 27 months; stopped early",
  "ep": "CV death or HF hospitalisation",
  "stat": "21.8% vs 26.5% (HR 0.80)",
  "f": "Sacubitril/valsartan beat enalapril, cutting CV death or HF admission by 20%",
  "fw": [
   "It was only non-inferior to enalapril",
   "It cut HF admission but not CV death",
   "Benefit was limited to NYHA IV patients"
  ],
  "q": [
   [
    "What is the ARNI mechanism?",
    "Neprilysin inhibition plus angiotensin receptor blockade",
    [
     "SGLT2 inhibition plus ACEi",
     "MRA plus beta-blocker",
     "If-channel inhibition plus ARB"
    ],
    "Raises natriuretic peptides while blocking the RAAS."
   ],
   [
    "What trial design feature was unusual?",
    "Sequential active run-in phases on enalapril then ARNI",
    [
     "Placebo-only run-in",
     "6-month washout",
     "Ivabradine titration phase"
    ],
    "The run-in removed patients intolerant to either drug."
   ]
  ],
  "km": [
   27,
   "months",
   [
    21.8,
    26.5
   ]
  ]
 },
 {
  "n": "DAPA-HF",
  "full": "Dapagliflozin and Prevention of Adverse Outcomes in Heart Failure",
  "y": 2019,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HFrEF NYHA II–IV, LVEF ≤40%, with or without diabetes",
  "N": "4,744",
  "arms": [
   "Dapagliflozin 10 mg",
   "Placebo"
  ],
  "fu": "Median 18.2 months",
  "ep": "Worsening HF or CV death",
  "stat": "16.3% vs 21.2% (HR 0.74)",
  "f": "Dapagliflozin reduced worsening HF or CV death, with or without diabetes",
  "fw": [
   "Benefit only in patients with diabetes",
   "Reduced HF admission but raised CV death",
   "No benefit on top of optimal ARNI"
  ],
  "q": [
   [
    "Roughly what proportion had no diabetes?",
    "About 55%",
    [
     "About 10%",
     "About 25%",
     "None"
    ],
    "Benefit was consistent regardless of diabetes status."
   ],
   [
    "What did DAPA-HF first show?",
    "SGLT2 inhibitor benefit in HFrEF patients without diabetes",
    [
     "ARNI superiority",
     "Ivabradine benefit",
     "MRA benefit in HFpEF"
    ],
    "It repositioned SGLT2 inhibitors as heart failure drugs."
   ]
  ],
  "km": [
   18,
   "months",
   [
    16.3,
    21.2
   ]
  ]
 },
 {
  "n": "EMPA-REG OUTCOME",
  "full": "Empagliflozin Cardiovascular Outcome Event Trial in Type 2 Diabetes Mellitus Patients",
  "y": 2015,
  "j": "N Engl J Med",
  "cat": "Diabetes",
  "pop": "Type 2 diabetes with established CV disease",
  "N": "7,020",
  "arms": [
   "Empagliflozin 10 or 25 mg",
   "Placebo"
  ],
  "fu": "Median 3.1 years",
  "ep": "3-point MACE",
  "stat": "10.5% vs 12.1% (HR 0.86); CV death HR 0.62",
  "f": "Empagliflozin reduced MACE, driven by 38% lower CV death",
  "fw": [
   "Neutral on MACE despite HbA1c lowering",
   "Reduced non-fatal MI only",
   "Increased HF hospitalisation"
  ],
  "q": [
   [
    "Which striking secondary result was seen?",
    "HF hospitalisation fell by about 35%",
    [
     "Stroke halved",
     "Amputations fell",
     "Retinopathy fell"
    ],
    "This hinted at the heart failure benefits later confirmed."
   ],
   [
    "What was the primary endpoint?",
    "CV death, non-fatal MI, non-fatal stroke",
    [
     "All-cause death, MI, revascularisation",
     "CV death, HF admission, stroke",
     "MI, stroke, amputation"
    ],
    "3-point MACE."
   ]
  ],
  "km": [
   3.1,
   "years",
   [
    10.5,
    12.1
   ]
  ]
 },
 {
  "n": "SPRINT",
  "full": "Systolic Blood Pressure Intervention Trial",
  "y": 2015,
  "j": "N Engl J Med",
  "cat": "Hypertension",
  "pop": "Age ≥50, SBP 130–180, high CV risk, no diabetes or stroke",
  "N": "9,361",
  "arms": [
   "Intensive (SBP <120)",
   "Standard (SBP <140)"
  ],
  "fu": "Median 3.26 years; stopped early",
  "ep": "MI, ACS, stroke, HF or CV death",
  "stat": "HR 0.75; all-cause death HR 0.73",
  "f": "Intensive BP control cut CV events by 25% and all-cause mortality by 27%",
  "fw": [
   "No difference in CV events",
   "Fewer events but doubled mortality",
   "Benefit only in under-75s"
  ],
  "q": [
   [
    "Who was excluded?",
    "People with diabetes or prior stroke",
    [
     "Over 75s",
     "Those with CKD",
     "Those with prior MI"
    ],
    "ACCORD-BP covered diabetes; SPRINT did not."
   ],
   [
    "Which adverse events were more frequent with intensive treatment?",
    "Hypotension, syncope, AKI and electrolyte abnormalities",
    [
     "Fractures only",
     "Stroke",
     "Cough and angioedema"
    ],
    "Benefit came with more treatment-related adverse events."
   ]
  ],
  "km": [
   3.3,
   "years",
   [
    5.2,
    6.8
   ]
  ]
 },
 {
  "n": "PROVE IT–TIMI 22",
  "full": "Pravastatin or Atorvastatin Evaluation and Infection Therapy–TIMI 22",
  "y": 2004,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "Hospitalised with ACS in prior 10 days",
  "N": "4,162",
  "arms": [
   "Atorvastatin 80 mg",
   "Pravastatin 40 mg"
  ],
  "fu": "Mean 24 months",
  "ep": "Death, MI, UA, revascularisation, stroke",
  "stat": "22.4% vs 26.3% (HR 0.84)",
  "f": "Intensive statin therapy beat standard therapy after ACS",
  "fw": [
   "No difference between regimens",
   "Pravastatin was superior",
   "Benefit appeared only after 2 years"
  ],
  "q": [
   [
    "What LDL was reached with intensive therapy?",
    "About 62 mg/dL (1.6 mmol/L)",
    [
     "About 100 mg/dL",
     "About 40 mg/dL",
     "About 130 mg/dL"
    ],
    "Versus about 95 mg/dL with pravastatin."
   ],
   [
    "Which phrase did this trial popularise?",
    "Lower is better for LDL",
    [
     "Statins for all",
     "Treat to HbA1c target",
     "The polypill"
    ],
    "It supported intensive LDL lowering after ACS."
   ]
  ],
  "km": [
   2,
   "years",
   [
    22.4,
    26.3
   ]
  ]
 },
 {
  "n": "FOURIER",
  "full": "Further Cardiovascular Outcomes Research with PCSK9 Inhibition in Subjects with Elevated Risk",
  "y": 2017,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "Atherosclerotic CVD on statin, LDL ≥70 mg/dL",
  "N": "27,564",
  "arms": [
   "Evolocumab",
   "Placebo"
  ],
  "fu": "Median 2.2 years",
  "ep": "CV death, MI, stroke, UA admission or revascularisation",
  "stat": "9.8% vs 11.3% (HR 0.85)",
  "f": "Evolocumab lowered LDL by ~59% and reduced CV events by 15%",
  "fw": [
   "No reduction in CV events",
   "CV death fell by 50%",
   "Neurocognitive events rose sharply"
  ],
  "q": [
   [
    "Which drug class is evolocumab?",
    "PCSK9 inhibitor",
    [
     "CETP inhibitor",
     "Bempedoic acid",
     "siRNA"
    ],
    "A monoclonal antibody against PCSK9."
   ],
   [
    "What did the key secondary endpoint show?",
    "CV death, MI, stroke reduced (HR 0.80)",
    [
     "No effect on MI",
     "All-cause death fell by 25%",
     "Stroke increased"
    ],
    "The hard triple endpoint benefit was larger than the primary."
   ]
  ],
  "km": [
   3,
   "years",
   [
    9.8,
    11.3
   ]
  ]
 },
 {
  "n": "CURE",
  "full": "Clopidogrel in Unstable Angina to Prevent Recurrent Events",
  "y": 2001,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "NSTE-ACS presenting within 24 hours",
  "N": "12,562",
  "arms": [
   "Clopidogrel + aspirin",
   "Placebo + aspirin"
  ],
  "fu": "3–12 months",
  "ep": "CV death, MI or stroke",
  "stat": "9.3% vs 11.4% (RR 0.80)",
  "f": "Adding clopidogrel to aspirin cut CV death, MI or stroke by 20%",
  "fw": [
   "No benefit over aspirin alone",
   "Benefit but doubled intracranial bleeding",
   "Benefit only in those undergoing PCI"
  ],
  "q": [
   [
    "What was the cost?",
    "More major bleeding (3.7% vs 2.7%)",
    [
     "More stroke",
     "No extra bleeding",
     "Excess mortality"
    ],
    "A clear benefit-versus-bleeding trade-off."
   ],
   [
    "What did CURE establish?",
    "Dual antiplatelet therapy in NSTE-ACS",
    [
     "Triple therapy after AF",
     "Lifelong aspirin alone",
     "Thrombolysis in NSTEMI"
    ],
    "The foundation of DAPT after ACS."
   ]
  ],
  "km": [
   12,
   "months",
   [
    9.3,
    11.4
   ]
  ]
 },
 {
  "n": "PLATO",
  "full": "Platelet Inhibition and Patient Outcomes",
  "y": 2009,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "ACS with or without ST elevation",
  "N": "18,624",
  "arms": [
   "Ticagrelor",
   "Clopidogrel"
  ],
  "fu": "12 months",
  "ep": "CV death, MI or stroke",
  "stat": "9.8% vs 11.7% (HR 0.84)",
  "f": "Ticagrelor reduced CV death, MI or stroke versus clopidogrel, including all-cause death",
  "fw": [
   "Only non-inferior to clopidogrel",
   "No difference",
   "Fewer events but more fatal bleeding"
  ],
  "q": [
   [
    "Which side effect is characteristic of ticagrelor?",
    "Dyspnoea",
    [
     "Neutropenia",
     "Thrombocytopenia",
     "Hepatotoxicity"
    ],
    "Seen in roughly 14% of patients."
   ],
   [
    "What aspirin caveat emerged?",
    "Benefit attenuated with maintenance aspirin >300 mg",
    [
     "Required aspirin-free regimen",
     "Effect doubled with high-dose aspirin",
     "No interaction found"
    ],
    "Hence ticagrelor is paired with low-dose aspirin."
   ]
  ],
  "km": [
   12,
   "months",
   [
    9.8,
    11.7
   ]
  ]
 },
 {
  "n": "RE-LY",
  "full": "Randomized Evaluation of Long-Term Anticoagulation Therapy",
  "y": 2009,
  "j": "N Engl J Med",
  "cat": "Anticoagulation",
  "pop": "Non-valvular AF with ≥1 stroke risk factor",
  "N": "18,113",
  "arms": [
   "Dabigatran 110 mg",
   "Dabigatran 150 mg",
   "Warfarin"
  ],
  "fu": "Median 2 years",
  "ep": "Stroke or systemic embolism",
  "stat": "1.11%/y (150 mg) vs 1.69%/y (warfarin)",
  "f": "Dabigatran 150 mg was superior and 110 mg non-inferior to warfarin for stroke prevention",
  "fw": [
   "Both doses were inferior",
   "Both superior but with more intracranial bleeding",
   "Equivalent but with more major bleeding"
  ],
  "q": [
   [
    "What was the design?",
    "PROBE: open-label warfarin, blinded dabigatran doses",
    [
     "Double-dummy",
     "Open-label for all arms",
     "Placebo-controlled"
    ],
    "Warfarin was unblinded because of INR monitoring."
   ],
   [
    "What about intracranial haemorrhage?",
    "Lower than warfarin with both doses",
    [
     "Higher with both",
     "Same as warfarin",
     "Lower only with 150 mg"
    ],
    "A consistent DOAC class advantage."
   ]
  ],
  "km": [
   2,
   "years",
   [
    3.1,
    2.2,
    3.4
   ],
   true
  ]
 },
 {
  "n": "ARISTOTLE",
  "full": "Apixaban for Reduction in Stroke and Other Thromboembolic Events in AF",
  "y": 2011,
  "j": "N Engl J Med",
  "cat": "Anticoagulation",
  "pop": "Non-valvular AF with ≥1 stroke risk factor",
  "N": "18,201",
  "arms": [
   "Apixaban 5 mg bd",
   "Warfarin"
  ],
  "fu": "Median 1.8 years",
  "ep": "Stroke or systemic embolism",
  "stat": "1.27 vs 1.60 %/y (HR 0.79)",
  "f": "Apixaban beat warfarin: fewer strokes, less major bleeding and lower mortality",
  "fw": [
   "Non-inferior only, with more bleeding",
   "Fewer strokes but higher mortality",
   "Less bleeding but more strokes"
  ],
  "q": [
   [
    "What was the blinding?",
    "Double-blind, double-dummy",
    [
     "Open-label PROBE",
     "Single-blind",
     "Placebo-controlled"
    ],
    "Unlike RE-LY, warfarin was masked with INR sham adjustments."
   ],
   [
    "When was apixaban dose-reduced to 2.5 mg bd?",
    "≥2 of: age ≥80, weight ≤60 kg, creatinine ≥133 µmol/L",
    [
     "Age ≥65 alone",
     "Any CKD",
     "Concomitant aspirin"
    ],
    "The label dose-reduction criteria."
   ]
  ],
  "km": [
   1.8,
   "years",
   [
    2.3,
    2.9
   ],
   true
  ]
 },
 {
  "n": "PARTNER B",
  "full": "Placement of Aortic Transcatheter Valves (cohort B, inoperable)",
  "y": 2010,
  "j": "N Engl J Med",
  "cat": "Valve disease",
  "pop": "Severe symptomatic aortic stenosis, inoperable",
  "N": "358",
  "arms": [
   "Transcatheter AVR",
   "Standard therapy"
  ],
  "fu": "1 year",
  "ep": "All-cause mortality",
  "stat": "30.7% vs 50.7% (HR 0.55)",
  "f": "TAVR cut one-year mortality in inoperable aortic stenosis",
  "fw": [
   "TAVR was no better than balloon valvuloplasty",
   "Mortality fell but stroke doubled with no net benefit",
   "TAVR was inferior to medical therapy"
  ],
  "q": [
   [
    "What did standard therapy include?",
    "Medical therapy, often with balloon valvuloplasty",
    [
     "Surgical AVR",
     "Mitral repair",
     "Palliation only"
    ],
    "Control patients were deemed unsuitable for surgery."
   ],
   [
    "Which complications were more frequent with TAVR?",
    "Major stroke and vascular complications",
    [
     "Renal failure",
     "AF",
     "Pacemaker infection"
    ],
    "A trade-off for the mortality benefit."
   ]
  ],
  "km": [
   12,
   "months",
   [
    30.7,
    50.7
   ]
  ]
 },
 {
  "n": "COURAGE",
  "full": "Clinical Outcomes Utilizing Revascularization and Aggressive Drug Evaluation",
  "y": 2007,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "Stable CAD, ≥70% stenosis and objective ischaemia",
  "N": "2,287",
  "arms": [
   "PCI + optimal medical therapy",
   "Optimal medical therapy alone"
  ],
  "fu": "Median 4.6 years",
  "ep": "Death or non-fatal MI",
  "stat": "19.0% vs 18.5% (HR 1.05, NS)",
  "f": "PCI added to optimal medical therapy did not reduce death or MI in stable CAD",
  "fw": [
   "PCI cut death or MI by 25%",
   "PCI reduced MI but increased death",
   "Medical therapy was inferior"
  ],
  "q": [
   [
    "What happened to angina relief?",
    "PCI gave earlier relief that faded over time",
    [
     "Medical therapy was better throughout",
     "No difference at any point",
     "PCI advantage persisted at 5 years"
    ],
    "Symptom benefit narrowed by 3 years."
   ],
   [
    "What was a key limitation?",
    "About one third of medical arm crossed over to revascularisation",
    [
     "Only women enrolled",
     "No medical therapy in control arm",
     "Six-month follow-up"
    ],
    "Also, enrolled patients were highly selected."
   ]
  ],
  "km": [
   4.6,
   "years",
   [
    19,
    18.5
   ]
  ]
 },
 {
  "n": "ISCHEMIA",
  "full": "International Study of Comparative Health Effectiveness with Medical and Invasive Approaches",
  "y": 2020,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "Stable CAD with moderate or severe ischaemia on stress testing",
  "N": "5,179",
  "arms": [
   "Invasive (angiography + revascularisation)",
   "Conservative (medical therapy)"
  ],
  "fu": "Median 3.2 years",
  "ep": "CV death, MI, UA, HF or resuscitated arrest",
  "stat": "5-y 16.4% vs 18.2% (HR 0.93, NS)",
  "f": "An invasive strategy did not reduce major CV events versus conservative care",
  "fw": [
   "Invasive reduced events by 30%",
   "Invasive reduced MI but not death",
   "Conservative care was inferior in diabetics"
  ],
  "q": [
   [
    "Who was excluded?",
    "Significant left main disease and LVEF <35%",
    [
     "Diabetes",
     "Age >65",
     "Multivessel disease"
    ],
    "Left main on CTA was an exclusion."
   ],
   [
    "What did the invasive strategy improve?",
    "Angina-related quality of life in those with frequent angina",
    [
     "Nothing",
     "Quality of life in all patients",
     "Mortality at 3 years"
    ],
    "Symptoms remain the reason to revascularise."
   ]
  ],
  "km": [
   5,
   "years",
   [
    16.4,
    18.2
   ]
  ]
 },
 {
  "n": "HOPE",
  "full": "Heart Outcomes Prevention Evaluation",
  "y": 2000,
  "j": "N Engl J Med",
  "cat": "Prevention",
  "pop": "Age ≥55 with vascular disease or diabetes plus risk factor; no HF",
  "N": "9,297",
  "arms": [
   "Ramipril 10 mg",
   "Placebo"
  ],
  "fu": "Mean 4.5 years",
  "ep": "MI, stroke or CV death",
  "stat": "14.0% vs 17.8% (RR 0.78)",
  "f": "Ramipril cut MI, stroke or CV death by about 22%, beyond its BP effect",
  "fw": [
   "No benefit without LV dysfunction",
   "Benefit only if hypertensive",
   "Fewer strokes but not MI"
  ],
  "q": [
   [
    "What did vitamin E show in HOPE?",
    "No benefit on CV outcomes",
    [
     "Reduced MI",
     "Increased cancer",
     "Reduced stroke"
    ],
    "Vitamin E was in a parallel factorial."
   ],
   [
    "Who benefits from ACEi per HOPE?",
    "High-risk patients without heart failure",
    [
     "Only post-MI HF patients",
     "Only hypertensives",
     "Only diabetics with nephropathy"
    ],
    "Extended ACEi benefit to broad vascular prevention."
   ]
  ],
  "km": [
   4.5,
   "years",
   [
    14,
    17.8
   ]
  ]
 },
 {
  "n": "JUPITER",
  "full": "Justification for the Use of Statins in Prevention: an Intervention Trial Evaluating Rosuvastatin",
  "y": 2008,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "LDL <130 mg/dL, hsCRP ≥2 mg/L, no CVD",
  "N": "17,802",
  "arms": [
   "Rosuvastatin 20 mg",
   "Placebo"
  ],
  "fu": "Median 1.9 years; stopped early",
  "ep": "MI, stroke, UA, revascularisation, CV death",
  "stat": "HR 0.56",
  "f": "Rosuvastatin cut events by 44% in people with normal LDL but raised hsCRP",
  "fw": [
   "No benefit when LDL is normal",
   "Benefit only if LDL >130",
   "Events fell but new diabetes doubled"
  ],
  "q": [
   [
    "Which biomarker selected patients?",
    "hsCRP ≥2 mg/L",
    [
     "Lp(a) ≥50 mg/dL",
     "NT-proBNP",
     "Troponin"
    ],
    "Inflammation was used for risk enrichment."
   ],
   [
    "What safety signal was noted?",
    "Slightly higher physician-reported diabetes",
    [
     "Rhabdomyolysis excess",
     "Hepatic failure",
     "Excess cancer"
    ],
    "Benefit outweighed it."
   ]
  ],
  "km": [
   1.9,
   "years",
   [
    1.5,
    2.6
   ],
   true
  ]
 },
 {
  "n": "RALES",
  "full": "Randomized Aldactone Evaluation Study",
  "y": 1999,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "Severe HF, NYHA III–IV, LVEF ≤35%, on ACEi and loop diuretic",
  "N": "1,663",
  "arms": [
   "Spironolactone 25 mg",
   "Placebo"
  ],
  "fu": "Mean 24 months; stopped early",
  "ep": "All-cause mortality",
  "stat": "35% vs 46% (RR 0.70)",
  "f": "Spironolactone cut mortality by 30% on top of ACE inhibitor therapy",
  "fw": [
   "No effect on mortality",
   "Reduced hospitalisation only",
   "Excess hyperkalaemic deaths"
  ],
  "q": [
   [
    "What was a notable side effect?",
    "Gynaecomastia in about 10% of men",
    [
     "Gout",
     "Fatal hyponatraemia",
     "Neutropenia"
    ],
    "Led to eplerenone development (EPHESUS)."
   ],
   [
    "What concern emerged after wide use?",
    "Hyperkalaemia and AKI in practice",
    [
     "Bradycardia",
     "Tendon rupture",
     "Hepatotoxicity"
    ],
    "Monitor potassium and creatinine."
   ]
  ],
  "km": [
   2,
   "years",
   [
    35,
    46
   ]
  ]
 },
 {
  "n": "MERIT-HF",
  "full": "Metoprolol CR/XL Randomised Intervention Trial in Congestive Heart Failure",
  "y": 1999,
  "j": "Lancet",
  "cat": "Heart failure",
  "pop": "NYHA II–IV heart failure, LVEF ≤40%",
  "N": "3,991",
  "arms": [
   "Metoprolol succinate",
   "Placebo"
  ],
  "fu": "Mean 1 year; stopped early",
  "ep": "All-cause mortality",
  "stat": "7.2% vs 11.0% per patient-year (RR 0.66)",
  "f": "Metoprolol CR/XL cut mortality by a third, including sudden death",
  "fw": [
   "Hospitalisation fell but mortality did not",
   "Mortality rose in NYHA III–IV",
   "No benefit in ischaemic aetiology"
  ],
  "q": [
   [
    "Which other trials built the beta-blocker evidence?",
    "CIBIS-II and COPERNICUS",
    [
     "SOLVD and V-HeFT",
     "ALLHAT and ASCOT",
     "PLATO and CURE"
    ],
    "Bisoprolol, carvedilol and metoprolol succinate all reduce mortality."
   ],
   [
    "By roughly how much did sudden death fall?",
    "About 41%",
    [
     "About 5%",
     "About 70%",
     "No change"
    ],
    "A large antiarrhythmic effect of beta-blockade."
   ]
  ],
  "km": [
   1,
   "years",
   [
    7.2,
    11
   ],
   true
  ]
 },
 {
  "n": "DANISH",
  "full": "Danish Study to Assess the Efficacy of ICDs in Patients with Non-Ischaemic Systolic Heart Failure on Mortality",
  "y": 2016,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Non-ischaemic HFrEF, LVEF ≤35%, raised NT-proBNP; most had CRT",
  "N": "1,116",
  "arms": [
   "ICD",
   "Usual care"
  ],
  "fu": "Median 5.6 years",
  "ep": "All-cause mortality",
  "stat": "21.6% vs 23.4% (HR 0.87, p=0.28)",
  "f": "ICD did not significantly reduce all-cause mortality in non-ischaemic HFrEF",
  "fw": [
   "ICD cut mortality by 23%",
   "ICD increased mortality",
   "ICD helped only above age 70"
  ],
  "q": [
   [
    "Which subgroup appeared to benefit?",
    "Younger patients (<68 years)",
    [
     "Older patients",
     "Women only",
     "CRT recipients only"
    ],
    "Age interaction was a key hypothesis-generating finding."
   ],
   [
    "What did ICD clearly reduce?",
    "Sudden cardiac death (HR 0.50)",
    [
     "HF hospitalisation",
     "Stroke",
     "AF"
    ],
    "But competing causes diluted the mortality effect."
   ]
  ],
  "km": [
   5.6,
   "years",
   [
    21.6,
    23.4
   ]
  ]
 },
 {
  "n": "CABANA",
  "full": "Catheter Ablation vs Antiarrhythmic Drug Therapy for Atrial Fibrillation",
  "y": 2019,
  "j": "JAMA",
  "cat": "Electrophysiology",
  "pop": "AF warranting therapy, age ≥65 or <65 with a risk factor",
  "N": "2,204",
  "arms": [
   "Catheter ablation",
   "Drug therapy (rate/rhythm)"
  ],
  "fu": "Median 4 years",
  "ep": "Death, disabling stroke, serious bleeding or cardiac arrest",
  "stat": "8.0% vs 9.2% (HR 0.86, NS in ITT)",
  "f": "Ablation did not significantly reduce the primary composite in intention-to-treat analysis",
  "fw": [
   "Ablation halved the composite",
   "Ablation increased mortality",
   "Drugs were superior at one year"
  ],
  "q": [
   [
    "What limited interpretation?",
    "Crossover and lower-than-expected event rates",
    [
     "Three-month follow-up",
     "Unblinded endpoint committee",
     "Paroxysmal AF only"
    ],
    "As-treated analyses leaned towards ablation."
   ],
   [
    "What was a clear secondary signal?",
    "Better AF recurrence control and quality of life with ablation",
    [
     "Stroke reduced by 70%",
     "Worse quality of life",
     "More AF burden"
    ],
    "Ablation is chiefly a symptom and rhythm strategy."
   ]
  ],
  "km": [
   4,
   "years",
   [
    8,
    9.2
   ]
  ]
 },
 {
  "n": "COMPANION",
  "full": "Comparison of Medical Therapy, Pacing, and Defibrillation in Heart Failure",
  "y": 2004,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "NYHA III–IV HF, LVEF ≤35%, QRS ≥120 ms",
  "N": "1,520",
  "arms": [
   "Optimal medical therapy",
   "CRT pacemaker (CRT-P)",
   "CRT defibrillator (CRT-D)"
  ],
  "fu": "Median ~16 months",
  "ep": "Death or hospitalisation",
  "stat": "CRT-P HR 0.81; CRT-D HR 0.80; death CRT-D HR 0.64",
  "f": "CRT reduced death or hospitalisation; CRT-D also reduced all-cause mortality",
  "fw": [
   "CRT-P had no effect",
   "Only CRT-P reduced mortality",
   "CRT reduced hospitalisation only"
  ],
  "q": [
   [
    "What QRS duration was required?",
    "≥120 ms",
    [
     "≥100 ms",
     "≥150 ms only",
     "Any QRS"
    ],
    "Wide QRS as a surrogate for dyssynchrony."
   ],
   [
    "How many arms were there?",
    "Three",
    [
     "Two",
     "Four",
     "Five"
    ],
    "Medical therapy, CRT-P and CRT-D."
   ]
  ],
  "km": [
   12,
   "months",
   [
    68,
    56,
    56
   ]
  ]
 },
 {
  "n": "CARE-HF",
  "full": "Cardiac Resynchronization in Heart Failure",
  "y": 2005,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "NYHA III–IV HF, LVEF ≤35%, QRS ≥120 ms with dyssynchrony",
  "N": "813",
  "arms": [
   "CRT pacemaker + medical therapy",
   "Medical therapy alone"
  ],
  "fu": "Mean 29.4 months",
  "ep": "Death or unplanned CV hospitalisation",
  "stat": "39% vs 55% (HR 0.63)",
  "f": "CRT pacing alone cut mortality by about 36% and reduced morbidity",
  "fw": [
   "CRT reduced hospitalisation only",
   "No mortality benefit without an ICD",
   "CRT was harmful in NYHA IV"
  ],
  "q": [
   [
    "Which device was used?",
    "CRT pacemaker without defibrillator",
    [
     "CRT-D",
     "ICD alone",
     "Dual-chamber pacemaker"
    ],
    "CRT-P only."
   ],
   [
    "How did CARE-HF extend COMPANION?",
    "Showed a mortality benefit from CRT-P alone",
    [
     "Showed CRT-D superiority",
     "Showed no CRT benefit",
     "Showed harm in mild HF"
    ],
    "Mortality benefit was evident without a defibrillator."
   ]
  ],
  "km": [
   2.45,
   "years",
   [
    39,
    55
   ]
  ]
 },
 {
  "n": "IMPROVE-IT",
  "full": "Improved Reduction of Outcomes: Vytorin Efficacy International Trial",
  "y": 2015,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "Stabilised ACS within 10 days, LDL 50–125 mg/dL",
  "N": "18,144",
  "arms": [
   "Simvastatin + ezetimibe",
   "Simvastatin + placebo"
  ],
  "fu": "Median 6 years",
  "ep": "CV death, MI, UA admission, revascularisation or stroke",
  "stat": "32.7% vs 34.7% at 7 y (HR 0.94)",
  "km": [
   7,
   "years",
   [
    32.7,
    34.7
   ]
  ],
  "f": "Adding ezetimibe to simvastatin gave a modest 6% reduction in CV events",
  "fw": [
   "Ezetimibe gave no benefit at all",
   "Ezetimibe cut events by 25%",
   "Benefit appeared only in patients with diabetes"
  ],
  "q": [
   [
    "What LDL levels were achieved?",
    "About 54 vs 70 mg/dL",
    [
     "About 100 vs 130 mg/dL",
     "About 30 vs 54 mg/dL",
     "No difference"
    ],
    "A 24% additional LDL reduction."
   ],
   [
    "What did IMPROVE-IT support?",
    "Lower LDL is better, even with a non-statin",
    [
     "Ezetimibe replaces statins",
     "LDL does not matter after ACS",
     "HDL raising is the key"
    ],
    "It validated the LDL hypothesis for a non-statin agent."
   ]
  ]
 },
 {
  "n": "REDUCE-IT",
  "full": "Reduction of Cardiovascular Events with Icosapent Ethyl–Intervention Trial",
  "y": 2018,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "On a statin, triglycerides 135–499 mg/dL, CVD or diabetes",
  "N": "8,179",
  "arms": [
   "Icosapent ethyl 4 g/day",
   "Placebo (mineral oil)"
  ],
  "fu": "Median 4.9 years",
  "ep": "CV death, MI, stroke, revascularisation or UA",
  "stat": "17.2% vs 22.0% (HR 0.75)",
  "km": [
   4.9,
   "years",
   [
    17.2,
    22
   ]
  ],
  "f": "High-dose icosapent ethyl cut CV events by 25% in statin-treated patients with raised triglycerides",
  "fw": [
   "No effect on events",
   "Reduction only if LDL >100 mg/dL",
   "Reduced events but with no net gain from excess AF"
  ],
  "q": [
   [
    "What was a concern about the comparator?",
    "Mineral oil placebo may have raised LDL and hsCRP",
    [
     "Placebo was olive oil with proven benefit",
     "There was no placebo",
     "Comparator was fenofibrate"
    ],
    "This may have inflated the apparent benefit."
   ],
   [
    "Which safety signal was seen?",
    "More atrial fibrillation and a bleeding trend",
    [
     "Rhabdomyolysis",
     "Neutropenia",
     "Liver failure"
    ],
    "Hospitalised AF was higher with icosapent ethyl."
   ]
  ]
 },
 {
  "n": "CANTOS",
  "full": "Canakinumab Anti-inflammatory Thrombosis Outcome Study",
  "y": 2017,
  "j": "N Engl J Med",
  "cat": "Prevention",
  "pop": "Prior MI, hsCRP ≥2 mg/L on statin",
  "N": "10,061",
  "arms": [
   "Canakinumab 150 mg",
   "Placebo"
  ],
  "fu": "Median 3.7 years",
  "ep": "CV death, MI or stroke",
  "stat": "HR 0.85 (150 mg); LDL unchanged",
  "km": [
   3.7,
   "years",
   [
    14.3,
    16.7
   ],
   true
  ],
  "f": "Blocking IL-1β cut CV events by 15% without lowering LDL",
  "fw": [
   "No effect on CV events",
   "Events fell through LDL lowering",
   "All three doses were equally significant"
  ],
  "q": [
   [
    "What is the target of canakinumab?",
    "Interleukin-1β",
    [
     "PCSK9",
     "IL-6 receptor",
     "Lp-PLA2"
    ],
    "A proof of principle for the inflammation hypothesis."
   ],
   [
    "Which safety issue was notable?",
    "More fatal infection and sepsis",
    [
     "More AF",
     "More bleeding",
     "Hepatic failure"
    ],
    "All-cause mortality was not reduced."
   ]
  ]
 },
 {
  "n": "COMPASS",
  "full": "Cardiovascular Outcomes for People Using Anticoagulation Strategies",
  "y": 2017,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "Stable coronary or peripheral artery disease",
  "N": "27,395",
  "arms": [
   "Rivaroxaban 2.5 mg bd + aspirin",
   "Rivaroxaban 5 mg bd",
   "Aspirin alone"
  ],
  "fu": "Mean 23 months; stopped early",
  "ep": "CV death, stroke or MI",
  "stat": "4.1% vs 5.4% (HR 0.76) vs aspirin alone",
  "km": [
   1.9,
   "years",
   [
    4.1,
    4.9,
    5.4
   ]
  ],
  "f": "Low-dose rivaroxaban plus aspirin cut MACE by 24% but increased major bleeding",
  "fw": [
   "No reduction in MACE",
   "Rivaroxaban 5 mg alone was best",
   "Fewer MACE and less bleeding"
  ],
  "q": [
   [
    "Which arm did not beat aspirin alone?",
    "Rivaroxaban 5 mg bd alone",
    [
     "Rivaroxaban 2.5 mg + aspirin",
     "Aspirin beat all arms",
     "All three were equal"
    ],
    "Only the combination was superior."
   ],
   [
    "What was the setting?",
    "Stable atherosclerotic disease",
    [
     "Acute MI",
     "Atrial fibrillation",
     "Venous thromboembolism"
    ],
    "A 'dual pathway inhibition' strategy."
   ]
  ]
 },
 {
  "n": "LEADER",
  "full": "Liraglutide Effect and Action in Diabetes: Evaluation of CV Outcome Results",
  "y": 2016,
  "j": "N Engl J Med",
  "cat": "Diabetes & obesity",
  "pop": "Type 2 diabetes at high CV risk",
  "N": "9,340",
  "arms": [
   "Liraglutide",
   "Placebo"
  ],
  "fu": "Median 3.8 years",
  "ep": "CV death, MI or stroke",
  "stat": "13.0% vs 14.9% (HR 0.87)",
  "km": [
   3.8,
   "years",
   [
    13,
    14.9
   ]
  ],
  "f": "Liraglutide cut MACE by 13% and CV death by 22%",
  "fw": [
   "Neutral on MACE",
   "Reduced MACE but increased heart failure",
   "Benefit only for non-fatal stroke"
  ],
  "q": [
   [
    "Which drug class is liraglutide?",
    "GLP-1 receptor agonist",
    [
     "SGLT2 inhibitor",
     "DPP-4 inhibitor",
     "Sulfonylurea"
    ],
    "Daily injectable GLP-1 RA."
   ],
   [
    "What happened to all-cause death?",
    "Reduced (HR 0.85)",
    [
     "Significantly increased",
     "No change",
     "Not reported"
    ],
    "A mortality signal supported benefit."
   ]
  ]
 },
 {
  "n": "SELECT",
  "full": "Semaglutide Effects on Heart Disease and Stroke in Patients with Overweight or Obesity",
  "y": 2023,
  "j": "N Engl J Med",
  "cat": "Diabetes & obesity",
  "pop": "Age ≥45, BMI ≥27, established CVD, no diabetes",
  "N": "17,604",
  "arms": [
   "Semaglutide 2.4 mg weekly",
   "Placebo"
  ],
  "fu": "Mean 39.8 months",
  "ep": "CV death, MI or stroke",
  "stat": "6.5% vs 8.0% (HR 0.80)",
  "km": [
   3.3,
   "years",
   [
    6.5,
    8
   ]
  ],
  "f": "Semaglutide cut MACE by 20% in overweight or obese people with CVD and no diabetes",
  "fw": [
   "No MACE reduction despite weight loss",
   "Benefit only in people with diabetes",
   "MACE fell but CV death rose"
  ],
  "q": [
   [
    "What was the mean weight change?",
    "About −9.4% vs −0.9%",
    [
     "About −2% vs 0%",
     "About −20% vs 0%",
     "No difference"
    ],
    "Substantial but not the sole mediator of benefit."
   ],
   [
    "Why was SELECT notable?",
    "First CV outcome benefit for an obesity drug",
    [
     "First SGLT2 trial",
     "First statin trial",
     "First PCSK9 trial"
    ],
    "Established CV benefit independent of diabetes."
   ]
  ]
 },
 {
  "n": "EMPEROR-Preserved",
  "full": "Empagliflozin Outcome Trial in Patients with Chronic Heart Failure with Preserved Ejection Fraction",
  "y": 2021,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HF with LVEF >40%, NYHA II–IV, raised NT-proBNP",
  "N": "5,988",
  "arms": [
   "Empagliflozin 10 mg",
   "Placebo"
  ],
  "fu": "Median 26.2 months",
  "ep": "CV death or HF hospitalisation",
  "stat": "13.8% vs 17.1% (HR 0.79)",
  "km": [
   2.2,
   "years",
   [
    13.8,
    17.1
   ]
  ],
  "f": "Empagliflozin cut CV death or HF admission by 21% in HF with LVEF >40%",
  "fw": [
   "Neutral on the primary endpoint",
   "Benefit only if LVEF 41–49%",
   "Reduced CV death but not admissions"
  ],
  "q": [
   [
    "What drove the benefit?",
    "Fewer HF hospitalisations (HR 0.71)",
    [
     "Fewer CV deaths",
     "Fewer strokes",
     "Fewer MIs"
    ],
    "CV death alone was not significantly reduced."
   ],
   [
    "What happened to earlier HFpEF drug trials?",
    "ACEi, ARB, ARNI and MRA were largely neutral",
    [
     "All were positive",
     "Beta-blockers were positive",
     "Digoxin was positive"
    ],
    "SGLT2 inhibitors broke the neutral streak."
   ]
  ]
 },
 {
  "n": "DELIVER",
  "full": "Dapagliflozin Evaluation to Improve the Lives of Patients with Preserved Ejection Fraction Heart Failure",
  "y": 2022,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HF with LVEF >40%, structural heart disease, raised NT-proBNP",
  "N": "6,263",
  "arms": [
   "Dapagliflozin 10 mg",
   "Placebo"
  ],
  "fu": "Median 2.3 years",
  "ep": "Worsening HF or CV death",
  "stat": "16.4% vs 19.5% (HR 0.82)",
  "km": [
   2.3,
   "years",
   [
    16.4,
    19.5
   ]
  ],
  "f": "Dapagliflozin reduced worsening HF or CV death by 18% across the LVEF range above 40%",
  "fw": [
   "Benefit only if LVEF 41–49%",
   "No effect on the primary endpoint",
   "Benefit only in patients just hospitalised"
  ],
  "q": [
   [
    "How did benefit vary by LVEF?",
    "Consistent regardless of LVEF; improved-EF HF was included",
    [
     "Excluded improved EF",
     "Only HFmrEF benefited",
     "Only LVEF >60% benefited"
    ],
    "Broad applicability."
   ],
   [
    "With EMPEROR-Preserved, DELIVER established…",
    "SGLT2 inhibitors as first proven HFpEF therapy",
    [
     "ARNI",
     "MRA",
     "Beta-blocker"
    ],
    "Class effect."
   ]
  ]
 },
 {
  "n": "TOPCAT",
  "full": "Treatment of Preserved Cardiac Function Heart Failure with an Aldosterone Antagonist",
  "y": 2014,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HF with LVEF ≥45%, hospitalised or raised BNP",
  "N": "3,445",
  "arms": [
   "Spironolactone",
   "Placebo"
  ],
  "fu": "Mean 3.3 years",
  "ep": "CV death, aborted cardiac arrest or HF hospitalisation",
  "stat": "18.6% vs 20.4% (HR 0.89, NS)",
  "km": [
   3.3,
   "years",
   [
    18.6,
    20.4
   ]
  ],
  "f": "Spironolactone did not significantly reduce the primary composite in HFpEF",
  "fw": [
   "It cut the primary endpoint by 30%",
   "It increased CV death",
   "Benefit only in NYHA IV"
  ],
  "q": [
   [
    "What was the main controversy?",
    "Marked regional differences between the Americas and Russia/Georgia",
    [
     "Wrong drug dose",
     "Premature stopping",
     "Unblinded design"
    ],
    "Event rates and drug effects differed strikingly by region."
   ],
   [
    "Which component fell?",
    "HF hospitalisation",
    [
     "CV death",
     "Stroke",
     "AF"
    ],
    "A hospitalisation signal only."
   ]
  ]
 },
 {
  "n": "ENGAGE AF-TIMI 48",
  "full": "Effective Anticoagulation with Factor Xa Next Generation in AF–TIMI 48",
  "y": 2013,
  "j": "N Engl J Med",
  "cat": "Anticoagulation",
  "pop": "AF with CHADS2 ≥2",
  "N": "21,105",
  "arms": [
   "Warfarin",
   "Edoxaban 60 mg",
   "Edoxaban 30 mg"
  ],
  "fu": "Median 2.8 years",
  "ep": "Stroke or systemic embolism",
  "stat": "1.50 vs 1.18 vs 1.61 %/y",
  "km": [
   2.8,
   "years",
   [
    4.2,
    3.3,
    4.5
   ],
   true
  ],
  "f": "Edoxaban was non-inferior to warfarin with significantly less major bleeding",
  "fw": [
   "Edoxaban was inferior",
   "Bleeding was higher than warfarin",
   "High dose reduced only ischaemic stroke"
  ],
  "q": [
   [
    "When was the dose halved?",
    "CrCl 30–50 mL/min, weight ≤60 kg or interacting drugs",
    [
     "Age over 65",
     "Aspirin use",
     "Low INR"
    ],
    "The label dose-reduction criteria."
   ],
   [
    "What caveat applies at high CrCl?",
    "Reduced efficacy versus warfarin above ~95 mL/min",
    [
     "Hepatic failure",
     "Hyperkalaemia",
     "None"
    ],
    "Led to a label caution."
   ]
  ]
 },
 {
  "n": "ROCKET AF",
  "full": "Rivaroxaban Once Daily Oral Direct Factor Xa Inhibition Compared with Vitamin K Antagonism for Prevention of Stroke and Embolism Trial in AF",
  "y": 2011,
  "j": "N Engl J Med",
  "cat": "Anticoagulation",
  "pop": "Non-valvular AF, higher risk (mean CHADS2 3.5)",
  "N": "14,264",
  "arms": [
   "Rivaroxaban 20 mg daily",
   "Warfarin"
  ],
  "fu": "Median 1.9 years",
  "ep": "Stroke or systemic embolism",
  "stat": "2.1% vs 2.4% per year (non-inferior)",
  "km": [
   1.9,
   "years",
   [
    4,
    4.6
   ],
   true
  ],
  "f": "Rivaroxaban was non-inferior to warfarin for stroke prevention with similar major bleeding and less ICH",
  "fw": [
   "Superior with less bleeding overall",
   "Inferior to warfarin",
   "Non-inferior but doubled ICH"
  ],
  "q": [
   [
    "What was distinctive?",
    "A higher-risk population (mean CHADS2 3.5)",
    [
     "Low risk only",
     "Paroxysmal AF only",
     "Valvular AF"
    ],
    "Compared with RE-LY and ARISTOTLE."
   ],
   [
    "What is the usual dose?",
    "20 mg daily with the evening meal (15 mg if CrCl 30–49)",
    [
     "10 mg bd",
     "5 mg bd",
     "40 mg daily"
    ],
    "Food improves absorption."
   ]
  ]
 },
 {
  "n": "CASTLE-AF",
  "full": "Catheter Ablation versus Standard Conventional Therapy in Patients with LV Dysfunction and AF",
  "y": 2018,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Symptomatic AF, LVEF ≤35%, ICD or CRT-D in situ",
  "N": "363",
  "arms": [
   "Catheter ablation",
   "Medical therapy"
  ],
  "fu": "Median 37.8 months",
  "ep": "Death or HF hospitalisation",
  "stat": "28.5% vs 44.6% (HR 0.62)",
  "km": [
   3.2,
   "years",
   [
    28.5,
    44.6
   ]
  ],
  "f": "Ablation cut death or HF hospitalisation by 38% in AF with heart failure",
  "fw": [
   "No benefit; AF burden unchanged",
   "AF reduced but mortality increased",
   "Benefit only in paroxysmal AF"
  ],
  "q": [
   [
    "What device feature was required?",
    "An ICD or CRT-D enabling AF burden monitoring",
    [
     "No devices",
     "Only pacemakers",
     "Only loop recorders"
    ],
    "Allowed device-based rhythm follow-up."
   ],
   [
    "How does it contrast with CABANA?",
    "Selected HFrEF population with a larger relative effect",
    [
     "Larger sample",
     "No crossover",
     "General AF population"
    ],
    "Heart failure patients seem to gain most."
   ]
  ]
 },
 {
  "n": "MADIT-CRT",
  "full": "Multicenter Automatic Defibrillator Implantation Trial with Cardiac Resynchronization Therapy",
  "y": 2009,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Mild HF (NYHA I–II), LVEF ≤30%, QRS ≥130 ms",
  "N": "1,820",
  "arms": [
   "CRT-D",
   "ICD alone"
  ],
  "fu": "Mean 2.4 years",
  "ep": "Death or non-fatal HF event",
  "stat": "17.2% vs 25.3% (HR 0.66)",
  "km": [
   2.4,
   "years",
   [
    17.2,
    25.3
   ]
  ],
  "f": "CRT-D reduced death or HF events by 34% versus ICD alone in mild heart failure",
  "fw": [
   "No benefit over ICD",
   "Benefit came from lower mortality",
   "Benefit confined to narrow QRS"
  ],
  "q": [
   [
    "Which subgroup benefited most?",
    "LBBB and wider QRS (≥150 ms)",
    [
     "Right bundle branch block",
     "Narrow QRS",
     "AF"
    ],
    "Morphology matters for CRT response."
   ],
   [
    "What drove the result?",
    "Fewer HF events, not mortality",
    [
     "Fewer deaths only",
     "Fewer strokes",
     "Fewer shocks"
    ],
    "Mortality was not different early on."
   ]
  ]
 },
 {
  "n": "RAFT",
  "full": "Resynchronization–Defibrillation for Ambulatory Heart Failure Trial",
  "y": 2010,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "NYHA II–III, LVEF ≤30%, QRS ≥120 ms",
  "N": "1,798",
  "arms": [
   "CRT-D",
   "ICD alone"
  ],
  "fu": "Mean 40 months",
  "ep": "Death or HF hospitalisation",
  "stat": "33.2% vs 40.3% (HR 0.75)",
  "km": [
   3.3,
   "years",
   [
    33.2,
    40.3
   ]
  ],
  "f": "CRT-D reduced death or HF admission by 25% versus ICD alone in NYHA II–III",
  "fw": [
   "No difference",
   "Benefit only in NYHA III",
   "Reduced HF admission but not mortality"
  ],
  "q": [
   [
    "What was the cost?",
    "More device-related adverse events",
    [
     "Fewer complications",
     "No difference",
     "Excess stroke"
    ],
    "Early complications were more frequent with CRT."
   ],
   [
    "Who benefited most?",
    "Those with QRS ≥150 ms",
    [
     "QRS 120–149 ms",
     "Patients in AF",
     "NYHA II only"
    ],
    "Same message as MADIT-CRT."
   ]
  ]
 },
 {
  "n": "DAPT",
  "full": "Dual Antiplatelet Therapy Study",
  "y": 2014,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "12 months of DAPT after drug-eluting stent, event-free",
  "N": "9,961",
  "arms": [
   "Continue thienopyridine to 30 months",
   "Placebo after 12 months"
  ],
  "fu": "Months 12–30",
  "ep": "Stent thrombosis and MACCE",
  "stat": "MACCE 4.3% vs 5.9%; stent thrombosis 0.4% vs 1.4%",
  "km": [
   18,
   "months",
   [
    4.3,
    5.9
   ]
  ],
  "f": "Extended DAPT lowered stent thrombosis and MACE but increased bleeding",
  "fw": [
   "No effect on stent thrombosis",
   "Extended DAPT reduced bleeding",
   "Extended DAPT cut all mortality"
  ],
  "q": [
   [
    "What was the cost?",
    "Moderate or severe bleeding 2.5% vs 1.6%",
    [
     "More strokes",
     "No increase",
     "Liver injury"
    ],
    "A recurring benefit-bleeding trade-off."
   ],
   [
    "What concern was raised?",
    "Numerically higher non-cardiovascular death, largely cancer",
    [
     "Higher CV mortality",
     "More stent thrombosis",
     "More MI"
    ],
    "Interpreted as chance, but debated."
   ]
  ]
 },
 {
  "n": "TRITON-TIMI 38",
  "full": "Trial to Assess Improvement in Therapeutic Outcomes by Optimizing Platelet Inhibition with Prasugrel",
  "y": 2007,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "Moderate- to high-risk ACS with planned PCI",
  "N": "13,608",
  "arms": [
   "Prasugrel",
   "Clopidogrel"
  ],
  "fu": "Median 14.5 months",
  "ep": "CV death, MI or stroke",
  "stat": "9.9% vs 12.1% (HR 0.81)",
  "km": [
   15,
   "months",
   [
    9.9,
    12.1
   ]
  ],
  "f": "Prasugrel reduced ischaemic events but increased major bleeding versus clopidogrel",
  "fw": [
   "No difference",
   "Fewer events with less bleeding",
   "Only non-inferior"
  ],
  "q": [
   [
    "Who was harmed?",
    "Prior stroke/TIA; also caution at age ≥75 or weight <60 kg",
    [
     "Diabetes",
     "Prior CABG",
     "Women only"
    ],
    "Net harm with prior stroke or TIA."
   ],
   [
    "How much did major bleeding rise?",
    "2.4% vs 1.8% (non-CABG)",
    [
     "0.5% vs 0.5%",
     "5% vs 2%",
     "No data"
    ],
    "A clear trade-off."
   ]
  ]
 },
 {
  "n": "SYNTAX",
  "full": "Synergy between PCI with Taxus and Cardiac Surgery",
  "y": 2009,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "De novo three-vessel and/or left main disease",
  "N": "1,800",
  "arms": [
   "PCI (paclitaxel stent)",
   "CABG"
  ],
  "fu": "12 months",
  "ep": "Death, stroke, MI or repeat revascularisation",
  "stat": "17.8% vs 12.4% at 1 year",
  "km": [
   12,
   "months",
   [
    17.8,
    12.4
   ]
  ],
  "f": "PCI failed non-inferiority to CABG at one year, with more repeat revascularisation but fewer strokes",
  "fw": [
   "PCI was superior",
   "Equivalent in all subgroups",
   "CABG needed more repeat revascularisation"
  ],
  "q": [
   [
    "What was the SYNTAX score's role?",
    "Anatomical complexity predicted outcomes; PCI acceptable if low score",
    [
     "Chose the stent type",
     "Measured LV function",
     "Measured frailty"
    ],
    "Led to the heart-team approach."
   ],
   [
    "Which outcome favoured PCI?",
    "Stroke",
    [
     "Death",
     "MI",
     "Repeat revascularisation"
    ],
    "Higher stroke with CABG."
   ]
  ]
 },
 {
  "n": "FAME",
  "full": "Fractional Flow Reserve versus Angiography for Multivessel Evaluation",
  "y": 2009,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "Multivessel CAD undergoing PCI",
  "N": "1,005",
  "arms": [
   "FFR-guided PCI",
   "Angiography-guided PCI"
  ],
  "fu": "12 months",
  "ep": "Death, MI or repeat revascularisation",
  "stat": "13.2% vs 18.3% (p=0.02)",
  "km": [
   12,
   "months",
   [
    13.2,
    18.3
   ]
  ],
  "f": "FFR-guided PCI reduced one-year MACE and used fewer stents",
  "fw": [
   "No difference",
   "FFR guidance increased stent use",
   "Higher mortality with FFR guidance"
  ],
  "q": [
   [
    "What FFR threshold was used?",
    "≤0.80",
    [
     "≤0.60",
     "≤0.90",
     "≤0.50"
    ],
    "Stent only functionally significant lesions."
   ],
   [
    "What happened to resource use?",
    "Fewer stents per patient and lower cost",
    [
     "More stents",
     "Longer hospitalisation only",
     "Higher cost"
    ],
    "Physiology-guided PCI was more efficient."
   ]
  ]
 },
 {
  "n": "GUSTO",
  "full": "Global Utilization of Streptokinase and Tissue Plasminogen Activator for Occluded Coronary Arteries",
  "y": 1993,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "Acute MI with ST elevation within 6 hours",
  "N": "41,021",
  "arms": [
   "Accelerated tPA + IV heparin",
   "Streptokinase + SC heparin",
   "Streptokinase + IV heparin",
   "tPA + streptokinase"
  ],
  "fu": "30 days",
  "ep": "30-day mortality",
  "stat": "6.3% vs 7.2% vs 7.4% vs 7.0%",
  "km": [
   30,
   "days",
   [
    6.3,
    7.2,
    7.4,
    7
   ]
  ],
  "f": "Accelerated tPA saved about one additional life per 100 treated versus streptokinase",
  "fw": [
   "Streptokinase regimens were superior",
   "No mortality difference between regimens",
   "tPA lowered mortality with fewer strokes"
  ],
  "q": [
   [
    "What was the trade-off?",
    "Slightly more haemorrhagic stroke with tPA",
    [
     "More MI",
     "More AF",
     "More death"
    ],
    "Net clinical benefit still favoured tPA."
   ],
   [
    "Which concept did GUSTO support?",
    "Early, complete coronary flow improves survival",
    [
     "Lytics do not matter",
     "Heparin alone suffices",
     "Drug choice is irrelevant"
    ],
    "The open-artery hypothesis."
   ]
  ]
 },
 {
  "n": "STICH",
  "full": "Surgical Treatment for Ischemic Heart Failure",
  "y": 2011,
  "j": "N Engl J Med",
  "cat": "Chronic coronary",
  "pop": "CAD amenable to CABG with LVEF ≤35%",
  "N": "1,212",
  "arms": [
   "CABG + medical therapy",
   "Medical therapy alone"
  ],
  "fu": "Median 56 months",
  "ep": "All-cause mortality",
  "stat": "36% vs 41% (HR 0.86, NS)",
  "km": [
   4.7,
   "years",
   [
    36,
    41
   ]
  ],
  "f": "CABG added to medical therapy did not significantly reduce all-cause death at about five years",
  "fw": [
   "CABG halved mortality",
   "CABG increased mortality",
   "Medical therapy was superior with viable myocardium"
  ],
  "q": [
   [
    "What did extended follow-up show?",
    "STICHES at 10 years found a mortality benefit with CABG",
    [
     "No benefit at 10 years",
     "Harm at 10 years",
     "Benefit only in women"
    ],
    "Long-term survival favoured surgery."
   ],
   [
    "Did viability testing help?",
    "It did not identify who benefited",
    [
     "It predicted benefit",
     "It was not done",
     "It favoured PCI"
    ],
    "A substudy result."
   ]
  ]
 },
 {
  "n": "TNT",
  "full": "Treating to New Targets",
  "y": 2005,
  "j": "N Engl J Med",
  "cat": "Lipids",
  "pop": "Stable CHD, LDL <130 mg/dL on run-in",
  "N": "10,001",
  "arms": [
   "Atorvastatin 80 mg",
   "Atorvastatin 10 mg"
  ],
  "fu": "Median 4.9 years",
  "ep": "CHD death, MI, resuscitated arrest or stroke",
  "stat": "8.7% vs 10.9% (HR 0.78)",
  "km": [
   4.9,
   "years",
   [
    8.7,
    10.9
   ]
  ],
  "f": "Atorvastatin 80 mg cut major CV events by 22% versus 10 mg in stable CHD",
  "fw": [
   "No difference",
   "Benefit but more mortality",
   "Benefit only in diabetics"
  ],
  "q": [
   [
    "What were mean LDL levels?",
    "About 77 vs 101 mg/dL",
    [
     "About 100 vs 130",
     "About 50 vs 77",
     "The same"
    ],
    "Lower is better in stable CHD."
   ],
   [
    "What was the safety signal?",
    "More transaminase elevations at 80 mg",
    [
     "More rhabdomyolysis deaths",
     "No differences",
     "More stroke"
    ],
    "Generally well tolerated."
   ]
  ]
 },
 {
  "n": "A-HeFT",
  "full": "African-American Heart Failure Trial",
  "y": 2004,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "Self-identified Black patients, NYHA III–IV HF, dilated LV",
  "N": "1,050",
  "arms": [
   "Isosorbide dinitrate + hydralazine",
   "Placebo"
  ],
  "fu": "Mean 10 months; stopped early",
  "ep": "Composite of death, HF admission and quality of life",
  "stat": "Mortality 6.2% vs 10.2% (HR 0.57)",
  "km": [
   10,
   "months",
   [
    6.2,
    10.2
   ]
  ],
  "f": "Adding isosorbide dinitrate/hydralazine cut mortality by 43% in Black patients with advanced HFrEF",
  "fw": [
   "No benefit",
   "Benefit in all ethnic groups tested",
   "Fewer admissions but no mortality benefit"
  ],
  "q": [
   [
    "What was unusual about enrolment?",
    "Restricted to self-identified Black patients; stopped early for benefit",
    [
     "Open-label",
     "Sex-specific",
     "Placebo-free"
    ],
    "A population-specific trial."
   ],
   [
    "What background therapy was used?",
    "Standard HF therapy including ACEi/ARB and beta-blocker",
    [
     "Placebo only",
     "Digoxin only",
     "None"
    ],
    "Add-on design."
   ]
  ]
 },
 {
  "n": "SHIFT",
  "full": "Systolic Heart Failure Treatment with the If Inhibitor Ivabradine Trial",
  "y": 2010,
  "j": "Lancet",
  "cat": "Heart failure",
  "pop": "HFrEF LVEF ≤35%, sinus rhythm, HR ≥70, recent admission",
  "N": "6,558",
  "arms": [
   "Ivabradine",
   "Placebo"
  ],
  "fu": "Median 22.9 months",
  "ep": "CV death or HF hospitalisation",
  "stat": "24% vs 29% (HR 0.82)",
  "km": [
   1.9,
   "years",
   [
    24,
    29
   ]
  ],
  "f": "Ivabradine reduced CV death or HF admission by 18%, driven by fewer HF admissions",
  "fw": [
   "No benefit",
   "Reduced CV death only",
   "Benefit only above resting HR 85"
  ],
  "q": [
   [
    "What is the mechanism?",
    "If-current inhibition lowering sinus rate",
    [
     "Beta-1 blockade",
     "Calcium channel blockade",
     "Neprilysin inhibition"
    ],
    "Rate lowering without negative inotropy."
   ],
   [
    "What side effects occur?",
    "Phosphenes and bradycardia",
    [
     "Hypotension",
     "Cough",
     "Hyperkalaemia"
    ],
    "Visual phenomena are characteristic."
   ]
  ]
 },
 {
  "n": "EMPHASIS-HF",
  "full": "Eplerenone in Mild Patients Hospitalization and Survival Study in Heart Failure",
  "y": 2011,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "NYHA II HF, LVEF ≤30%, on ACEi/ARB and beta-blocker",
  "N": "2,737",
  "arms": [
   "Eplerenone",
   "Placebo"
  ],
  "fu": "Median 21 months; stopped early",
  "ep": "CV death or HF hospitalisation",
  "stat": "18.3% vs 25.9% (HR 0.63)",
  "km": [
   1.75,
   "years",
   [
    18.3,
    25.9
   ]
  ],
  "f": "Eplerenone reduced CV death or HF admission by 37% in mild HFrEF",
  "fw": [
   "No benefit in NYHA II",
   "Benefit only in NYHA IV",
   "Reduced mortality but not admissions"
  ],
  "q": [
   [
    "Which population did it extend MRA benefit to?",
    "Mild (NYHA II) HFrEF",
    [
     "HFpEF",
     "Post-MI only",
     "Acute HF"
    ],
    "RALES covered severe HF."
   ],
   [
    "Main safety issue?",
    "More hyperkalaemia (K >5.5 mmol/L)",
    [
     "Gynaecomastia",
     "Neutropenia",
     "Bradycardia"
    ],
    "Monitor potassium."
   ]
  ]
 },
 {
  "n": "CIBIS-II",
  "full": "Cardiac Insufficiency Bisoprolol Study II",
  "y": 1999,
  "j": "Lancet",
  "cat": "Heart failure",
  "pop": "NYHA III–IV HF, LVEF ≤35%",
  "N": "2,647",
  "arms": [
   "Bisoprolol",
   "Placebo"
  ],
  "fu": "Mean 1.3 years; stopped early",
  "ep": "All-cause mortality",
  "stat": "11.8% vs 17.3% (HR 0.66)",
  "km": [
   1.3,
   "years",
   [
    11.8,
    17.3
   ]
  ],
  "f": "Bisoprolol cut all-cause mortality by 34% in advanced heart failure",
  "fw": [
   "No mortality effect",
   "Reduced admissions only",
   "Increased sudden death"
  ],
  "q": [
   [
    "What happened to sudden death?",
    "Reduced by about 44%",
    [
     "No change",
     "Increased",
     "Reduced by 5%"
    ],
    "A major antiarrhythmic effect."
   ],
   [
    "What type of beta-blocker is bisoprolol?",
    "Beta-1 selective",
    [
     "Non-selective",
     "Alpha-blocking",
     "Vasodilating"
    ],
    "With carvedilol and metoprolol succinate, one of three evidence-based agents."
   ]
  ]
 },
 {
  "n": "PARTNER 3",
  "full": "Placement of Aortic Transcatheter Valves 3",
  "y": 2019,
  "j": "N Engl J Med",
  "cat": "Valve disease",
  "pop": "Severe symptomatic AS at low surgical risk",
  "N": "1,000",
  "arms": [
   "Transcatheter AVR (Sapien 3)",
   "Surgical AVR"
  ],
  "fu": "1 year",
  "ep": "Death, stroke or rehospitalisation",
  "stat": "8.5% vs 15.1% (HR 0.54)",
  "km": [
   12,
   "months",
   [
    8.5,
    15.1
   ]
  ],
  "f": "TAVR was superior to surgery for one-year death, stroke or rehospitalisation in low-risk patients",
  "fw": [
   "TAVR was inferior",
   "No difference",
   "TAVR markedly increased stroke"
  ],
  "q": [
   [
    "Which secondary results favoured TAVR?",
    "Shorter stay and less new AF",
    [
     "Less new AF but longer stay",
     "More stroke",
     "More AF"
    ],
    "Faster recovery."
   ],
   [
    "Which valve was used?",
    "Sapien 3 balloon-expandable",
    [
     "CoreValve",
     "Melody",
     "MitraClip"
    ],
    "Evolut Low Risk tested the self-expanding valve."
   ]
  ]
 },
 {
  "n": "PRAETORIAN",
  "full": "Prospective Randomized Comparison of Subcutaneous and Transvenous ICD Therapy",
  "y": 2020,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "ICD indication without need for pacing",
  "N": "849",
  "arms": [
   "Subcutaneous ICD",
   "Transvenous ICD"
  ],
  "fu": "Median 49 months",
  "ep": "Device-related complications or inappropriate shocks",
  "stat": "15.1% vs 15.7% (HR 0.99)",
  "km": [
   4,
   "years",
   [
    15.1,
    15.7
   ]
  ],
  "f": "The subcutaneous ICD was non-inferior to the transvenous ICD for complications and inappropriate shocks",
  "fw": [
   "S-ICD was inferior",
   "S-ICD was superior",
   "Equal but with more deaths"
  ],
  "q": [
   [
    "What trade-off appeared?",
    "Fewer lead complications but more inappropriate shocks with S-ICD",
    [
     "More lead complications, fewer shocks",
     "No difference",
     "More infections with S-ICD"
    ],
    "Different complication profiles."
   ],
   [
    "What cannot an S-ICD provide?",
    "Pacing, including anti-tachycardia pacing",
    [
     "Defibrillation",
     "Rhythm recording",
     "Shocks"
    ],
    "Hence use in patients without pacing needs."
   ]
  ]
 },
 {
  "n": "RACE II",
  "full": "Rate Control Efficacy in Permanent Atrial Fibrillation II",
  "y": 2010,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Permanent AF, resting HR >80 bpm",
  "N": "614",
  "arms": [
   "Lenient rate control (<110 bpm)",
   "Strict rate control (<80 bpm)"
  ],
  "fu": "3 years",
  "ep": "CV death, HF admission, stroke, bleeding or arrhythmic events",
  "stat": "12.9% vs 14.9%",
  "km": [
   3,
   "years",
   [
    12.9,
    14.9
   ]
  ],
  "f": "Lenient rate control (<110 bpm) was non-inferior to strict control",
  "fw": [
   "Strict control was superior",
   "Lenient control was inferior",
   "Lenient control raised stroke"
  ],
  "q": [
   [
    "What is the practical message?",
    "A resting heart rate <110 bpm is acceptable if asymptomatic",
    [
     "Always below 60",
     "Always below 80",
     "Rate control is unnecessary"
    ],
    "Lenient first-line target."
   ],
   [
    "What was easier with lenient control?",
    "Fewer visits and less drug titration",
    [
     "More visits",
     "No difference",
     "More drugs"
    ],
    "Lower treatment burden."
   ]
  ]
 },
 {
  "n": "VANISH",
  "full": "Ventricular Tachycardia Ablation versus Escalated Antiarrhythmic Drug Therapy in Ischemic Heart Disease",
  "y": 2016,
  "j": "N Engl J Med",
  "cat": "Electrophysiology",
  "pop": "Prior MI with ICD and VT despite antiarrhythmic drug",
  "N": "259",
  "arms": [
   "Catheter ablation",
   "Escalated antiarrhythmic drugs"
  ],
  "fu": "Median 27.9 months",
  "ep": "Death, VT storm or appropriate ICD shock",
  "stat": "59.1% vs 68.5% (HR 0.72)",
  "km": [
   2.3,
   "years",
   [
    59.1,
    68.5
   ]
  ],
  "f": "Ablation reduced the composite of death, VT storm or ICD shock versus escalated drug therapy",
  "fw": [
   "No difference",
   "Increased mortality",
   "Reduced death only"
  ],
  "q": [
   [
    "What was the comparator?",
    "Escalated antiarrhythmic therapy (amiodarone or dose escalation)",
    [
     "Placebo",
     "No therapy",
     "Cardiac surgery"
    ],
    "Active comparator."
   ],
   [
    "What drove the effect?",
    "Fewer VT storms and ICD shocks, not deaths",
    [
     "Fewer deaths",
     "Fewer strokes",
     "Fewer MIs"
    ],
    "Mortality was similar."
   ]
  ]
 },
 {
  "n": "REDUCE-AMI",
  "full": "Randomized Evaluation of Decreased Usage of Beta-Blockers after AMI",
  "y": 2024,
  "j": "N Engl J Med",
  "cat": "Acute coronary",
  "pop": "Acute MI, LVEF ≥50%, early angiography",
  "N": "5,020",
  "arms": [
   "Beta-blocker",
   "No beta-blocker"
  ],
  "fu": "Median 3.5 years",
  "ep": "Death or MI",
  "stat": "7.9% vs 8.3% (HR 0.96, NS)",
  "km": [
   3.5,
   "years",
   [
    7.9,
    8.3
   ]
  ],
  "f": "Beta-blockers did not reduce death or MI after MI with preserved LVEF",
  "fw": [
   "Beta-blockers cut death or MI by 30%",
   "Beta-blockers increased death",
   "Benefit only at LVEF 50–60%"
  ],
  "q": [
   [
    "What was the design?",
    "Registry-based randomised open-label",
    [
     "Double-blind placebo",
     "Cluster crossover",
     "Single centre"
    ],
    "Used national registries for follow-up."
   ],
   [
    "Who still needs beta-blockers?",
    "LVEF ≤40% or other indications such as AF or arrhythmia",
    [
     "All post-MI patients",
     "No one",
     "Women only"
    ],
    "The trial applies to preserved EF."
   ]
  ]
 },
 {
  "n": "ASPREE",
  "full": "Aspirin in Reducing Events in the Elderly",
  "y": 2018,
  "j": "N Engl J Med",
  "cat": "Prevention",
  "pop": "Healthy adults aged ≥70 (≥65 in US minorities), no CVD",
  "N": "19,114",
  "arms": [
   "Aspirin 100 mg",
   "Placebo"
  ],
  "fu": "Median 4.7 years",
  "ep": "Disability-free survival",
  "stat": "21.5 vs 21.2 events per 1,000 person-years (HR 1.01)",
  "km": [
   4.7,
   "years",
   [
    10.1,
    10
   ],
   true
  ],
  "f": "Aspirin did not prolong disability-free survival in healthy older adults and increased major bleeding",
  "fw": [
   "Aspirin improved disability-free survival",
   "Aspirin reduced cancer deaths",
   "Aspirin reduced bleeding"
  ],
  "q": [
   [
    "What happened to major haemorrhage?",
    "3.8% vs 2.8% (higher with aspirin)",
    [
     "1.1% vs 1.0%",
     "No difference",
     "Only GI bleeding"
    ],
    "Net harm in primary prevention at older age."
   ],
   [
    "What surprising signal appeared?",
    "Higher all-cause mortality with aspirin, mainly cancer-related",
    [
     "Lower cancer",
     "Lower dementia",
     "Lower stroke"
    ],
    "Hypothesis-generating."
   ]
  ]
 },
 {
  "n": "DIG",
  "full": "Digitalis Investigation Group trial",
  "y": 1997,
  "j": "N Engl J Med",
  "cat": "Heart failure",
  "pop": "HF in sinus rhythm, LVEF ≤45%",
  "N": "6,800",
  "arms": [
   "Digoxin",
   "Placebo"
  ],
  "fu": "Mean 37 months",
  "ep": "All-cause mortality",
  "stat": "34.8% vs 35.1% (NS)",
  "km": [
   3.1,
   "years",
   [
    34.8,
    35.1
   ]
  ],
  "f": "Digoxin did not reduce mortality but reduced HF hospitalisation",
  "fw": [
   "Digoxin cut mortality by 20%",
   "Digoxin raised mortality",
   "Digoxin reduced mortality only in AF"
  ],
  "q": [
   [
    "What happened to HF admission?",
    "Reduced",
    [
     "Increased",
     "No change",
     "Only in women"
    ],
    "A symptomatic and hospitalisation benefit."
   ],
   [
    "What is the key safety issue?",
    "Toxicity, especially with high serum levels and renal impairment",
    [
     "Hypoglycaemia",
     "Cough",
     "Hepatotoxicity"
    ],
    "Narrow therapeutic window."
   ]
  ]
 }
];
