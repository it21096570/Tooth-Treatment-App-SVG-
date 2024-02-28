// const IMethod = {
//   FILLING: 'Filling',
//   IMPLANT: 'Implant',
//   CUT: 'Cut',
//   ROOTCANAL: 'Root Canal',
// };

// const dataObj = {

//   toothNo: 'null',
//   treatments: [
//     {
//       treatment: IMethod.FILLING,
//       isNeedToTreat: false,
//     },
//     {
//       treatment: IMethod.IMPLANT,
//       isNeedToTreat: false,
//     },
//     {
//       treatment: IMethod.CUT,
//       isNeedToTreat: false,
//     },
//     {
//       treatment: IMethod.ROOTCANAL,
//       isNeedToTreat: false,
//     },
//   ]
// };

// export default dataObj;

const IMethod = {
  FILLING: 'Filling',
  IMPLANT: 'Implant',
  CUT: 'Cut',
  ROOTCANAL: 'Root Canal',
};

const ILocation = {
  TOP: "Top",
  BOTTOM: "Bottom"
}

const ISide = {
  A: "A",
  B: "B",
  C: "C"
}

const dataObj = [
  {
    toothLocation: ILocation.TOP,
    toothNo: 1,
    toothLevel: ISide.A,
    toothId: 'path1',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },
  {
    toothLocation: ILocation.TOP,
    toothNo: 2,
    toothLevel: ISide.B,
    toothId: 'path2',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },
  {
    toothLocation: ILocation.TOP,
    toothNo: 3,
    toothLevel: ISide.B,
    toothId: 'path3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 4,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 5,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 6,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 7,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 8,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 9,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 10,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 11,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 12,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 13,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 14,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 15,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 16,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 17,
    toothLevel: ISide.A,
    toothId: 'path1',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },
  {
    toothLocation: ILocation.TOP,
    toothNo: 18,
    toothLevel: ISide.B,
    toothId: 'path2',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },
  {
    toothLocation: ILocation.TOP,
    toothNo: 19,
    toothLevel: ISide.B,
    toothId: 'path3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 20,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 21,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 22,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 23,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 24,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 25,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 26,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 27,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 28,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 29,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 30,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 31,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  },

  {
    toothLocation: ILocation.TOP,
    toothNo: 32,
    toothLevel: ISide.B,
    toothId: 'component3',
    treatments: [
      {
        treatment: IMethod.FILLING,
        isNeedToTreat: false,
        treatmentId: 'treatment1',
      },
      {
        treatment: IMethod.IMPLANT,
        isNeedToTreat: false,
        treatmentId: 'treatment2',
      },
      {
        treatment: IMethod.CUT,
        isNeedToTreat: false,
        treatmentId: 'treatment3',
      },
      {
        treatment: IMethod.ROOTCANAL,
        isNeedToTreat: false,
        treatmentId: 'treatment4',
      },
    ]
  }
]

export default dataObj;