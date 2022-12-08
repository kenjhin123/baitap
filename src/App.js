
import './App.css';
import logo from './img/image 1.png'
import img from './img/image2.png'
import  capcha from './img/capcha.png'
import recaptcha from './img/reCAPTCHA.png'
import scan from './img/scan.png'
import bigscan from './img/bigscan.png'
import appstore from './img/appstore.png'
import ggplay from './img/ggplay1.png'

function App() {
  return (
    <div className="w-11/12 flex items-center justify-center m-auto flex-col">
      <div className='w-full'>
        <div className='flex justify-between  my-2'>
          <div>
            <img src={logo}></img>
          </div>
          <div className='flex items-center'>
            <button className='p-[12px] border-2 border-indigo-500/100 text-sm font-semibold rounded-md w-[100px]'>Tra cứu</button>
            <button className='p-[12px] bg-[#005EFF] text-sm font-semibold rounded-md text-white	ml-2 w-[100px]'>Liên hệ</button>

          </div>
        </div>
        <div className='w-full bg-[#FFFFFF] rounded-sm mt-2 p-2'>
          <span>Trang Chủ</span>
          <span className='px-2'>></span>
          <span>Tra cứu hành trình đơn hàng</span>
        </div>

      </div>
      <div className='w-full flex bg-[#fff] mt-3 px-[70px] py-[114px] h-[696px] gap-6'>
        <div className='w-1/2'>
          <h1 className='text-[32px] font-semibold'>Tra cứu đơn hàng</h1>
          <p className='text-[14px] font-normal text-[#656C78]'>Để tra cứu hành trình đơn hàng của mình, bạn vui lòng nhập chính xác mã đơn hàng và số điện thoại được sử dụng để đặt hàng.</p>
          <div className='mt-3'>
            <p className='text-[15px] font-semibold'>Mã đơn hàng (*)</p>
            <input className='bg-[#F3F3F7] py-[10px] px-4 w-full rounded'placeholder='Placeholder'></input>
          </div>
          <div className='mt-3'>
            <p className='text-[15px] font-semibold'>Số điện thoại đặt hàng (*)</p>
            <input className='bg-[#F3F3F7] py-[10px] px-4 w-full rounded'placeholder='Placeholder'></input>
          </div>
          <div className='flex w-full h-[100px] rounded items-center border-solid border-2 border-[#DBDBF2] px-4 mt-5'>
            <input type='checkbox'></input>
            <span className='flex-1 px-5'> Tôi không phải là người máy</span>
            <div className=' flex flex-col items-center'>
              <div >
                <img className='w-[50px]' src={capcha}></img>
              </div>
              <div>
                <img src={recaptcha}></img>
              </div>

              
            </div>
          </div>
          <button className='flex flex-row justify-center items-center px-4 py-6 w-[228px] h-[56px] bg-[#005EFF] rounded-lg text-white float-right mt-5'>Tra cứu</button>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img src={img}></img>
        </div>
      </div>
      <div className='flex justify-between w-full bg-[#FFFFFF] rounded-2xl mt-3'>
        <div className='w-1/2 flex items-center'>
          <div>
            <img src={scan}></img>
          </div>
          <div className='h-[168px] flex justify-center flex-col relative'>
            <div className='w-[132px] absolute left-[0.37%] right-[0.37%] top-[15.25%] bottom-[1.4%]'>
              <img src={appstore}></img>
            </div>
            <div className='w-[132px] absolute left-[0.37%] right-[0.37%] bottom-[24.4%]'>
              <img src={ggplay}></img>
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-between items-center'>
          <div>
            <ul className='py-4'>
              <li className='my-4'>Giới thiệu</li>
              <li className='my-4'>Sản phẩm</li>
              <li className='my-4'>Chính sách</li>
            </ul>
          </div>
          <div className='ml-2'>
            <ul>
              <li className='my-4'>Tin tức</li>
              <li className='my-4'>Câu hỏi thường gặp</li>
            </ul>
          </div>
          <div className='mr-4'>
            <img src={bigscan}></img>
          </div>


        </div>
      </div>

    </div>
  );
}

export default App;
