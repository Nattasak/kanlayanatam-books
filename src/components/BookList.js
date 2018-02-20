import React from "react"

import BookItem from "./BookItem"

export default class BookList extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <BookItem
                title="ขยายใจให้ใหญ่ขึ้น"
                author="พระไพศาล วิสาโล"
                star="5"
                img="http://kanlayanatam.com/book/cover/kayaijai.jpg"
                pdf="http://kanlayanatam.com/book/kayaijai.pdf"
              >
                เราไม่อาจควบคุมหรือบงการให้มีแต่สิ่งดี ๆ เกิดขึ้นกับเรา
                แม้ระมัดระวังหรือทำดีที่สุดแล้ว
                ก็ยังมีเหตุร้ายหรือสิ่งไม่พึงประสงค์เกิดขึ้นกับเราอยู่นั่นเอง
                <br />
                <br />
                แต่มีสิ่งหนึ่งที่เราทำได้ก็คือ ดูแลรักษาใจให้เข้มแข็งมั่นคง
                รวมทั้งขยายใจของเราให้ใหญ่ขึ้น
                ประหนึ่งแม่น้ำที่สามารถละลายน้ำพริก หรือพิษทั้งหลายให้เจือจางลง
              </BookItem>
            </div>
            <div className="tile is-parent">
              <BookItem
                title="วางใจให้เป็น"
                author="พระไพศาล วิสาโล"
                star="5"
                img="http://kanlayanatam.com/book/cover/WarngJai.jpg"
                pdf="http://kanlayanatam.com/book/WarngJai.pdf"
              >
                เราไม่สามารถควบคุมบงการ ผู้คนและโลกรอบตัว ให้เป็นดั่งใจ
                มิอาจคาดหวังหรือเรียกร้อง ให้มีแต่สิ่งดีๆ เกิดขึ้นกับเรา
                อย่าได้มีสิ่งเลวร้ายผ่านเข้ามาในชีวิตเลย
                แต่อย่างน้อยมีสิ่งหนึ่งที่เราทนได้ นั่นคือ การวางใจให้เป็น
                ไม่ว่าอยู่ในสถานการณ์ใด
              </BookItem>
            </div>
            <div className="tile is-parent">
              <BookItem
                title="เปลี่ยนทุกข์เป็นธรรม"
                author="พระไพศาล วิสาโล"
                star="4"
                img="http://kanlayanatam.com/book/cover/pleantook.jpg"
                pdf="http://kanlayanatam.com/book/PleanTook.pdf"
              >
                ปราศจากโคลนตม ดอกบัวอันงดงาม ย่อมมิอาจเกิดขึ้นได้ฉันใด
                ปราศจากความทุกข์ ปัญญาหรือความรู้แจ้ง ก็มิอาจเกิดขึ้นได้ฉันนั้น
              </BookItem>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent">
                  <BookItem
                    title="ปิยกรณธรรม"
                    author="อ.วศิน อินทสระ"
                    star="3"
                    img="http://kanlayanatam.com/book/cover/Piyakorntham.jpg"
                    pdf="http://kanlayanatam.com/book/Piyakorntham.pdf"
                  >
                    ความเข้าใจแจ่มแจ้งในเรื่องกรรมทำให้เรามีความอดทนในการทำความดี
                    มีความบากบั่นมั่นคงไม่ท้อถอย
                    ช่วยให้กล้าเผชิญชีวิตอย่างกล้าหาญเด็ดเดี่ยว
                    สามารถมองเห็นแง่ดีแม้ของความผิดหวังพลั้งพลาด
                    แล้วตั้งต้นใหม่อย่างไม่ระย่อ
                    <br />
                    <br />
                    คำสอนเรื่องกรรมจึงเป็นเรื่องท้าทาย
                    ช่วยให้คนต่อสู้ดิ้นรนเพื่อพิสูจน์ด้วยตนเองว่าทำดีได้ดีนั้นเป็นอย่างไร
                  </BookItem>
                </div>
                <div className="tile is-parent">
                  <BookItem
                    title="ธรรมะสำหรับผู้ป่วย"
                    author="พระไพศาล วิสาโล"
                    star="4"
                    img="http://kanlayanatam.com/book/cover/book180_.jpg"
                    pdf="http://kanlayanatam.com/book/book_180.pdf"
                  >
                    ความเจ็บป่วย เป็นธรรมดาของชีวิต
                    คนเราทุกคนย่อมต้องเผชิญกับความเจ็บป่วยด้วยกันทั้งนั้น
                    <br />
                    <br />
                    แต่ในยามที่เราเจ็บป่วยทางกาย การดูแลรักษาใจไม่ให้เจ็บป่วยตาม
                    ก็เป็นสิ่งสำคัญไม่น้อย หลายคนที่ป่วยทางกายเพียงเล็กน้อย
                    แต่ป่วยทางใจมากกว่า ด้วยความคิดกังวลต่างๆ
                    ทำให้อาการทรุดหนักลงเร็วกว่าเดิม
                    <br />
                    <br />
                    เราลองมาศึกษาและหาทางเยียวยารักษาใจกันดูบ้างไหม? บางครั้ง
                    หากใจไม่ป่วย ร่างกายเราก็หายป่วยเร็วขึ้น
                    <br />
                    <br />
                    เหมือนดังพุทธพจน์ที่ว่า "ท่านพึงสำเหนียกว่า
                    ถึงกายเราจะมีโรครุมเร้า แต่ใจของเรา จักไม่มีโรครุมเร้าเลย"
                  </BookItem>
                </div>
              </div>
              <div className="tile is-parent">
                <BookItem
                  title="ได้เวลาชำระจิตชำรุด"
                  author="ปันยา"
                  star="4"
                  img="http://kanlayanatam.com/book/cover/daivela.jpg"
                  pdf="http://kanlayanatam.com/book/daivela.pdf"
                />
              </div>
            </div>
            <div className="tile is-parent">
              <BookItem
                title="ความดีและอานุภาพของความดี"
                author="อ.วศิน อินทสระ"
                star="3"
                img="http://kanlayanatam.com/book/cover/kvamdee_.jpg"
                pdf="http://kanlayanatam.com/book/kvamdee.pdf"
              >
                อะไรคือ ความดี ...???<br />
                อะไรคือ ความชั่ว ....???<br />
                ทำไมทำดีแล้วไม่ได้ดี....???<br />
                อานุภาพของความดีคืออะไร...???<br />
                วิธีการสร้างความดี...???
                <br />
                <br />
                ในทางพุทธศาสนาถือว่า การกระทำใดๆ ทั้งกาย วาจา ใจ
                ที่ไม่เบียดเบียนตนเองและผู้อื่นให้เดือดร้อน และมีประโยชน์
                ก็ถือว่าเป็นความดี การกระทำใดๆ ทั้งกาย วาจา ใจ
                ที่ทำให้ตนเองและผู้อื่นมีความเพลิดเพลิน แต่ไม่มีประโยชน์
                ซ้ำยังอาจเป็นโทษด้วย ก็ถือว่าเป็นความชั่ว
                <br />
                <br />
                ลองมาศึกษากันดูไหม...<br />
                ว่าอะไรคือความดี ?<br />
                แล้วเราจะทำดีได้อย่างไร ?<br />
                ทำดีแล้ว มีอานุภาพอย่างไร ?
              </BookItem>
            </div>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <BookItem
                title="ชีวิตที่จิตใฝ่หา"
                author="พระไพศาล วิสาโล"
                star="3"
                img="http://kanlayanatam.com/book/cover/jitphaiha.jpg"
                pdf="http://kanlayanatam.com/book/jitphaiha.pdf"
              />
            </div>
            <div className="tile is-parent is-8">
              <BookItem
                title="เรื่องของแม่ชีป่าน"
                author="เงาศิลป์ คงแก้ว"
                star="3"
                img="http://kanlayanatam.com/book/cover/MaeShePan.jpg"
                pdf="http://kanlayanatam.com/book/MaeShePan.pdf"
              >
                แม้อายุยังน้อยแต่เธอสามารถเข้าใจธรรมะที่ลึกซึ้งได้
                นอกจากการสวดมนต์แล้ว หนังสือธรรมะยังเป็นที่พึ่งทางใจของเธอ
                ที่สำคัญกว่านั้นคือการภาวนา ด้วยการพิจารณากายและใจอย่างต่อเนื่อง
                เรียนรู้จากทุกขเวทนาที่ปรากฏกับกาย เพื่อเห็นความจริงว่า
                สิ่งเหล่านี้ มิอาจยึดมั่นถือมั่นเป็นเราและของเราได้เลย
                ความจริงดังกล่าวนี้แหละ ที่จะนำไปสู่การปล่อยวาง
                จนทุกข์มิอาจย่ำยีบีฑาจิตใจได้
              </BookItem>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
