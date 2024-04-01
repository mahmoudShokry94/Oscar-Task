import Image from "next/image";
import styles from "./page.module.css";
import BorderBackground from "@/public/border-image.svg";
import DottedBackground from "@/public/dott-image.svg";
import HumanImage from "@/public/humanImage.png";
import ZoomImage from "@/public/zoom-icon.svg";

export default function Home() {
  return (
    <main>
      <div className="container w-4/6 m-auto flex justify-between mt-24 gap-1">
        <div className="about-section flex-1 flex flex-col justify-between p-10 pb-0">
          <div>
            <small className="text-[1rem]">About Us</small>
            <p
              className={`${styles["about__title"]} font-bold text-[2.875rem] whitespace-nowrap`}
            >
              WHO WE ARE
            </p>
          </div>
          <p className="my-10 text-[1rem]">
            Speed Architectural Technology Co, a SPEETECH group of company in
            AlKhobar, is one of the leading Contracting & Trading companies in
            Saudi Arabia undertaking major Civil, Mechanical, Piping, Fire
            Protection, Electrical, Instrumentation projects, Foc, Instrument
            calibration. We had launched our operation in Al-Khobar in the Year
            2003 to cater the needs of the Kingdom’s fast-growing economy /
            local industries. The dynamic growth throughout Saudi Arabia, in
            addition to the regional market, sets an unprecedented expansion
            rate and is the result of proving itself a dedicated and trustworthy
            partner, whilst embedding itself in the heart of pioneering
            excellence within its field. With professional expertise and the
            highest classification and qualifications with
          </p>
          <div className="button-warpper">
            <button className="bg-[#783AA8] p-3 text-white rounded-sm">
              Read More {"-->"}
            </button>
          </div>
        </div>
        <div className={`${styles["image-section"]} flex-1`}>
          <Image src={DottedBackground} className={styles["dotted-image"]} />
          <Image src={BorderBackground} className={styles["border-image"]} />
          <div className={styles["human-image"]}>
            <Image src={HumanImage} />
            <div className={styles["human-image-overlay"]}>
              <Image src={ZoomImage} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
