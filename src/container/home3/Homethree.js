import "./Homethree.css"
import React from 'react'
import imgs from '../home2/WhatsApp Image 2023-11.jpeg'
import {  BiTime } from "react-icons/bi";
import {  PiMoney } from "react-icons/pi"
import { RxSpaceBetweenHorizontally } from "react-icons/rx"


import { useState } from 'react';
import onem from './Whats 2023.jpeg'
import twom from './item494735.jpg'
import sevnm from './WhatsApp  PM.jpeg'

import sixc from './WhatsApp Ima at 10.jpeg'
import eigxc from './72868036-800x600.jpg'
import zerox from '../home1/4092272-99df1o.webp'





function Homethree() {


  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [img, setimg] = useState('');
  
   const handleAdSubmit = () => {
     const message = 'سيتم مراجعه البيانات وارسال التاكيد عبر الايميل بتاعك فتاكد انك قمت بتسجيل الدخول على الموقع';
    window.alert(message);
   };




  return (
  <section>

  <div className='try'>
        <img src={imgs}></img>
        <a href='#tens'>
        <div class="circlea" >
        <p className='pena'>مصانع و مخازن</p>
    </div>
    </a>

    <a href='#plusn'>
    <div class="circles">
        <p className='pen'>اعلانك</p>
    </div>
    </a>

    <a href='#sevns'>
    <div class="circled">
        <p className='pen'>مكاتب</p>
    </div>
    </a>
        </div>

{/*  */}

<div className='ten'>
          <div>
          <h1 className='tena' id='tens'>عروض علي مصانع و مخازن</h1>
          </div>

          <div className='tend'>
            <a  className='tenf'>
              <div className='teng'>
                <img src={onem}></img>

                <h1 className='tenh'>للإيجار مخزن جمالون  يصلح لكافة الأنشطة تصنيع او تخزين</h1>
                <p className='tenj'>كهرباء ٣فاز ارضيه هليكوبتر  ارتفاع الجمالون ٧متر</p>

                <p className='tenk'> <RxSpaceBetweenHorizontally />٣٠٠متر </p>
                <p className='tenl'> <PiMoney />10000</p>

                <a href='#'><button className='tenz'>تواصل معنا</button></a>
              </div>
            </a>
          </div>

{/*  */}

          <div className='nine'>
            <a  className='ninea'>
              <div className='nines'>
                <img src={twom}></img>

                <h1 className='nined'>مصنع للبيع بالعاشر من رمضان نشاط هندسى</h1>
                <p className='ninef'>مبني دورين
الدور الاول 7.5متر ميزانين
الدور التاني 4 متر
رخصه اربع ادوار</p>

                <p className='nineg'> <RxSpaceBetweenHorizontally /> 1250 متر</p>
                <p className='nineh'> <PiMoney />6500000</p>

                <a href='#'><button className='ninej'>تواصل معنا</button></a>
              </div>
            </a>
          </div>






          <div className='eight'>
            <a  className='eighta'>
              <div className='eights'>
                <img src={sevnm}></img>

                <h1 className='eightd'>مخزن للبيع أو للإيجار  أرضية هليكوبتر مبنى إدارة دورين تشطيب سوبر لوكس</h1>
                <p className='eightf'>كهرباء وصرف ومياه إرتفاع الجمالون من الجوانب 7 م شوارع واسعة لدخول الشاحنات الكبيرة والحاويات المخزن</p>
              
                <p className='eightg'><RxSpaceBetweenHorizontally /> 550متر</p>
                <p className='eighth'><PiMoney />مجهول</p>

                <a href='#'><button className='eightj'>تواصل معنا</button></a>
              </div>
            </a>
          </div>
        
        </div>


    <hr className='hrf'></hr>

 
      <div className='sevn'>

      <h1 className='sevna' id='sevns'>عروض علي المكاتب</h1>


      <div className='sevnd'>
            <a  className='sevnf'>
              <div className='sevng'>
                <img src={sixc}></img>

                <h1 className='sevnh'>مكتب تجاري  للبيع كاش بالعاشر من رمضان</h1>

                <p className='sevnj'>  سوبر لوكس  مطبخ  وارضيات باركيه ودهانات واضاءات وديكور و كاميرات وسرفر  الدور الثالث للاستفسار</p>

                <p className='sevnk'> <RxSpaceBetweenHorizontally /> 86متر</p>
                <p className='sevnl'> <PiMoney />2150000</p>

                <a href='#'><button className='sevnz'>تواصل معنا</button></a>
              </div>
            </a>
          </div>



           <div className='five'>
            <a  className='fivea'>
              <div className='fives'>
                <img src={eigxc}></img>

                <h1 className='fived'>مكتب للبيع في سينكو 2000 الاردنية العاشر من رمضان</h1>
                <p className='fivef'>مكتب للبيع دور اول متشطب مقسم ٣ قطع ومطبخ وحمام علي الوجة الرئيسية اعلي مكتبة الإسكندرية يري صيدناوي    </p>

                <p className='fiveg'><RxSpaceBetweenHorizontally /> 55متر</p>
                <p className='fiveh'><PiMoney /> 825000</p>

                <a href='#'><button className='fivej'>تواصل معنا</button></a>
              </div>
            </a>
          </div> 





 
          <div className='theera'>
            <a  className='theers'>
              <div className='theerd'>
                <img src={zerox}></img>

                <h1 className='theerf'>مكاتب ادارية سيتي سنتر العاشر</h1>
                <p className='theerg'>بقلب العاشر من رمضان بأفضل مولات بالاردنيه  على شارع رئيسى بأبراج سيتى سنتر/ ٤ اسانسير</p>
              
                <p className='theerh'><RxSpaceBetweenHorizontally /> 85متر</p>
                <p className='theerj'><PiMoney /> 150000</p>

                <a href='#'><button className='theerk'>تواصل معنا</button></a>
              </div>
            </a>
          </div>

      </div> 
      


       <hr className='hrv'></hr> 


       <div className="plus">
      <h2 className="plusa" id="plusn">إنشاء إعلان</h2>
      
        <form>
      <label className="plusss">معلومات عن العقار</label>
      <input 
      type="text"
      className="pluss"
        placeholder="تفاصيل العقار"
        required
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

<label className="plusdd">تحديد السعر</label>
      <input
        type="text"
        placeholder="السعر المطلوب"
        className="plusd"
        value={price}
        required
        onChange={(e) => setPrice(e.target.value)}
      />

<label className="plusff">معلومات عن مساحه العقار</label>
      <input
        type="number"
        placeholder="المساحة (متر مربع)"
        className="plusf"
        value={area}
        required
        onChange={(e) => setArea(e.target.value)}
      />

<label className="plusgg">تحديد عدد الغرف</label>
      <input
        type="number"
        placeholder="عدد الغرف"
        className="plusg"
        value={bedrooms}
        required
        onChange={(e) => setBedrooms(e.target.value)}
      />

<label className="plushh">تحديد عدد الحمامات</label>
      <input
        type="number"
        placeholder="عدد الحمامات"
        className="plush"
        required
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
      />

<label className="plusjj"> اقرب مكان لهذا العقار</label>
      <input
        type="text"
        placeholder="مكان العقار"
        className="plusj"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

<label className="pluskk">  رقم التليفون</label>
        <input
        type="text"
        placeholder="**********+20"
        className="plusk"
        required
        value= {phoneNumber}
        onChange={(e) => setphoneNumber(e.target.value)}
      />

<label className="plusll">معلومات عن العقار بالصور</label>
        <input
        type="file"
        placeholder="رفع الصور"
        className="plusl"
        value={img}
        onChange={(e) => setimg(e.target.value)}
      />

<input className="plusz" type="submit" value="نشر الاعلان"  placeholder="نشر الاعلان" onClick={handleAdSubmit} name="  نشر الإعلان"></input>


<button className="plusx" type="submit"  name="حذف">
  حذف
</button>

</form>
    </div>

    

    <footer>
<h1 className='lhud'>مواعيد العمل :</h1>
<p className='wfhph'>من 9 صباحا<BiTime/></p>
<p className='lshx'>من 9 مساء<BiTime/></p>
<p className='hgprr'>© 2023  الشيخ. جميع الحقوق محفوظة.</p>
</footer>



  </section>
  )
}

export default Homethree;