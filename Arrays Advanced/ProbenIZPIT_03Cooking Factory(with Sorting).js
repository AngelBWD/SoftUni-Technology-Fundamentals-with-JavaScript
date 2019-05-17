function solve(params) {
    params.pop();  

    let batches = params.map(e => e.split('#').map(Number)).sort(sortBatches);  

    let bestBatch = batches[0]; 
    console.log(`Best Batch quality: ${sum(bestBatch)}\n${bestBatch.join(' ')}`);

    function sortBatches(arr1, arr2) { 
        let arr1Sum = sum(arr1);        
        let arr2Sum = sum(arr2);       
        let result = arr2Sum - arr1Sum; 

        if (result === 0) {             
            let arr1Average = arr1Sum / arr1.length;    
            let arr2Average = arr2Sum / arr2.length;   
            result = arr2Average - arr1Average;         

            if (result === 0) { 
                result = arr1.length - arr2.length; 
            }
        }

        return result;  
    }

    function sum(arr) { 
        return arr.reduce((a, b) => a + b, 0); 
    }
}

solve([
    '5#3#2',
    '10#2#-2#1#-1',
    '4#2#1',
    'Bake It!',
]);