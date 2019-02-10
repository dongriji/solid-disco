
var resource = new Array(); //不同等级数在是否升仙的两种情况下对应的技能点数和仙缘点数
var deity = new Array(); //不同的元神等级对应的加成技能点数和仙缘点数

resource[0]={flyNo:[0,0]};
resource[1]={flyNo:[1,0]};
resource[2]={flyNo:[2,0]};
resource[3]={flyNo:[3,0]};
resource[4]={flyNo:[4,0]};
resource[5]={flyNo:[5,0]};
resource[6]={flyNo:[6,0]};
resource[7]={flyNo:[7,0]};
resource[8]={flyNo:[8,0]};
resource[9]={flyNo:[9,0]};
resource[10]={flyNo:[10,0]};
resource[11]={flyNo:[11,0]};
resource[12]={flyNo:[12,0]};
resource[13]={flyNo:[13,0]};
resource[14]={flyNo:[14,0]};
resource[15]={flyNo:[15,1],flyYes:[25,9]};
resource[16]={flyNo:[16,1],flyYes:[26,9]};
resource[17]={flyNo:[17,1],flyYes:[27,9]};
resource[18]={flyNo:[18,1],flyYes:[28,9]};
resource[19]={flyNo:[19,1],flyYes:[29,9]};
resource[20]={flyNo:[20,2],flyYes:[30,10]};
resource[21]={flyNo:[21,2],flyYes:[31,10]};
resource[22]={flyNo:[22,2],flyYes:[32,10]};
resource[23]={flyNo:[23,2],flyYes:[33,10]};
resource[24]={flyNo:[24,2],flyYes:[34,10]};
resource[25]={flyNo:[25,3],flyYes:[35,11]};
resource[26]={flyNo:[26,3],flyYes:[36,11]};
resource[27]={flyNo:[27,3],flyYes:[37,11]};
resource[28]={flyNo:[28,3],flyYes:[38,11]};
resource[29]={flyNo:[29,3],flyYes:[39,11]};
resource[30]={flyNo:[30,4],flyYes:[40,12]};
resource[31]={flyNo:[31,4],flyYes:[41,12]};
resource[32]={flyNo:[32,4],flyYes:[42,12]};
resource[33]={flyNo:[33,4],flyYes:[43,12]};
resource[34]={flyNo:[34,4],flyYes:[44,12]};
resource[35]={flyNo:[35,5],flyYes:[45,13]};
resource[36]={flyNo:[36,5],flyYes:[46,13]};
resource[37]={flyNo:[37,5],flyYes:[47,13]};
resource[38]={flyNo:[38,5],flyYes:[48,13]};
resource[39]={flyNo:[39,5],flyYes:[49,13]};
resource[40]={flyNo:[40,6],flyYes:[50,14]};
resource[41]={flyNo:[41,6],flyYes:[51,14]};
resource[42]={flyNo:[42,6],flyYes:[52,14]};
resource[43]={flyNo:[43,6],flyYes:[53,14]};
resource[44]={flyNo:[44,6],flyYes:[54,14]};
resource[45]={flyNo:[45,7],flyYes:[55,15]};
resource[46]={flyNo:[46,7],flyYes:[56,15]};
resource[47]={flyNo:[47,7],flyYes:[57,15]};
resource[48]={flyNo:[48,7],flyYes:[58,15]};
resource[49]={flyNo:[49,7],flyYes:[59,15]};
resource[50]={flyNo:[50,8],flyYes:[60,16]};
resource[51]={flyNo:[51,8],flyYes:[61,16]};
resource[52]={flyNo:[52,8],flyYes:[62,16]};
resource[53]={flyNo:[53,8],flyYes:[63,16]};
resource[54]={flyNo:[54,8],flyYes:[64,16]};
resource[55]={flyNo:[55,9],flyYes:[65,17]};
resource[56]={flyNo:[56,9],flyYes:[66,17]};
resource[57]={flyNo:[57,9],flyYes:[67,17]};
resource[58]={flyNo:[58,9],flyYes:[68,17]};
resource[59]={flyNo:[59,9],flyYes:[69,17]};
resource[60]={flyNo:[60,10],flyYes:[70,18]};
resource[61]={flyNo:[61,10],flyYes:[71,18]};
resource[62]={flyNo:[62,10],flyYes:[72,18]};
resource[63]={flyNo:[63,10],flyYes:[73,18]};
resource[64]={flyNo:[64,10],flyYes:[74,18]};
resource[65]={flyNo:[65,11],flyYes:[75,19]};
resource[66]={flyNo:[66,11],flyYes:[76,19]};
resource[67]={flyNo:[67,11],flyYes:[77,19]};
resource[68]={flyNo:[68,11],flyYes:[78,19]};
resource[69]={flyNo:[69,11],flyYes:[79,19]};
resource[70]={flyNo:[70,12],flyYes:[80,20]};
resource[71]={flyNo:[71,12],flyYes:[81,20]};
resource[72]={flyNo:[72,12],flyYes:[82,20]};
resource[73]={flyNo:[73,12],flyYes:[83,20]};
resource[74]={flyNo:[74,12],flyYes:[84,20]};
resource[75]={flyNo:[75,13],flyYes:[85,21]};
resource[76]={flyNo:[76,13],flyYes:[86,21]};
resource[77]={flyNo:[77,13],flyYes:[87,21]};
resource[78]={flyNo:[78,13],flyYes:[88,21]};
resource[79]={flyNo:[79,13],flyYes:[89,21]};
resource[80]={flyNo:[80,14],flyYes:[90,22]};
resource[81]={flyNo:[81,14],flyYes:[91,22]};
resource[82]={flyNo:[82,14],flyYes:[92,22]};
resource[83]={flyNo:[83,14],flyYes:[93,22]};
resource[84]={flyNo:[84,14],flyYes:[94,22]};
resource[85]={flyNo:[85,15],flyYes:[95,23]};
resource[86]={flyNo:[86,15],flyYes:[96,23]};
resource[87]={flyNo:[87,15],flyYes:[97,23]};
resource[88]={flyNo:[88,15],flyYes:[98,23]};
resource[89]={flyNo:[89,15],flyYes:[99,23]};
resource[90]={flyNo:[90,16],flyYes:[100,24]};
resource[91]={flyNo:[91,16],flyYes:[101,24]};
resource[92]={flyNo:[92,16],flyYes:[102,24]};
resource[93]={flyNo:[93,17],flyYes:[103,25]};
resource[94]={flyNo:[94,17],flyYes:[104,25]};
resource[95]={flyNo:[95,17],flyYes:[105,25]};
resource[96]={flyNo:[96,18],flyYes:[106,26]};
resource[97]={flyNo:[97,18],flyYes:[107,26]};
resource[98]={flyNo:[98,18],flyYes:[108,26]};
resource[99]={flyNo:[99,19],flyYes:[109,27]};
resource[100]={flyNo:[100,19],flyYes:[110,27]};
resource[101]={flyNo:[101,19],flyYes:[111,27]};
resource[102]={flyNo:[102,20],flyYes:[112,28]};
resource[103]={flyNo:[103,20],flyYes:[113,28]};
resource[104]={flyNo:[104,20],flyYes:[114,28]};
resource[105]={flyNo:[105,21],flyYes:[115,29]};
resource[106]={flyNo:[106,21],flyYes:[116,29]};
resource[107]={flyNo:[107,21],flyYes:[117,29]};
resource[108]={flyNo:[108,22],flyYes:[118,30]};
resource[109]={flyNo:[109,22],flyYes:[119,30]};
resource[110]={flyNo:[110,22],flyYes:[120,30]};
resource[111]={flyNo:[111,23],flyYes:[121,31]};
resource[112]={flyNo:[112,23],flyYes:[122,31]};
resource[113]={flyNo:[113,23],flyYes:[123,31]};
resource[114]={flyNo:[114,24],flyYes:[124,32]};
resource[115]={flyNo:[115,24],flyYes:[125,32]};
resource[116]={flyNo:[116,24],flyYes:[126,32]};
resource[117]={flyNo:[117,25],flyYes:[127,33]};
resource[118]={flyNo:[118,25],flyYes:[128,33]};
resource[119]={flyNo:[119,25],flyYes:[129,33]};
resource[120]={flyNo:[120,26],flyYes:[130,34]};
resource[121]={flyNo:[121,26],flyYes:[131,34]};
resource[122]={flyNo:[122,27],flyYes:[132,35]};
resource[123]={flyNo:[123,27],flyYes:[133,36]};
resource[124]={flyNo:[124,28],flyYes:[134,37]};
resource[125]={flyNo:[125,28],flyYes:[135,38]};
resource[126]={flyNo:[126,29],flyYes:[136,39]};
resource[127]={flyNo:[127,29],flyYes:[137,40]};
resource[128]={flyNo:[128,30],flyYes:[138,41]};
resource[129]={flyNo:[129,30],flyYes:[139,42]};
resource[130]={flyNo:[130,31],flyYes:[140,43]};
resource[131]={flyNo:[131,31],flyYes:[141,44]};
resource[132]={flyNo:[132,32],flyYes:[142,45]};
resource[133]={flyNo:[133,32],flyYes:[143,46]};
resource[134]={flyNo:[134,33],flyYes:[144,47]};
resource[135]={flyNo:[135,33],flyYes:[145,48]};
resource[136]={flyNo:[136,34],flyYes:[147,49]};
resource[137]={flyNo:[137,35],flyYes:[149,50]};
resource[138]={flyNo:[138,36],flyYes:[151,51]};
resource[139]={flyNo:[139,37],flyYes:[153,52]};
resource[140]={flyNo:[140,38],flyYes:[155,53]};
resource[141]={flyNo:[141,39],flyYes:[157,54]};
resource[142]={flyNo:[142,40],flyYes:[159,55]};
resource[143]={flyNo:[143,41],flyYes:[161,56]};
resource[144]={flyNo:[144,42],flyYes:[163,57]};
resource[145]={flyNo:[145,43],flyYes:[165,58]};
resource[146]={flyNo:[146,44],flyYes:[167,59]};
resource[147]={flyNo:[147,45],flyYes:[169,60]};
resource[148]={flyNo:[148,46],flyYes:[171,61]};
resource[149]={flyNo:[149,47],flyYes:[173,62]};
resource[150]={flyNo:[150,48],flyYes:[175,64]};
resource[151]={flyNo:[150,48],flyYes:[176,65]};
resource[152]={flyNo:[150,48],flyYes:[177,66]};
resource[153]={flyNo:[150,48],flyYes:[178,67]};
resource[154]={flyNo:[150,48],flyYes:[179,68]};
resource[155]={flyNo:[150,48],flyYes:[180,69]};
resource[156]={flyNo:[150,48],flyYes:[181,70]};
resource[157]={flyNo:[150,48],flyYes:[182,71]};
resource[158]={flyNo:[150,48],flyYes:[183,72]};
resource[159]={flyNo:[150,48],flyYes:[184,73]};
resource[160]={flyNo:[150,48],flyYes:[185,74]};
resource[161]={flyNo:[150,48],flyYes:[185,74]};
resource[162]={flyNo:[150,48],flyYes:[186,75]};
resource[163]={flyNo:[150,48],flyYes:[186,75]};
resource[164]={flyNo:[150,48],flyYes:[187,76]};
resource[165]={flyNo:[150,48],flyYes:[187,76]};
resource[166]={flyNo:[150,48],flyYes:[188,77]};
resource[167]={flyNo:[150,48],flyYes:[188,77]};
resource[168]={flyNo:[150,48],flyYes:[189,78]};
resource[169]={flyNo:[150,48],flyYes:[189,78]};
resource[170]={flyNo:[150,48],flyYes:[190,79]};

deity[0]=[0,0];
deity[1]=[1,1];
deity[2]=[1,1];
deity[3]=[1,1];
deity[4]=[1,1];
deity[5]=[1,1];
deity[6]=[1,1];
deity[7]=[1,1];
deity[8]=[1,1];
deity[9]=[1,1];
deity[10]=[2,2];
deity[11]=[2,2];
deity[12]=[2,2];
deity[13]=[2,2];
deity[14]=[2,2];
deity[15]=[2,2];
deity[16]=[2,2];
deity[17]=[2,2];
deity[18]=[2,2];
deity[19]=[3,3];
deity[20]=[3,3];
deity[21]=[3,3];
deity[22]=[3,3];
deity[23]=[3,3];
deity[24]=[3,3];
deity[25]=[4,4];
deity[26]=[4,4];
deity[27]=[4,4];
deity[28]=[5,5];
deity[29]=[5,5];
deity[30]=[5,5];
deity[31]=[5,5];
deity[32]=[6,6];
deity[33]=[6,6];
deity[34]=[6,6];
deity[35]=[6,6];
deity[36]=[6,6];
deity[37]=[7,7];
deity[38]=[7,7];
deity[39]=[7,7];
deity[40]=[7,7];
deity[41]=[7,7];
deity[42]=[8,8];
deity[43]=[8,8];
deity[44]=[8,8];
deity[45]=[8,8];
deity[46]=[9,9];
deity[47]=[9,9];
deity[48]=[9,9];
deity[49]=[10,10];
deity[50]=[10,10];
deity[51]=[10,10];
deity[52]=[11,11];
deity[53]=[11,11];
deity[54]=[11,11];
deity[55]=[12,12];
deity[56]=[12,12];
deity[57]=[12,12];
deity[58]=[13,13];
deity[59]=[13,13];
deity[60]=[13,13];
deity[61]=[14,14];
deity[62]=[14,14];
deity[63]=[14,14];
deity[64]=[15,15];
deity[65]=[15,15];
deity[66]=[15,15];
deity[67]=[16,16];
deity[68]=[16,16];
deity[69]=[16,16];
deity[70]=[17,17];
deity[71]=[17,17];
deity[72]=[17,17];
deity[73]=[18,18];
deity[74]=[18,18];
deity[75]=[19,19];
deity[76]=[19,19];
deity[77]=[20,20];
deity[78]=[20,20];
deity[79]=[21,21];
deity[80]=[21,21];
deity[81]=[22,22];