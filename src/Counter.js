import {useState,useEffect} from "react";

function Counter() {

    // This syntax is "array destructuring"
    const [count, setCount] = useState(0);
    
    // The book does not include this property
    const [desc, setDesc] = useState('is set to');

    useEffect(function() {
        
        // The book does not include this limit but 
        // I don't like the counter to go on forever, so...
        if (count < 60) {
            var timer = setInterval(function() {
                let version = 2;
                
                if (version === 1) {
                    setCount(count+1); // count++;
                    setCount(count+1); // count++;                
                } else if (version === 2) {
                    setCount((count)=>count+1);
                    // The book leaves it at increment by two but I like one per second, so...
                    // setCount((count)=>count+1);
                }
                console.log("count =", count);
            }, 1000);
            
        } else { // end (count < 60) 
            setDesc('has expired at');
            console.log("count =", count);
        }

        // If a function is returned by useEffect(),
        // that function is performed BEFORE each component update.
        return function() {
            clearInterval(timer);
        }
    }, [count, desc]);
// Note the dependency array in the line above;
// This was not present in the book version and 
// was only added when eslint complained about it as follows:
// Without a list of dependencies, this can lead to an infinite chain of updates.

    return (
        <>
        The counter {desc}: {count}
        </>
    )

}

export default Counter;
