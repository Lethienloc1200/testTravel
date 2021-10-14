import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

class AboutMedia extends Component {
  render() {
    return (
      <div className="section-share  about-media">
        <div className="section-container">
          <div className="section-header">
            <div className="text-header-section">
              Một số video đẹp nhất về du lịch Bà Nà Hill Đà Nẵng
            </div>
          </div>

          <div className="customize-img about-media ">
            <div className="left">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3FqtRWLlg9k"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div className="right">
              <p className="handle-text">
                Một đất nước thành công trên chính trường là công dân của họ có
                điều kiện tỏa đi khắp thế giới nhưng điểm cuối cùng là trở về
                Đất Mẹ thương yêu. Gác tay lên trán khi tuổi xế chiều, ta tự hào
                với chính bản thân mình là ta đã được đặt chân tới những đâu, đã
                trải nghiệm những gì và thành quả ta đã đạt được mỗi nơi đã đi
                qua. Rất tiếc là thế hệ chúng tôi không được may mắn như các
                bạn. Hãy cứ bay đi khi có cơ hội, chỉ cần biết rằng bạn luôn có
                một nơi ấm áp để trở về. Đó là QUÊ HƯƠNG ❤️
              </p>
              <p className="date-text">12/10/2021 </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMedia);