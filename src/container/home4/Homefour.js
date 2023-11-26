    import React from 'react'
    import '../home4/Homefour.css'
    import { useState } from 'react';
    import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
    import { BiPhoneCall, BiUserCircle } from "react-icons/bi";
    import {RiLockPasswordLine} from "react-icons/ri"
    import { useNavigate } from 'react-router-dom';

    

    import {GoogleLogin} from 'react-google-login'
    
    import { LoginSocialFacebook } from "reactjs-social-login";
    import { FacebookLoginButton } from "react-social-login-buttons";


    import {MdOutlineAlternateEmail} from "react-icons/md"

    const Homefour = () => {
      
     const [showAdditionalFields, setShowAdditionalFields] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleToggleFields = () => {
    setShowAdditionalFields(!showAdditionalFields);
    setShowForgotPassword(false);
  };

  const handleSignup = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', username);
    console.log('Phone:', phone);
    console.log('Confirm Password:', confirmPassword);

    setShowAdditionalFields(true);
    setShowForgotPassword(false);
  };

  const handleLogin = () => {
    console.log('تسجيل الدخول');
    
    if (email && password) {
      const formData = {
        email,
        password,
        username,
        phone,
        confirmPassword,
      };
  
    
  
      navigate('/');
    } else {
      window.alert('الرجاء إدخال بيانات صحيحة');
    }
  };



  const responseGoogle = (response) => {
    
    window.alert(response);
  };
  


  
  const [profile, setProfile] = useState(null);

  

      return (
      <section className='Lastz'>
        <div className='last'>
          <h1 className='lastas'>استماره الدخول</h1>
        <h1 className='lasta'>اهلا بك في موقعنا</h1>

        <h2 className='lasts'> الشيخ للعقارات</h2>

        <form className='lastd' name="myform" method="post" action=''>

        <div className='input-group'>

            <div class="input-filed" id='nameField'>
            <MdOutlineAlternateEmail className='emc'/>
            <input type="email" 
            placeholder="البريد الالكتروني"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>

            <div className="input-filed">
    <RiLockPasswordLine  />
    <input
      type={showPassword ? "text" : "password"}
      placeholder="كلمة المرور"
      required
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      className="password-toggle"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <BsEyeFill/> : <BsEyeSlashFill/>}
    </span>
  </div>
      
      {showAdditionalFields && (
                  <>
                    <div className="input-filed">
                      <BiUserCircle className='emca' />
                      <input
                        type="text"
                        placeholder="اسم المستخدم"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>

                    <div className="input-filed">
                      <BiPhoneCall className='emcs'/>
                      <input
                        type="tel"
                        placeholder="رقم الهاتف"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="input-filed">
    <RiLockPasswordLine className='emc' />
    <input
      type={showConfirmPassword ? "text" : "password"}
      placeholder="تأكيد كلمة المرور"
      required
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <span
      className="password-toggle"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {showConfirmPassword ? <BsEyeFill/> : <BsEyeSlashFill/>}
    </span>
  </div>
                  </>
                )}
              </div>


        <h3 className='lastk'>
              
        {showForgotPassword && (
                  <span>
                    <a href='#'>هل نسيت كلمة السر؟</a>
                  </span>
                )}

              
                </h3>

            <button className='btnx' id='signinBtn'  onClick={handleLogin}>تسجيل الدخول</button>
            <button className='btnxc' onClick={handleSignup}> إنشاء حساب جديد</button>
          


          
          <div>
    
      <GoogleLogin
        clientId="587446334356-meohng7gm3pasdq6i6scllikksf6cbm4.apps.googleusercontent.com"
        buttonText="تسجيل الدخول باستخدام Google"
          className='goo'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>



    <div>
      {!profile ? (
        <LoginSocialFacebook
        className='fac'
          appId="1883280622086565"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton className='fac' />
        </LoginSocialFacebook >
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} />
        </div>
      ) : (
        ""
      )}
    </div>

        </form>

        </div>
        </section>
      )
    }


  export default Homefour;



