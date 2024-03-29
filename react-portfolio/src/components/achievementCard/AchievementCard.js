import "./AchievementCard.css";

const AchivementCard = ({ cardInfo, isDark }) => {
  function openUrlInNewTab(url, name) {
    console.log(name)
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    let win = window.open(url, "_blank")
    win.focus()
  }
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
    </div>
  )
}

export default AchivementCard