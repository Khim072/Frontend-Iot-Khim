import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";
import saikhim from "../assets/images/saikhim.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <img src={saikhim} alt="Natnicha Chuensabai" className="h-full w-full object-cover" />
          </div>

          <p className="text-right col-span-2">
          {/* TODO: ชื่อของตนเอง, รหัสประจำตัวนักศึกษา และแนะนำคาเฟ่นี้ต่ออีกสักหน่อย + ใส่รูปของตนเอง (ไม่จำเป็นหากไม่สะดวกใจใส่รูป) */}
          ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ ณัฐณิชา ชื่นสบาย 65070072 โดยคาเฟ่ของเรานั้นได้คัดสรรเมล็ดกาแฟจาก
          ทั่วทุกมุมโลกไม่ว่าจะเป็นทวีปแอฟริกายุโรปเอเชียตะวันออกเหนืออีสานใต้ ทำให้ได้พบเมล็ดกาแฟคุณภาพดีเยี่ยม กาแฟของเราจึงหอมนุ่มละมุนลิ้น อีกทั้ง
          ยังมีแพ้คเกจจึ้งๆเอาไว้ถ่ายรูปสวยๆได้อีกด้วย ทางคาเฟ่มีหนังสือให้ท่านอ่านระหว่างจิบกาแฟไปพลางๆ ได้ฟังขนาดนี้แล้วต้องกดสั่งแล้วนะค้าา สำหรับลูกค้าท่าน
          ใดที่อยากทราบว่าร้านอยู่ตรงไหน แน่จริงก้ลองเดาดูสิ อิอิ
        </p>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
