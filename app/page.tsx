"use client";
import Image from 'next/image'
import Link from 'next/link';
import Header from '@/components/header/header'
import styles from '@/components/landing.module.css'
import { Button } from "@material-tailwind/react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Footer from '@/components/footer/footer';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const diffArr = [
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    ico: 'assets/tune.svg',
    title: 'Tune',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];

const plans = [
  {
    title: '1 TB/day',
    under: 'Unlimited calls and SMS',
    list: ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'],
    button: 'Check 1.5 GB/day plans',
  },
  {
    title: '1 TB/day',
    under: 'Unlimited calls and SMS',
    list: ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'],
    button: 'Check 1.5 GB/day plans',
  },
  {
    title: '1 TB/day',
    under: 'Unlimited calls and SMS',
    list: ['Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet','Lorem ipsum dolor sit amet'],
    button: 'Check 1.5 GB/day plans',
  },
];

function FAQAcc() {
  return (
    <div>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.faqItem}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: 'var(--pink)',}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <section className={styles.Hero}>
          <div className={styles.heroContainer}>
            <div className={styles.heroContent}>
              <h1>
              Get <br />
              Rath Yatra <br />
              Special at 1999/-* 
              </h1>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor beatae dolore, quos nihil illo, debitis ex deleniti
              </h4>
              <Button className={`rounded-full bg-yellow ${styles.cta}`}>
                Check all plans now
              </Button>
            </div>
          </div>
      </section>
      <section className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutCard1}>
            <div className={styles.content}>
              <h2>
                  Mughlai Platters <br />
                  Now Available
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis nihil laborum perferendis, at ipsa nisi, dolore officiis tempore sed, ut rerum doloribus et nobis fugiat adipisci illum consequatur. Amet.</p>
            </div>
            <div className={styles.imgContainer}>
              <img src="/assets/image-2.webp" alt="Mughlai Platters" />
            </div>
          </div>
          <div className={styles.aboutCard2}>
            <div className={styles.content}>
                <h2>
                  Know about our <br />
                  Super Cooks!
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam veritatis nihil laborum perferendis, at ipsa nisi, dolore officiis tempore sed, ut rerum doloribus et nobis fugiat adipisci illum consequatur. Amet.</p>
              </div>
              <div className={styles.imgContainer}>
                <img src="/assets/image-3.webp" alt="Mughlai Platters" />
              </div>
            </div>
        </div>
      </section>
      <section className={styles.diff}>
        <div className={styles.diffContainer}>
          <h2>
            What makes Vookad different ?
          </h2>
          <div className={`${styles.cards} grid sm:grid-cols-3 grid-cols-2 gap-6`}>
              {diffArr.map(diff => {
                return (
                  <div className={styles.card} key={diff.ico}>
                    <div className={styles.imgContainer}>
                      <Image width={50} height={50} src={diff.ico} alt={diff.title} />
                    </div>
                    <div className={styles.diffcontent}>
                      <h3>{diff.title}</h3>
                      <p>{diff.text}</p>
                    </div>
                  </div>
                )
              })}
          </div>
          <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={styles.smCards}
        >
          {diffArr.map(diff => {
                return (
                  <SwiperSlide>
                    <div className={styles.card} key={diff.ico}>
                    <div className={styles.imgContainer}>
                      <Image width={50} height={50} src={diff.ico} alt={diff.title} />
                    </div>
                    <div className={styles.diffcontent}>
                      <h3>{diff.title}</h3>
                      <p>{diff.text}</p>
                    </div>
                  </div>
                  </SwiperSlide>
                )
              })}
      </Swiper>
        </div>
      </section>
      <section className={styles.plans}>
        <div className={styles.plansContainer}>
          <h2>
            Choose a plan as per your needs
          </h2>
          <div className={`${styles.cards2} grid grid-cols-1 gap-4 md:grid-cols-3 `}>
              {plans.map((plan,i) => {
                return (
                  <div className={styles.card2} key={i}>
                    <div className={styles.heading}>
                      <h3>{plan.title}</h3>
                      <small>{plan.under}</small>
                    </div>
                    <ol>
                      {plan.list.map((item,i) => {
                        return (
                          <li key={i}>
                            <Image src={`/assets/tick.svg`} width={24} height={24} alt="☑️" />
                            <span>{item}</span>
                          </li>
                        )
                      })}
                    </ol>
                    <Button className={`rounded-full bg-pink ${styles.cta2}`}>
                      {plan.button}
                    </Button>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.faqContainer}>
          <h2>
            FAQ
          </h2>
          <FAQAcc />
        </div>
      </section>
      <section className={styles.end}>
        <div className={styles.endContainer}>
          <h2>
          Enjoy unlimited calls, SMS, and high-speed internet with the
          best prepaid plans
          </h2>
          <p>
          Refuel your digital life with Jio’s prepaid plans and experience uninterrupted connectivity no matter where you are. Jio offers the best prepaid mobile recharge
plans that suit your budget and requirement. Make unlimited calls, send SMS, and enjoy seamless internet connectivity with Jio’s annual prepaid plans. You can
also browse through our annual mobile recharge plans to get value-for-money with unlimited talk time and superfast internet.
          </p>
          <br />
          <p>
          Refuel your digital life with Jio’s prepaid plans and experience uninterrupted connectivity no matter where you are. Jio offers the best prepaid mobile recharge
plans that suit your budget and requirement. Make unlimited calls, send SMS, and enjoy seamless internet connectivity with Jio’s annual prepaid plans. You can
also browse through our annual mobile recharge plans to get value-for-money with unlimited talk time and superfast internet.
          </p>
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}