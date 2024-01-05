
import "./App.css"

import Button from "./Button"

function App() {
  const users=["MEGA Yazılım/ Üretken Akademi Yazılım Programı", "Konya Ticaretler Odası Mesleki Eğitim Merkezi Python Programlama Eğitimi", "PHP ile WEB Geliştirme Eğitimi", "Simens Nx ve Catia V5 Tasarım Geliştirme Eğitimi", "İŞKUR İş Kulübü Eğitimi","Vs Code Eğitimi","Matlab Eğitimi","C++ Eğitimi","Python Eğitimi","Solidwork Eğitimi","Autocad Eğitimi"]

  

  const isActive=true

  const styles={
    h4Sytle:{backgroundColor:"lightcyan",fontSize:"20px",color:"black"}
  }

  const styless={
    h4Sytle:{backgroundColor:"lightskyblue",fontSize:"20px",color:"black"}
  }

  const Products=[
    {id:1,name:"MEGA Yazılım/ Üretken Akademi Yazılım Programı",iStock:true},
    {id:2,name:"Konya Ticaretler Odası Mesleki Eğitim Merkezi Python Programlama Eğitimi",iStock:false},
    {id:3,name:"PHP ile WEB Geliştirme Eğitimi",iStock:true},
    {id:4,name:"Simens Nx ve Catia V5 Tasarım Geliştirme Eğitimi",iStock:true},
    {id:5,name:"İŞKUR İş Kulübü Eğitimi",iStock:false},
    {id:6,name:"Vs Code Eğitimi",iStock:false},
    {id:7,name:"Matlab Eğitimi",iStock:false},
    {id:8,name:"C++ Eğitimi",iStock:false},
    {id:9,name:"Python Eğitimi",iStock:false},
    {id:10,name:"Solidwork Eğitimi",iStock:false},
    {id:11,name:"Autocad Eğitimi",iStock:false},

  ]

  return (
    <>
    
    
     <h1 style={{backgroundColor:`${isActive?"lightblue":"white"}`}}> Gönül EVREN </h1>
     <img src="https://img.imgyukle.com/2024/01/05/yhjZ6Q.jpeg" alt="" style={{padding:"1px",margin:0,borderRadius:"8px",
    border:"1px solid #bdc3cc7"}} width="150" height="150"></img>
      <h4 style={styless.h4Sytle}> HAKKINDA</h4>
  
      <div  className="bg-blue">15.07.2002'de Afyonkarahisar'da dünyaya gelmiştir. İlk-ortave lise öğretim dönemlerini Afyonkarahisar'da gerçekleştirmiştir. Üniversite öğrenimi devam etmekte ve Selçuk Üniversitesi Mekatronik Mühendisliği 4. Sınıf öğrencisidir. </div>
      <br />
      < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk3JpPyENA2OzEXnHaCHfP5ewA1JMxB9RA_w&usqp=CAU"></img>
      <h4 style={styless.h4Sytle}> TEKNOFEST</h4>
      <div className="bg-blue">2023 yılında Tarımsal İnsansız Kara Aracı kategorisi adı altında Teknofeste katılmıştır. </div>
      < img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJGjxBtgD4rS-seHqbMWj6R1EQT7VVb8TYw&usqp=CAU"></img>
      <h4 style={styless.h4Sytle}> MecTech</h4>
      <div className="bg-blue">2022 yılında MecTech firmasında stajer Mühendis olarak görev almıştır.</div>
      <br />
     

      <h4 style={styless.h4Sytle}> KATILDIĞI EĞİTİMLER</h4>
      <ul style={{backgroundColor:"lightcyan"}}>
        {users.map((user,index)=><li key={index}>{user}</li>)}
      </ul>
      <hr />
      
      
      <h4 style={styless.h4Sytle}> DEVAM EDEN EĞİTİMLER</h4>
      <ul style={{backgroundColor:"lightcyan"}}>
        {
        Products
        .filter(item=>item.iStock)
        .map(item=>
         <li key={item.id}>{item.name.toUpperCase()}</li>)
        }
      </ul>
      
      <Button/>
    </>
  )
}



export default App
