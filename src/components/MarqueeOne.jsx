// import React from "react";
// import Marquee from "react-fast-marquee";
// import { Link } from "react-router-dom";
// const MarqueeOne = () => {
//   return (
//     <div className="space bg-smoke">
//       <div className="container-fluid p-0 overflow-hidden">
//         <div className="slider__marquee">
//           <div className="marquee_mode">
//             <Marquee>
//               <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-1.svg"
//                     alt="800speedy"
//                   />
//                   <span>Tyre Repair</span>
//                 </Link>
//               </div>
//               <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-2.svg"
//                     alt="800speedy"
//                   />
//                   <span className="text-stroke">Tyre Replacement </span>
//                 </Link>
//               </div>
//                <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-2.svg"
//                     alt="800speedy"
//                   />
//                   <span className="text-stroke">Air Fill </span>
//                 </Link>
//               </div>
//                <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-2.svg"
//                     alt="800speedy"
//                   />
//                   <span className="text-stroke">Spare Tyre Change  </span>
//                 </Link>
//               </div>
//                <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-2.svg"
//                     alt="800speedy"
//                   />
//                   <span className="text-stroke">Fix Puncture Tyre </span>
//                 </Link>
//               </div>
             
//               <div className="item">
//                 <Link to="#">
//                   <img
//                     src="assets/img/icon/marquee-icon-1-2.svg"
//                     alt="800speedy"
//                   />
//                   <span className="text-stroke">Buy New Tyre</span>
//                 </Link>
//               </div>
//             </Marquee>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeOne;
import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const items = [
  { text: "Tyre Repair", icon: "assets/img/icon/marquee-icon-1-1.svg" },
  { text: "Tyre Replacement", icon: "assets/img/icon/marquee-icon-1-2.svg" },
  { text: "Air Fill", icon: "assets/img/icon/marquee-icon-1-2.svg" },
  { text: "Spare Tyre Change", icon: "assets/img/icon/marquee-icon-1-2.svg" },
  { text: "Fix Puncture Tyre", icon: "assets/img/icon/marquee-icon-1-2.svg" },
  { text: "Buy New Tyre", icon: "assets/img/icon/marquee-icon-1-2.svg" }
];

const MarqueeOne = () => {



   function SvgIcon({ src, style }) {
    const [svg, setSvg] = React.useState("");
  
    React.useEffect(() => {
      fetch(src)
        .then(res => res.text())
        .then(data => {
          // 🔥 Remove hardcoded fills & strokes
          const cleaned = data
            .replace(/fill="[^"]*"/g, 'fill="currentColor"')
            .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
            .replace(/style="[^"]*"/g, "");
  
          setSvg(cleaned);
        });
    }, [src]);
  
    return (
      <span
        
        style={style}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }
  return (
    <div className="space bg-smoke">
      <div className="container-fluid p-0 overflow-hidden">
        <div className="slider__marquee">
          <div className="marquee_mode">
            <Marquee>
              {items.map((item, index) => (
                <div className="item" key={index}>
                  <Link to="#">
                    
                    {/* ICON */}
                    <SvgIcon
                      src={item.icon}
                      style={{
                       color: index % 2 === 0 ? "#000" : "#777"
                      }}
                    />

                    {/* TEXT */}
                    <span className={index % 2 === 0 ? "" : "text-stroke"} style={{
                      marginLeft:"10px"
                    }}>
  {item.text}
</span>

                  </Link>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeOne;
