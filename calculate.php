<?php

header("Access-Control-Allow-Origin: *");
// Allow the content-type header
header("Access-Control-Allow-Headers: Content-Type");
// Allow the OPTIONS method (preflight request)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    exit();
}


$data = json_decode(file_get_contents("php://input"));

$Z3 = (int)str_replace(',', '', $data->input1);
$Z4 = $Z3 * 6 / 10;
$ZZ1 = $Z4 * 10/6;
$ZZ2 = $ZZ1 * 4/10;
$ZZ3 = (round(($Z4 * 10/6) / 10000000))*10000000;
$C4 = $Z4 * 2;
$E4 = 50;
$F4 = ($C4*$E4)/100;
$H4 = 12;
$H5 = 24;
$H6 = 18;
$H7 = 36;
$I4 = 23 / 100;
$J4 = 3;
$K4 = $H4/$J4;
$K5 = $H5/$J4;
$K6 = $H6/$J4;
$K7 = $H7/$J4;
$L4 = ($I4*($J4/12));
$M4 = $F4*((pow((1+$L4),$K4))*$L4)/((pow((1+$L4),$K4))-1);
$M5 = $F4*((pow((1+$L4),$K5))*$L4)/((pow((1+$L4),$K5))-1);
$M6 = $F4*((pow((1+$L4),$K6))*$L4)/((pow((1+$L4),$K6))-1);
$M7 = $F4*((pow((1+$L4),$K7))*$L4)/((pow((1+$L4),$K7))-1);
$N4 = 21;
$P4 = 38/100;
$Q4 = $P4*($J4/12);
//=(F4)*(((1+Q4)^K4)*Q4)/(((1+Q4)^K4)-1)
$R4 = ($F4)*((pow((1+$Q4),$K4))*$Q4)/((pow((1+$Q4),$K4))-1);
$R5 = ($F4)*((pow((1+$Q4),$K5))*$Q4)/((pow((1+$Q4),$K5))-1);
$R6 = ($F4)*((pow((1+$Q4),$K6))*$Q4)/((pow((1+$Q4),$K6))-1);
$R7 = ($F4)*((pow((1+$Q4),$K7))*$Q4)/((pow((1+$Q4),$K7))-1);
//=((R4-M4)*((1+Q4)^K4-1))/(Q4*(1+Q4)^K4)
// $S4 = (($R4-$M4)*((pow((1+$Q4),$K4)-1)))/($Q4*pow((1+$Q4),$K4));
$S4=(
        ($R4-$M4)*
        (pow((1+$Q4),$K4)-1)
        )
        /
        ($Q4*pow((1+$Q4),$K4));
$S5=(
        ($R5-$M5)*
        (pow((1+$Q4),$K5)-1)
        )
        /
        ($Q4*pow((1+$Q4),$K5));
$S6=(
        ($R6-$M6)*
        (pow((1+$Q4),$K6)-1)
        )
        /
        ($Q4*pow((1+$Q4),$K6));
$S7=(
        ($R7-$M7)*
        (pow((1+$Q4),$K7)-1)
        )
        /
        ($Q4*pow((1+$Q4),$K7));



//$S4 = (($R4-$M4)*(pow((1+$Q4),$K4)-1))/($Q4*(pow((1+$Q4),4$K4)));//************ */
$T4 = $M4 * $K4;
$T5 = $M5 * $K5;
$T6 = $M6 * $K6;
$T7 = $M7 * $K7;
$U4 = $T4 - $F4;
$U5 = $T5 - $F4;
$U6 = $T6 - $F4;
$U7 = $T7 - $F4;
$W4 = 0;
$X4 = $W4*0.25;
$Y4 = (($W4-$X4)+(($H4/12)-1)*$W4)/$K4;
$Y5 = (($W4-$X4)+(($H5/12)-1)*$W4)/$K5;
$Y6 = (($W4-$X4)+(($H6/12)-1)*$W4)/$K6;
$Y7 = (($W4-$X4)+(($H7/12)-1)*$W4)/$K7;

$O4 = (round(($M4+$Y4) / 1000))*1000;
$O5 = (round(($M5+$Y5) / 1000))*1000;
$O6 = (round(($M6+$Y6) / 1000))*1000;
$O7 = (round(($M7+$Y7) / 1000))*1000;

$AI4 = (round(($M4 * $K4 * 1.2) / 10000000))*10000000;
$AI5 = (round(($M5 * $K5 * 1.2) / 10000000))*10000000;
$AI6 = (round(($M6 * $K6 * 1.2) / 10000000))*10000000;
$AI7 = (round(($M7 * $K7 * 1.2) / 10000000))*10000000;
$AK4 = $O4;
$AK5 = $O5;
$AK6 = $O6;
$AK7 = $O7;
$AL4 = $U4 * 9 / 100;
$AL5 = $U5 * 9 / 100;
$AL6 = $U6 * 9 / 100;
$AL7 = $U7 * 9 / 100;
$AM4 = $S4;
$AM5 = $S5;
$AM6 = $S6;
$AM7 = $S7;
$AN4 = $AM4 * 9 / 100;
$AN5 = $AM5 * 9 / 100;
$AN6 = $AM6 * 9 / 100;
$AN7 = $AM7 * 9 / 100;
$AO4 = $AN4 + $AM4;
$AO5 = $AN5 + $AM5;
$AO6 = $AN6 + $AM6;
$AO7 = $AN7 + $AM7;
$AP4 = $AI4;
$AP5 = $AI5;
$AP6 = $AI6;
$AP7 = $AI7;
$AQ4 = $F4-($AO4+$AL4);
$AQ5 = $F4-($AO5+$AL5);
$AQ6 = $F4-($AO6+$AL6);
$AQ7 = $F4-($AO7+$AL7);
$PA4 = $AN4 + $AM4;
$PA5 = $AN5 + $AM5;
$PA6 = $AN6 + $AM6;
$PA7 = $AN7 + $AM7;
$PF4 = $F4 - $PA4;
$PF5 = $F4 - $PA5;
$PF6 = $F4 - $PA6;
$PF7 = $F4 - $PA7;
$PK4 = $C4 - $PF4;
$PK5 = $C4 - $PF5;
$PK6 = $C4 - $PF6;
$PK7 = $C4 - $PF7;
$PL4 = $F4 *1/10;
$PM4 = $PL4 + $PK4;
$PM5 = $PL4 + $PK5;
$PM6 = $PL4 + $PK6;
$PM7 = $PL4 + $PK7;

$AQ9 = $AO4 + $AL4;
$AV9 = $AO5 + $AL5;
$AV99 = $AO6 + $AL6;
$AQ10 = $C4 - $F4;
$AQ11 = $AQ9 + $AQ10;
$AV11 = $AV9 + $AQ10;
$AV111 = $AV99 + $AQ10;
$AQ12 = $AQ11+($C4*3/100);
$AQ122 = $AQ111+($C4*3/100);
$AV12 = $AV11+($C4*3/100);
$AQ13 = $AQ11 + ($F4 * 5 / 100);
$AQ133 = $AQ111 + ($F4 * 5 / 100);
$AV13 = $AV11 + ($F4 * 5 / 100);
$AQ14 = $AQ11+10000000;
$AQ144 = $AQ111+10000000;
$AV14 = $AV11+10000000;
$AQ15 = $C4 * 3 / 100;
$AQ16 = $F4 * 5 / 100;
$data = [];
$FA1 = $AK4 / 3;
$FA2 = $AK5 / 3;
$FA3 = $AK6 / 3;
$FA4 = $AK7 / 3;
$FB1 = $AK4 * $K4;
$FB2 = $AK5 * $K5;
$FB3 = $AK6 * $K6;
$FB4 = $AK7 * $K7;
$FC1 = $PM4 - $F4;
$FC2 = $PM5 - $F4;
$FC3 = $PM6 - $F4;
$FC4 = $PM7 - $F4;
$FF1 = $ZZ2 + $FC1;
$FF2 = $ZZ2 + $FC2;
$FF3 = $ZZ2 + $FC3;
$FF4 = $ZZ2 + $FC4;

// // calculate for one year
// $data['installment_sum_1'] = $K4;
// $data['monthly_installment_1'] = $AK4;
// $data['three_month_check_value_1'] = $AL4;
// $data['primary_cost_1'] = $AO4;
// $data['wage_1'] = $AP4;
// $data['prepayment_1'] = $AQ4;


// // calculate for two year
// $data['new_c1'] = $AQ9;
// $data['new_c2'] = $AQ10;
// $data['new_c3'] = $AQ11;
// $data['new_c4'] = $AQ12;
// $data['new_c5'] = $AQ13;
// $data['new_c6'] = $AQ14;
// $data['new_c7'] = $AQ15;
// $data['new_c8'] = $AQ16;
// $data['M4'] = $M4;
// $data['R4'] = $R4;
// $data['new_c11'] = $AQ16;

$data['out'] = $ZZ3;
$data['out_1'] = $FF1;
$data['out_2'] = $FA1;
$data['out_3'] = $FB1;
$data['out_4'] = $FF2;
$data['out_5'] = $FA2;
$data['out_6'] = $FB2;
$data['out_7'] = $FF3;
$data['out_8'] = $FA3;
$data['out_9'] = $FB3;
$data['out_10'] = $FF4;
$data['out_11'] = $FA4;
$data['out_12'] = $FB4;

echo json_encode($data);
