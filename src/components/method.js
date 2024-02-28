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

const dataObj = [{
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
      isNeedToTreat: true,
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
}]

export default dataObj;