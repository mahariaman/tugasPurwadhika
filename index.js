//! solve it 17

let a = ""
for(i=1; i <= 5;i++){
    for(j=1; j <=i;j++){
        a +="*"
    }
    a += "\n"
}

// =============================================== ||| =========================================== ===//
// for(i=5;i >0; i--){
//     for(j=i; j >0; j--){
//         a += "*"
//     }
//     a += "\n"
    
// }
//================================= |||| =========================== ///
// for(i=0; i < 5;i++){
//     for(j=5; j >= i;j--){
//         a+= " "
//     }
//     for(k=0; k <=i; k++ ){
//         a+= '*'
//     }
//     a+='\n'
// }
//================================= |||| =========================== ///
// for(i=1; i <= 5; i++){
//     for(j=1; j <i;j++){
//         a+= ' '
//     }
//     for(k=5; k>=i;k--){
//         a+='*'
//     }
//     a+='\n'
// }
//================================= |||| =========================== ///
// for(i=0; i <= 5;i++){
//     for(j=5; j >i; j--){
//         a+= ' '
//     }
//     for(k=1; k <= (2*i-1);k++){
//         a += '*'
//     }
//     a+='\n'
// }
//=======================================

console.log(a)