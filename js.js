// const deposit=document.getElementById('btndepo')
// const url='http://localhost:3000/';
// deposit.addEventListener('click',()=>{
//     console.log(url);
//     const depo= document.getElementById('inpu').value

//     let obj={
//         deposit: depo
//     }
//     fetch(url,
//     {method:'POST',
//     body:JSON.stringify(obj),
//     headers:{'Content-Type':'Application/json'}

// })

// console.log(JSON.stringify(obj));
// })
// const withdraw=document.getElementById('btnwith')
// withdraw.addEventListener("click",()=>{
//     const withd=document.getElementById('with').value
     
//     let obj1={
//         withdraw:withd
//     }
//     fetch(url,{
//         method:'POST',
//         body:JSON.stringify(obj1),
//         headers: {'Content-Type':'Application/json'}
//     })

// })
// const check= document.getElementById('btn')

// check.addEventListener('click',()=>{
//     let bala = document.getElementById('bala')
//     fetch(url).then((res)=>{
//         // console.log(res.json());
//         return res.json()
        
//     }).then((res)=>{
//         console.log(res[1]);
//         bala.innerHTML = res[1]
//         // document.write(res[1])
//     }).catch((err)=>{
//         console.log(err);
//     })
// })
