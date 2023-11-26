    import '../home1/Home.css'
    import imgh from './php.png'
  
  


    import { BiSolidBed } from "react-icons/bi";
    import { PiBathtubLight } from "react-icons/pi"
    import { RxSpaceBetweenHorizontally } from "react-icons/rx"
    import {  BiTime } from "react-icons/bi";
    import React, { Component } from "react";
    import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


    import aim from './شقه للبيع بالعاشر من رمضان بالحى 31.jpg'
    import fdj from './20131203145.jpg'
    import ljf from './4092272-99df1o.webp'

   const style = {
   position: "absolute",
    width: "70%",
    height: "65%",
   
     };
  

    export class Home extends Component {

      constructor(props) {
        super(props);
        this.state = {
          showRentOptions: false,
          currentView: '', // نوع العرض الحالي
        };
      }

      render() {




        return (


          <section>

            <div className='rog'>
              <img src={imgh}></img>
              <h1 className='tit'>اول موقع خاص بجميع انواع العقارات في العاشر من رمضان</h1>
            </div>

            <div className='bar'>

              
              <h2 className='aka'>تحب تسكن فين؟</h2>

              <div className='hra'>
                {/*  */}
                <div className='btn'>

                <button
                    className='but'
                    type="button"
                    onClick={() => this.setState({ showRentOptions: false, currentView: 'sale' })}>
                    للبيع
                  </button>


                  <button
                      className='ton'
                      type="button"
                      onClick={() => this.setState({ showRentOptions: true, currentView: 'rent' })}>
                      للايجار
                    </button>


                </div>
              {/*  */}
                <form className='form'>
                  
                  <label htmlFor='sea'></label>
                  <input className='sea' type='search' placeholder='اكتب اسم المجاوره او المكان ' id='sea'></input>

                  <label htmlFor='pro'></label>
                  <select className='pro' name='property' id='pro'>
                    <option selected disabled >نوع العقار</option>

                    <option value="شقه">شقه</option>
                    <option value="بيت">بيت</option>
                    <option value="مكتب">مكتب</option>

                    <option value="ورشه">ورشه</option>
                    <option value="محل">محل</option>
                    <option value="مصنع">مصنع</option>
                  </select>


                  <label htmlFor="rooms">  </label>
    <select className="wco" name="rooms" id="rooms">
    <option selected disabled>الغرف</option>
      <optgroup label="عدد الغرف">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="+7">+7</option>
      </optgroup>
    </select>

    <label htmlFor="bathrooms"></label>
    <select className="wcop" name="bathrooms" id="bathrooms">
    <option selected disabled> حمامات</option>
    <optgroup label="عدد الحمامات">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="+7">+7</option>
      </optgroup>
    </select>


  
    {this.state.showRentOptions && (
  <select className='rent' name='rent' id='rent'>
    <option selected disabled>المدة</option>
    <option value="1">شهر واحد</option>
    <option value="3">3 أشهر</option>
    <option value="6">6 أشهر</option>
    <option value="12">سنة كاملة</option>
  </select>
)}



                  <label htmlFor='mon'></label>
                  <input className='mon' type='text' placeholder='اكتب المبلغ الذي تريد شراء به' id='mon'></input>

                  <button className='rch' type="submit" form="nameform" value="Submit">Search</button>
                </form>

              </div>
            
            </div>


            <div className='zero'>
              
              <div>
              <h1 className='zeroa'>أفضل العروض</h1>
              </div>

              <div className='zeros'>
                <a href='/Hometwo' className='zerod'>
                  <div className='zerod'>
                    <img src={aim}></img>
                    <h1 className='zerof'>شقة للبيع بالعاشر من رمضان بالحى 31 بسعر مميز</h1>
                    <p className='zerog'>الشقة دور ثالث </p>

                    <p className='zeroh'>عدد الغرف <BiSolidBed />3</p>
                    <p className='zeroj'>عدد الحمامات<PiBathtubLight />1</p>

                    <a href='/Hometwo'><button className='zerok'>التفاصيل</button></a>
                  </div>
                </a>
              </div>



              <div className='four'>
                <a href='/Hometwo' className='foura'>
                  <div className='fours'>
                    <img src={fdj}></img>

                    <h1 className='fourd'>منزل للبيع</h1>
                    <p className='fourf'>رمي اساس و مبني دور اول بدون سقف حوائط فقط مقسم علي 5 محلات</p>

                    <p className='fourg'>مساحة <RxSpaceBetweenHorizontally />400 متر</p>


                    <a href='/Hometwo'><button className='fourh'>التفاصيل</button></a>
                  </div>
                </a>
              </div>






              <div className='six'>
                <a href='/Homethree' className='sixa'>
                  <div className='sixs'>
                    <img src={ljf}></img>

                    <h1 className='sixd'>مكاتب ادارية سيتي سنتر العاشر</h1>
                    <p className='sixf'>متاح  دور ثالث </p>

                    <p className='sixg'>مساحة<RxSpaceBetweenHorizontally />100 متر </p>
                    <p className='sixh'>عدد الحمامات<PiBathtubLight />2</p>

                    <a href='/Homethree'><button className='sixj'>التفاصيل</button></a>
                  </div>
                </a>
              </div>
            
            </div>


    {/*  */}

            <div className='lotp'>

              <h1 className='lqhti'>عقارات مضافة</h1>



              <p className='qwe'> مخزن للبيع أو للإيجار  أرضية هليكوبتر مبنى إدارة دورين تشطيب سوبر لوكس  </p>
              <a href='/Homethree'><button className='qwer'>التفاصيل</button></a>





              <p className='tyu'>مكتب للبيع في سينكو 2000 الاردنية العاشر من رمضان</p>
              <a href='/Homethree'><button className='tyui'>التفاصيل</button></a>





              <p className='iop'> منزل للبيع في العاشر من رمضان في المجاوره 16 </p>
              <a href='/Hometwo'><button className='iopa'>التفاصيل</button></a>



            </div>


            <div class="faq">
              <h1 className='spt'>س & ج</h1>
              <div class="question">
                <button class="toggle-answer">كيف يمكنني استخدام عقار الشيخ؟</button>
                <div class="answer">يجب التسجيل من خلال كلمة إنشاء حساب ووضع البيانات للحصول علي ملف يوضح كيفية عمل و إستخدام الموقع  للبحث سريعا .</div>
              </div>

              <div class="question">
                <button class="toggle-answer">كيف يمكنني البحث عن عقار للبيع ؟</button>
                <div class="answer">يمكنكم البحث عن عقاركم الخاص بواسطة نظام البحث الموجود الصفحة الرئيسية أو من خلال الصفحات الأتية ( بيوت وشقق – مصانع و مكاتب  ) و يمكنك ان تجدوا كل التفاصيل التي تريدونها في نظام البحث مثل منذ وضع العقار للبيع</div>
              </div>

              <div class="question">
                <button class="toggle-answer">لماذا مدينة العاشر من رمضان؟</button>
                <div class="answer">هي واحدة من أهم المدن المصريه و تتميز بموقع الاقتصادي واستراتيجي قوي. وتواصل العاشر نموها الثابت وتوفر فرصًا قوية و مميزة لعائد استثماري مضمون بفضل كونها مدنيه صناعيه و بفضل خبرتنا في سوق العقارات نواصل عملنا التعاوني بين المستثمرين الأفراد، الشركات ونختار لعملائنا الافضل من حيث العائد واعادة البيع.</div>
              </div>

              <div class="question">
                <button class="toggle-answer"> كيف يمكنني الاعلان عن عقار للبيع ؟</button>
                <div class="answer">عليك اولا تسجيل الدخول لضمان وصول البيانات ثم بعد ذلك الذهاب الى صفحه مصانع ومكاتب ثم انزل الى الاسفل وسجل العقار.</div>
              </div>

            </div>
            {/*  */}




            <Map
              
              google={this.props.google}
              zoom={14}
              initialCenter={
                {
                  lat: 30.303724,
                  lng: 31.707197,
                }
              }
               containerStyle={style}
              className="google-map"
            >

              <Marker  onClick={this.onMarkerClick}
                name={'Current location'} />

              <InfoWindow onClose={this.onInfoWindowClose}>
                <div>


                </div>
              </InfoWindow>
            </Map>
            {/*  */}

        

            <footer className='fotr'>
            
        <h1 className='lhud'>مواعيد العمل :</h1>
        <p className='wfhph'>من 9 صباحا<BiTime /></p>
        <p className='lshx'>من 9 مساء<BiTime /></p>
        <p className='hgprr'>© 2023  الشيخ. جميع الحقوق محفوظة.</p>
    
            </footer>

          </section>
        )
      }
    }


    export default GoogleApiWrapper({
      apiKey: ("AIzaSyAUexXyfa0AQ7dRqQ-sdTPNxRi8pnG4K80")
    })(Home);