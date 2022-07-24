function dot_Product(v1, v2)
    {
   
        let product = 0;
   
        
        for (let i = 0; i < v1.length; i++){
            for(let j = i + 1; j < v2.length; j++){
          if(dot_Product(v1[i], v2[j]) === 0){
              console.log(`${v1[i]} and ${v2[j]} are orthogonal `)
          }
        }
            
                product = product + v1[i] * v2[i];
                
                }
        
              
        
            
        return product;

        
    }