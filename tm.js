window.onload=function(){
	// let aside1=document.getElementsByClassName('aside1')[0];
	// let lis=aside1.getElementsByTagName('li')
	// let items=document.getElementsByClassName('items')
	// for(let i=0;i<lis.length;i++){
 //     lis[i].onmouseover=function(){
 //     	items[i].style.display='block';
     	
 //     }
 //      lis[i].onmouseout=function(){
 //     	items[i].style.display='none';
 //     }
	// }
	let banner=document.getElementsByClassName('banner')[0];
	let banner1=banner.getElementsByClassName('banner1')[0];
	let lit=banner1.getElementsByTagName('li');
	let botoom=banner.getElementsByClassName('botoom')[0];
	let list=botoom.getElementsByTagName('li');
  let fangxiang1=document.getElementsByClassName('left3')[0];
  let fangxiang=document.getElementsByClassName('right3')[0];
	 // for(let i=0;i<list.length;i++){
	 // 		list[i].onmouseover=function(){
  //      for(let j=0;j<i;j++){
  //           lit[j].style.display='none';
  //      	}	
  //      	lit[i].style.display='block';
  //      for(let j=i+1;j<lit.length;j++){
  //      		 lit[j].style.display='none';
  //      	}
  //      		}
  //      list[i].onmouseout=function(){
  //      for(let j=0;j<i;j++){
  //           lit[j].style.display='none';
  //      	}	
  //      	lit[i].style.display='block';
  //      for(let j=i+1;j<lit.length;j++){
  //      		 lit[j].style.display='none';
  //      	}
  //      		}
  //      	}

//   for(let i=0;i<list.length;i++){
//        list[i].onclick=function(){
//       for(let j=0;j<list.length;j++){
//        lit[j].style.display='none';
// }
//      }
//         lit[i].style.display='block';
// }//用闭包函数来记录

 
   //  let now =0;
   //  for(var i=0;i<list.length;i++){
   //     list[i].onclick=(function(i){
   //        return   function(){
   //          lit[now].style.display='none';
   //          lit[i].style.display='block';
   //           now=i
   //     }
   //   })(i)
   // }
    // let now =0;
    // for(let i=0;i<list.length;i++){
    //    list[i].onclick=function(){
    //    lit[now].style.display='none';
    //    lit[i].style.display='block';
    //    now=i
    //    }
    // }
      let t;
   let num=0;
  
   
   // let now =0;
   //  for(var i=0;i<list.length;i++){
   //    list[i].index=i
   //     list[i].onclick=function(){
   //     lit[now].style.display='none';
   //     lit[this.index].style.display='block';
   //     now=this.index;
   //     // num=i
   //     }
   //  }
   for(let i=0;i<list.length;i++){
    list[i].onmouseover = function(){
      for(let j=0;j<lit.length;j++){
         lit[j].style.display='none';
         list[j].style.background='#A2A2A2'
      }
       lit[i].style.display='block';
         list[i].style.background='red'
         num=i;
    }
   }
   t=setInterval(move, 1000);
   
   banner.onmouseover=function(){
    clearInterval(t)
   }
   banner.onmouseout=function(){
    t=setInterval(move, 1000);
   };
   function move(){
     num++;
     if(num==lit.length){
      num=0;
     }
    for(let i=0;i<lit.length;i++){
          lit[i].style.display='none';
          list[i].style.background='#A2A2A2'
    }
    lit[num].style.display='block';
    list[num].style.background='red';
   }
    fangxiang.onclick=function(){
       num++;
     if(num==lit.length){
      num=0;
     }
    for(let i=0;i<lit.length;i++){
          lit[i].style.display='none';
          list[i].style.background='#A2A2A2'
    }
    lit[num].style.display='block';
    list[num].style.background='red';
    }
    fangxiang1.onclick=function(){
        num--;
     if(num<0){
      num=lit.length-1;
     }
    for(let i=0;i<lit.length;i++){
          lit[i].style.display='none';
          list[i].style.background='#A2A2A2'
    }
    lit[num].style.display='block';
    list[num].style.background='red';
    }

  // for(let i=0;i<list.length;i++){
  //   list[i].onclick=function(){
  //     for(let j=0;j<lit.length;j++){
  //         lit[i].style.display='none';

  //     }

  //   }
  //   }   
}



