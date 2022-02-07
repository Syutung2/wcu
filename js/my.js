function downloadPDF () {
	
	const pdf = new window.jsPDF('landscape', 'pt', 'a4')
	let orderList = document.getElementById('tzs') 
        let target = orderList
        target.style.background = '#FFFFFF'
        // 经调试，55%的时候内容显示效果比较好，与模板内容样式也有关系，自己调节一下比较好
        target.style.width = '100%'
        
        pdf.addHTML(target, function () {
       
                pdf.save('PDF存档.pdf')
            
        })
    


}

        function onShow(){
            var xb = document.getElementsByName('xb')[0].value
            var name = document.getElementsByName('name')[0].value
            if (
                name === ''
            ) {
                alert('名字为空')
            } else {
                console.info(name)
            console.info(xb)
            document.getElementById('download').hidden = false

            document.getElementById('tzs').hidden = false
            document.getElementById('tzsnm').innerText = name + '同学：'
            document.getElementById('tzsxb').innerHTML = '<p>&nbsp;&nbsp;&nbsp;&nbsp;祝贺你被我校 ' + xb + 
                ' 专业录取（本科），请自行报道。<br>你需要按照《2022新版'+xb+'专业培养方案》修满172学分，并在毕业前缴纳完四年本科生学费，即可完成毕业并获取'+xb+'专业学位证书和中国野鸡大学毕业证书。</p>'
            }
            var timestamp = Date.parse(new Date());
            var date = new Date(timestamp);
            var Y =date.getFullYear();
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            var D =  date.getDate(); 
            console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' ); 
            document.getElementById('tzsdate').innerText = Y + ' 年 '  + M+ ' 月 ' + D+ ' 日'

        }

        function onShow2(){
            var xb = document.getElementsByName('xb')[0].value
            var name = document.getElementsByName('name')[0].value
            var birth  = document.getElementsByName('birth')[0].value
            var xingbie = document.getElementsByName('xingbie')[0].checked === true?'男':'女'
            if (
                name === ''
            ) {
                alert('名字为空')
            } else {
            console.info(name)
            console.info(xb)
            var q =  birth.split('-')
            document.getElementById('download').hidden = false
            document.getElementById('xwz').hidden = false
            document.getElementById('tzsxb').innerHTML = '<p>&nbsp;&nbsp;&nbsp;&nbsp;'+ name + '同学,'  + xingbie + ',' + q[0] + '年' + q[1] +'月' + q[2] +'日生' +
                ',在&nbsp; 中国野鸡大学'+xb+'专业完成了本科学习计划，现已毕业，经审核符合《中华人民共和国学位条例》的规定，授予&nbsp; 野鸡&nbsp; 学士学位证书。</p>'
            }
            var timestamp = Date.parse(new Date());
            var date = new Date(timestamp);
            var Y =date.getFullYear();
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            var D =  date.getDate(); 
            console.log("当前时间：" + Y + '年'  + M+ '月' + D+ '日' ); 
            document.getElementById('tzsdate').innerText = Y + ' 年 '  + M+ ' 月 ' + D+ ' 日'

        }
        function downloadPDF2 () {
	
            const pdf = new window.jsPDF('landscape', 'pt', '')
            let orderList = document.getElementById('xwz') 
                let target = orderList
                target.style.background = '#FFFFFF'
                // 经调试，55%的时候内容显示效果比较好，与模板内容样式也有关系，自己调节一下比较好
                target.style.width = '80%'
                
                pdf.addHTML(target, function () {
               
                        pdf.save('PDF存档.pdf')
                    
                })
            
        
        
        }