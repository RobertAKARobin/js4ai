﻿var simplex = Array (	Array(	0,16,	// Ascii 32		Array(	 ) ),	Array(	8,10,	// Ascii 33		Array(	5,21, 5, 7,-1,-1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2 ) ),	Array(	5,16,	// Ascii 34		Array(	4,21, 4,14,-1,-1,12,21,12,14 ) ),	Array(	11,21,	// Ascii 35		Array(	11,25, 4,-7,-1,-1,17,25,10,-7,-1,-1, 4,12,18,12,-1,-1, 3, 6,17, 6 ) ),	Array(	26,20,	// Ascii 36		Array(	8,25, 8,-4,-1,-1,12,25,12,-4,-1,-1,17,18,15,20,12,21, 8,21, 5,20, 3, 18, 3,16, 4,14, 5,13, 7,12,13,10,15, 9,16, 8,17, 6,17, 3,15, 1,12, 0, 8, 0, 5, 1, 3, 3 ) ),	Array(	31,24,	// Ascii 37		Array(	21,21, 3, 0,-1,-1, 8,21,10,19,10,17, 9,15, 7,14, 5,14, 3,16, 3,18, 4, 20, 6,21, 8,21,10,20,13,19,16,19,19,20,21,21,-1,-1,17, 7,15, 6,14, 4, 14, 2,16, 0,18, 0,20, 1,21, 3,21, 5,19, 7,17, 7 ) ),	Array(	34,26,	// Ascii 38		Array(	23,12,23,13,22,14,21,14,20,13,19,11,17, 6,15, 3,13, 1,11, 0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9,12,13,13,14,14,16,14,18,13,20,11,21, 9,20, 8,18, 8,16, 9,13,11,10,16, 3,18, 1,20, 0,22, 0,23, 1,23, 2 ) ),	Array(	7,10,	// Ascii 39		Array(	5,19, 4,20, 5,21, 6,20, 6,18, 5,16, 4,15 ) ),	Array(	10,14,	// Ascii 40		Array(	11,25, 9,23, 7,20, 5,16, 4,11, 4, 7, 5, 2, 7,-2, 9,-5,11,-7 ) ),	Array(	10,14,	// Ascii 41		Array(	3,25, 5,23, 7,20, 9,16,10,11,10, 7, 9, 2, 7,-2, 5,-5, 3,-7 ) ),	Array(	8,16,	// Ascii 42		Array(	8,21, 8, 9,-1,-1, 3,18,13,12,-1,-1,13,18, 3,12 ) ),	Array(	5,26,	// Ascii 43		Array(	13,18,13, 0,-1,-1, 4, 9,22, 9 ) ),	Array(	8,10,	// Ascii 44		Array(	6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6,-1, 5,-3, 4,-4 ) ),	Array(	2,26,	// Ascii 45		Array(	4, 9,22, 9 ) ),	Array(	5,10,	// Ascii 46		Array(	5, 2, 4, 1, 5, 0, 6, 1, 5, 2 ) ),	Array(	2,22,	// Ascii 47		Array(	20,25, 2,-7 ) ),	Array(	17,20,	// Ascii 48		Array(	9,21, 6,20, 4,17, 3,12, 3, 9, 4, 4, 6, 1, 9, 0,11, 0,14, 1,16, 4,17, 9,17,12,16,17,14,20,11,21, 9,21 ) ),	Array(	4,20,	// Ascii 49		Array(	6,17, 8,18,11,21,11, 0 ) ),	Array(	14,20,	// Ascii 50		Array(	4,16, 4,17, 5,19, 6,20, 8,21,12,21,14,20,15,19,16,17,16,15,15,13,13, 10, 3, 0,17, 0 ) ),	Array(	15,20,	// Ascii 51		Array(	5,21,16,21,10,13,13,13,15,12,16,11,17, 8,17, 6,16, 3,14, 1,11, 0, 8, 0, 5, 1, 4, 2, 3, 4 ) ),	Array(	6,20,	// Ascii 52		Array(	13,21, 3, 7,18, 7,-1,-1,13,21,13, 0 ) ),	Array(	17,20,	// Ascii 53		Array(	15,21, 5,21, 4,12, 5,13, 8,14,11,14,14,13,16,11,17, 8,17, 6,16, 3,14, 1,11, 0, 8, 0, 5, 1, 4, 2, 3, 4 ) ),	Array(	23,20,	// Ascii 54		Array(	16,18,15,20,12,21,10,21, 7,20, 5,17, 4,12, 4, 7, 5, 3, 7, 1,10, 0,11, 0,14, 1,16, 3,17, 6,17, 7,16,10,14,12,11,13,10,13, 7,12, 5,10, 4, 7 ) ),	Array(	5,20,	// Ascii 55		Array(	17,21, 7, 0,-1,-1, 3,21,17,21 ) ),	Array(	29,20,	// Ascii 56		Array(	8,21, 5,20, 4,18, 4,16, 5,14, 7,13,11,12,14,11,16, 9,17, 7,17, 4,16, 2,15, 1,12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6,11, 9,12,13,13, 15,14,16,16,16,18,15,20,12,21, 8,21 ) ),	Array(	23,20,	// Ascii 57		Array(	16,14,15,11,13, 9,10, 8, 9, 8, 6, 9, 4,11, 3,14, 3,15, 4,18, 6,20, 9, 21,10,21,13,20,15,18,16,14,16, 9,15, 4,13, 1,10, 0, 8, 0, 5, 1, 4, 3 ) ),	Array(	11,10,	// Ascii 58		Array(	5,14, 4,13, 5,12, 6,13, 5,14,-1,-1, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2 ) ),	Array(	14,10,	// Ascii 59		Array(	5,14, 4,13, 5,12, 6,13, 5,14,-1,-1, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5,-3, 4,-4 ) ),	Array(	3,24,	// Ascii 60		Array(	20,18, 4, 9,20, 0 ) ),	Array(	5,26,	// Ascii 61		Array(	4,12,22,12,-1,-1, 4, 6,22, 6 ) ),	Array(	3,24,	// Ascii 62		Array(	4,18,20, 9, 4, 0 ) ),	Array(	20,18,	// Ascii 63		Array(	3,16, 3,17, 4,19, 5,20, 7,21,11,21,13,20,14,19,15,17,15,15,14,13,13, 12, 9,10, 9, 7,-1,-1, 9, 2, 8, 1, 9, 0,10, 1, 9, 2 ) ),	Array(	55,27,	// Ascii 64		Array(	18,13,17,15,15,16,12,16,10,15, 9,14, 8,11, 8, 8, 9, 6,11, 5,14, 5,16, 6,17, 8,-1,-1,12,16,10,14, 9,11, 9, 8,10, 6,11, 5,-1,-1,18,16,17, 8, 17, 6,19, 5,21, 5,23, 7,24,10,24,12,23,15,22,17,20,19,18,20,15,21,12, 21, 9,20, 7,19, 5,17, 4,15, 3,12, 3, 9, 4, 6, 5, 4, 7, 2, 9, 1,12, 0, 15, 0,18, 1,20, 2,21, 3,-1,-1,19,16,18, 8,18, 6,19, 5 ) ),	Array(	8,18,	// Ascii 65		Array(	9,21, 1, 0,-1,-1, 9,21,17, 0,-1,-1, 4, 7,14, 7 ) ),	Array(	23,21,	// Ascii 66		Array(	4,21, 4, 0,-1,-1, 4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13, 11,-1,-1, 4,11,13,11,16,10,17, 9,18, 7,18, 4,17, 2,16, 1,13, 0, 4, 0 ) ),	Array(	18,21,	// Ascii 67		Array(	18,16,17,18,15,20,13,21, 9,21, 7,20, 5,18, 4,16, 3,13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0,13, 0,15, 1,17, 3,18, 5 ) ),	Array(	15,21,	// Ascii 68		Array(	4,21, 4, 0,-1,-1, 4,21,11,21,14,20,16,18,17,16,18,13,18, 8,17, 5,16, 3,14, 1,11, 0, 4, 0 ) ),	Array(	11,19,	// Ascii 69		Array(	4,21, 4, 0,-1,-1, 4,21,17,21,-1,-1, 4,11,12,11,-1,-1, 4, 0,17, 0 ) ),	Array(	8,18,	// Ascii 70		Array(	4,21, 4, 0,-1,-1, 4,21,17,21,-1,-1, 4,11,12,11 ) ),	Array(	22,21,	// Ascii 71		Array(	18,16,17,18,15,20,13,21, 9,21, 7,20, 5,18, 4,16, 3,13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0,13, 0,15, 1,17, 3,18, 5,18, 8,-1,-1,13, 8,18, 8 ) ),	Array(	8,22,	// Ascii 72		Array(	4,21, 4, 0,-1,-1,18,21,18, 0,-1,-1, 4,11,18,11 ) ),	Array(	2, 8,	// Ascii 73		Array(	4,21, 4, 0 ) ),	Array(	10,16,	// Ascii 74		Array(	12,21,12, 5,11, 2,10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7 ) ),	Array(	8,21,	// Ascii 75		Array(	4,21, 4, 0,-1,-1,18,21, 4, 7,-1,-1, 9,12,18, 0 ) ),	Array(	5,17,	// Ascii 76		Array(	4,21, 4, 0,-1,-1, 4, 0,16, 0 ) ),	Array(	11,24,	// Ascii 77		Array(	4,21, 4, 0,-1,-1, 4,21,12, 0,-1,-1,20,21,12, 0,-1,-1,20,21,20, 0 ) ),	Array(	8,22,	// Ascii 78		Array(	4,21, 4, 0,-1,-1, 4,21,18, 0,-1,-1,18,21,18, 0 ) ),	Array(	21,22,	// Ascii 79		Array(	9,21, 7,20, 5,18, 4,16, 3,13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0,13, 0,15, 1,17, 3,18, 5,19, 8,19,13,18,16,17,18,15,20,13,21, 9,21 ) ),	Array(	13,21,	// Ascii 80		Array(	4,21, 4, 0,-1,-1, 4,21,13,21,16,20,17,19,18,17,18,14,17,12,16,11,13, 10, 4,10 ) ),	Array(	24,22,	// Ascii 81		Array(	9,21, 7,20, 5,18, 4,16, 3,13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0,13, 0,15, 1,17, 3,18, 5,19, 8,19,13,18,16,17,18,15,20,13,21, 9,21,-1,-1,12, 4, 18,-2 ) ),	Array(	16,21,	// Ascii 82		Array(	4,21, 4, 0,-1,-1, 4,21,13,21,16,20,17,19,18,17,18,15,17,13,16,12,13, 11, 4,11,-1,-1,11,11,18, 0 ) ),	Array(	20,20,	// Ascii 83		Array(	17,18,15,20,12,21, 8,21, 5,20, 3,18, 3,16, 4,14, 5,13, 7,12,13,10,15, 9,16, 8,17, 6,17, 3,15, 1,12, 0, 8, 0, 5, 1, 3, 3 ) ),	Array(	5,16,	// Ascii 84		Array(	8,21, 8, 0,-1,-1, 1,21,15,21 ) ),	Array(	10,22,	// Ascii 85		Array(	4,21, 4, 6, 5, 3, 7, 1,10, 0,12, 0,15, 1,17, 3,18, 6,18,21 ) ),	Array(	5,18,	// Ascii 86		Array(	1,21, 9, 0,-1,-1,17,21, 9, 0 ) ),	Array(	11,24,	// Ascii 87		Array(	2,21, 7, 0,-1,-1,12,21, 7, 0,-1,-1,12,21,17, 0,-1,-1,22,21,17, 0 ) ),	Array(	5,20,	// Ascii 88		Array(	3,21,17, 0,-1,-1,17,21, 3, 0 ) ),	Array(	6,18,	// Ascii 89		Array(	1,21, 9,11, 9, 0,-1,-1,17,21, 9,11 ) ),	Array(	8,20,	// Ascii 90		Array(	17,21, 3, 0,-1,-1, 3,21,17,21,-1,-1, 3, 0,17, 0 ) ),	Array(	11,14,	// Ascii 91		Array(	4,25, 4,-7,-1,-1, 5,25, 5,-7,-1,-1, 4,25,11,25,-1,-1, 4,-7,11,-7 ) ),	Array(	2,14,	// Ascii 92		Array(	0,21,14,-3 ) ),	Array(	11,14,	// Ascii 93		Array(	9,25, 9,-7,-1,-1,10,25,10,-7,-1,-1, 3,25,10,25,-1,-1, 3,-7,10,-7 ) ),	Array(	10,16,	// Ascii 94		Array(	6,15, 8,18,10,15,-1,-1, 3,12, 8,17,13,12,-1,-1, 8,17, 8, 0 ) ),	Array(	2,16,	// Ascii 95		Array(	0,-2,16,-2 ) ),	Array(	7,10,	// Ascii 96		Array(	6,21, 5,20, 4,18, 4,16, 5,15, 6,16, 5,17 ) ),	Array(	17,19,	// Ascii 97		Array(	15,14,15, 0,-1,-1,15,11,13,13,11,14, 8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	17,19,	// Ascii 98		Array(	4,21, 4, 0,-1,-1, 4,11, 6,13, 8,14,11,14,13,13,15,11,16, 8,16, 6,15, 3,13, 1,11, 0, 8, 0, 6, 1, 4, 3 ) ),	Array(	14,18,	// Ascii 99		Array(	15,11,13,13,11,14, 8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	17,19,	// Ascii 100		Array(	15,21,15, 0,-1,-1,15,11,13,13,11,14, 8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	17,18,	// Ascii 101		Array(	3, 8,15, 8,15,10,14,12,13,13,11,14, 8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	8,12,	// Ascii 102		Array(	10,21, 8,21, 6,20, 5,17, 5, 0,-1,-1, 2,14, 9,14 ) ),	Array(	22,19,	// Ascii 103		Array(	15,14,15,-2,14,-5,13,-6,11,-7, 8,-7, 6,-6,-1,-1,15,11,13,13,11,14, 8, 14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	10,19,	// Ascii 104		Array(	4,21, 4, 0,-1,-1, 4,10, 7,13, 9,14,12,14,14,13,15,10,15, 0 ) ),	Array(	8, 8,	// Ascii 105		Array(	3,21, 4,20, 5,21, 4,22, 3,21,-1,-1, 4,14, 4, 0 ) ),	Array(	11,10,	// Ascii 106		Array(	5,21, 6,20, 7,21, 6,22, 5,21,-1,-1, 6,14, 6,-3, 5,-6, 3,-7, 1,-7 ) ),	Array(	8,17,	// Ascii 107		Array(	4,21, 4, 0,-1,-1,14,14, 4, 4,-1,-1, 8, 8,15, 0 ) ),	Array(	2, 8,	// Ascii 108		Array(	4,21, 4, 0 ) ),	Array(	18,30,	// Ascii 109		Array(	4,14, 4, 0,-1,-1, 4,10, 7,13, 9,14,12,14,14,13,15,10,15, 0,-1,-1,15, 10,18,13,20,14,23,14,25,13,26,10,26, 0 ) ),	Array(	10,19,	// Ascii 110		Array(	4,14, 4, 0,-1,-1, 4,10, 7,13, 9,14,12,14,14,13,15,10,15, 0 ) ),	Array(	17,19,	// Ascii 111		Array(	8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3,16, 6,16, 8,15,11,13,13,11,14, 8,14 ) ),	Array(	17,19,	// Ascii 112		Array(	4,14, 4,-7,-1,-1, 4,11, 6,13, 8,14,11,14,13,13,15,11,16, 8,16, 6,15, 3,13, 1,11, 0, 8, 0, 6, 1, 4, 3 ) ),	Array(	17,19,	// Ascii 113		Array(	15,14,15,-7,-1,-1,15,11,13,13,11,14, 8,14, 6,13, 4,11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0,11, 0,13, 1,15, 3 ) ),	Array(	8,13,	// Ascii 114		Array(	4,14, 4, 0,-1,-1, 4, 8, 5,11, 7,13, 9,14,12,14 ) ),	Array(	17,17,	// Ascii 115		Array(	14,11,13,13,10,14, 7,14, 4,13, 3,11, 4, 9, 6, 8,11, 7,13, 6,14, 4,14, 3,13, 1,10, 0, 7, 0, 4, 1, 3, 3 ) ),	Array(	8,12,	// Ascii 116		Array(	5,21, 5, 4, 6, 1, 8, 0,10, 0,-1,-1, 2,14, 9,14 ) ),	Array(	10,19,	// Ascii 117		Array(	4,14, 4, 4, 5, 1, 7, 0,10, 0,12, 1,15, 4,-1,-1,15,14,15, 0 ) ),	Array(	5,16,	// Ascii 118		Array(	2,14, 8, 0,-1,-1,14,14, 8, 0 ) ),	Array(	11,22,	// Ascii 119		Array(	3,14, 7, 0,-1,-1,11,14, 7, 0,-1,-1,11,14,15, 0,-1,-1,19,14,15, 0 ) ),	Array(	5,17,	// Ascii 120		Array(	3,14,14, 0,-1,-1,14,14, 3, 0 ) ),	Array(	9,16,	// Ascii 121		Array(	2,14, 8, 0,-1,-1,14,14, 8, 0, 6,-4, 4,-6, 2,-7, 1,-7 ) ),	Array(	8,17,	// Ascii 122		Array(	14,14, 3, 0,-1,-1, 3,14,14,14,-1,-1, 3, 0,14, 0 ) ),	Array(	39,14,	// Ascii 123		Array(	9,25, 7,24, 6,23, 5,21, 5,19, 6,17, 7,16, 8,14, 8,12, 6,10,-1,-1, 7, 24, 6,22, 6,20, 7,18, 8,17, 9,15, 9,13, 8,11, 4, 9, 8, 7, 9, 5, 9, 3, 8, 1, 7, 0, 6,-2, 6,-4, 7,-6,-1,-1, 6, 8, 8, 6, 8, 4, 7, 2, 6, 1, 5,-1, 5,-3, 6,-5, 7,-6, 9,-7 ) ),	Array(	2, 8,	// Ascii 124		Array(	4,25, 4,-7 ) ),	Array(	39,14,	// Ascii 125		Array(	5,25, 7,24, 8,23, 9,21, 9,19, 8,17, 7,16, 6,14, 6,12, 8,10,-1,-1, 7, 24, 8,22, 8,20, 7,18, 6,17, 5,15, 5,13, 6,11,10, 9, 6, 7, 5, 5, 5, 3, 6, 1, 7, 0, 8,-2, 8,-4, 7,-6,-1,-1, 8, 8, 6, 6, 6, 4, 7, 2, 8, 1, 9,-1, 9,-3, 8,-5, 7,-6, 5,-7 ) ),	Array(	23,24,	// Ascii 126		Array(	3, 6, 3, 8, 4,11, 6,12, 8,12,10,11,14, 8,16, 7,18, 7,20, 8,21,10,-1,-1, 3, 8, 4,10, 6,11, 8,11,10,10,14, 7,16, 6,18, 6,20, 7,21,10,21,12 ) ));myDlg = new Window('dialog', 'Monoline Text');myDlg.orientation = 'column';myDlg.alignment = 'right';myDlg.add('statictext', undefined, "A Jongware Script 13-Sep-2010");with (myDlg.add('group')){	orientation = 'row';	add('statictext', undefined, "Font size (pts)");	Ptsz = add('edittext', [0,0, 200,20], "10", {helpTip:"Enter the size (in points) here"});}with (myDlg.add('group')){	orientation = 'row';	TextField = add('edittext', [0,0, 300,120], "", {multiline:true, helpTip:"Enter the text here"} );}with (myDlg.add('group')){	orientation = 'row';	add('button', undefined, "OK", {helpTip:"Click to insert text into document"});	add('button', undefined, "Cancel", {helpTip:"Click to close this dialog"});}replacePrevious = false;position = Array (app.activeDocument.activeView.centerPoint[0], app.activeDocument.activeView.centerPoint[1]);if (app.selection.length == 1 && app.selection[0].note != undefined){	if (app.selection[0].note.substr(0,8) == "[JW]\tSz\t" && app.selection[0].note.length > 8)	{		split = app.selection[0].note.split('\t');		if (split.length == 5)		{			Ptsz.text = split[2];			TextField.text = split[4];			replacePrevious = true;			position = Array(app.selection[0].geometricBounds[0], app.selection[0].geometricBounds[1]);		}	}}if (myDlg.show() == 1){	ptsize = Number (Ptsz.text);	text = TextField.text;	if (text != null && text != '')	{		if (replacePrevious && app.selection.length == 1)			app.selection[0].remove();		drawString (text, ptsize, position);	}} else	myDlg.hide();	function drawString (text, pointSize, position){	var xpos = position[0];	var ypos = position[1]-21*pointSize/29;	var chCount, code, nvertex, vtx, rx,ry;	var doc = app.activeDocument;	var group = doc.groupItems.add();	var firstCharOffset = undefined;	chCount = 0;	while (chCount++ < text.length)	{		code = text.charCodeAt(chCount-1);		if (code == 10)		{			xpos = position[0];			ypos -= 1.25*pointSize;			continue;		}		if (code < 32)			continue;		if (code > 126)			continue;		code -= 32;		nvertex = simplex[code][0];				vtx = 0;		myPath = Array();		while (vtx < simplex[code][2].length)		{			rx = simplex[code][2][vtx]; vtx++;			ry = simplex[code][2][vtx]; vtx++;			if (rx == -1 && ry == -1)			{				if (myPath.length > 1)				{					p = group.pathItems.add();					p.setEntirePath (myPath);					p.filled = false;					p.stroked = true;					p.strokeWidth = 0.5;				}				myPath = Array();			} else			{				if (firstCharOffset == undefined)					firstCharOffset = rx*pointSize/29;				myPath.push (Array(xpos-firstCharOffset+rx*pointSize/29, ypos+ry*pointSize/29));			}		}		if (myPath.length > 1)		{			p = group.pathItems.add();			p.setEntirePath (myPath);			p.filled = false;			p.stroked = true;			p.strokeWidth = 0.5;		}		xpos += simplex[code][1]*pointSize/29;	}	group.note = "[JW]\tSz\t"+String(pointSize)+"\tTXT\t"+text;	doc.selection = group;}