
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var b=[];
  let i,j,k=0;
  for (i in matrix){
      if (i%2==0){
          for (j=0;j<matrix[i].length;j++){
              b[k]=matrix[i][j];
              k++;
          }
      }
      else{
          for (j=matrix[i].length-1;j>=0;j--){
              b[k]=matrix[i][j];
              k++;                
          }
      }
  }
      return (b);
}
