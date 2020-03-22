function rowWeights(array){
rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

}
