import React, { Component } from "react";
import PropTypes from "prop-types";
import GridListTile from "@material-ui/core/GridListTile";
import * as Scroll from "react-scroll";
import "semantic-ui-css/semantic.min.css";

class HomeComponent extends Component {
  static propTypes = {
    videosInfo: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      videosInfo: props.videosInfo
    };
  }

  componentDidMount = () => {
    window.addEventListener("resize", this.updateDimensions);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  updateDimensions = () => {
    let responsiveHeight = Math.round(document.body.clientWidth / 2.7);
    // Update videojs height
    // let player = videojs("featureVideo");
    // player.height(responsiveHeight);
    // player.tech.removeControlsListeners();

    // Update iFrame video height
    let iFramePlayer = document.getElementsByClassName("featured-video");
    if (iFramePlayer[0]) {
      iFramePlayer[0].style.height = responsiveHeight + "px";
    }
  };

  handlePageChange = (e, { activePage }) => {
    let url = "/?page=" + activePage.toString();
    window.location.href = url;
  };

  handleGridListClick = location => {
    window.location.href = location;
  };

  handleFeaturedVideoClick = () => {
    // window.location.href = '/watch?url=AU1woNn0b9g&irl=true';
    window.location.href = '/watch?url=NdeHE1nQBf8&meta_data=UCxAkiUiL3KnMl0BIFBv6xxA';
  }

  scrollToTopOfVideoGrid = () => {
    let scroll = Scroll.animateScroll;
    let gridOffsetTop = document.getElementsByClassName("MuiGridList-root")[0]
      .offsetTop;
    let featuredVideoHeight = document.getElementsByClassName("featured-video")[0]
      .offsetHeight;
    scroll.scrollTo(gridOffsetTop + featuredVideoHeight);
  };

  render() {
    const { videosInfo } = this.state;
    let featuredVideoHeight = document.body.clientWidth / 2.7;
    const parser = new DOMParser();
    return (
      <div className="content">
        <div className="content-looping-video-div">
          <video
            playsInline
            autoPlay
            loop
            muted
            className="content-looping-video"
            src="https://d7vlh3kvn1ay8.cloudfront.net/background_video.mov"
            // src="https://sc-assets-test.s3.amazonaws.com/background_video.mov"
            controlsList="nodownload"
          ></video>
          {/* <div className="content-looping-video-overlay">
            <h2 className='originals'>Win <strong>N15,000</strong> Daily In Our Featured Video's Comments Giveaway. <a href='/giveaway'>Click Here To Learn How!</a></h2>
          </div> */}
        </div>
        <div className="col-xs-12 content-videos">
          {/* <div className="content-videos-header">TRENDING</div> */}
          {/* <div className="col-xs-12">
            <CarouselVideos carouselVideos={videosInfo.trendingVideos} />
          </div> */}
          <div className="content-videos-header content-videos-header-featured" onClick={this.handleFeaturedVideoClick}>
            FEATURED VIDEO
          </div>
          <div className="col-xs-12" onClick={this.handleFeaturedVideoClick}>
            <div>
              <div className="col-xs-12">
                <img src='https://img.youtube.com/vi/NdeHE1nQBf8/mqdefault.jpg' style={{ height: 'inherit', width: 'inherit', cursor: 'pointer' }} />
                <h1 className="video-title">NEW YEAR COMPILATION FROM MR MACARONI</h1>
                {/* <video
                  id="featureVideo"
                  className="video-js vjs-default-skin featured-video"
                  controls
                  width="1200"
                  height={featuredVideoHeight}
                  data-setup='{ "techOrder": ["youtube", "html5"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=lpjXMs_YmZY" }], "youtube": { "ytControls": 1} }'
                ></video> */}
                {/* <iframe
                  className="featured-video"
                  width="1200"
                  height={featuredVideoHeight}
                  src="https://www.youtube.com/embed/DS6b6X5dsN4"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
          <div className="content-videos-header content-videos-header-featured">
            ALL VIDEOS
          </div>
          {
            import("@material-ui/core/GridList").then(GridList => {
              return (
                <GridList className="col-xs-12">
                  {videosInfo.allVideos.map((video, index) => {
                    if (
                      video.meta_data ||
                      video.is_irl ||
                      (video.accepted && (!video.is_irl || video.is_twitter))
                    ) {
                      let videoTitle = parser.parseFromString(video.title, "text/html")
                        .body.textContent;
                      let videoDate = moment(video.date).format("MMM Do, YYYY");
                      return (
                        import("@material-ui/core/GridListTile").then(GridListTile => {
                          return (
                        <GridListTile
                          className="content-videos-header-videos-section-item"
                          key={index}
                        >
                          <div className="hover-effect">
                            <div className="view view-first">
                              <div className="masked" id={video.id}>
                                {video.vimeo_video_id && (
                                  <a
                                    href={`/watch?vid=${video.vimeo_video_id}&upload=true`}
                                  >
                                    {
                                      import("react-lazy-load-image-component").then(LazyLoadImage => {
                                        return (
                                          <LazyLoadImage
                                            alt={`${videoTitle}`}
                                            height="auto"
                                            src={`${video.thumb_nail}`}
                                            width="100%"
                                          />
                                        )
                                      })
                                    }
                                    <div className="video-title">{videoTitle}</div>
                                    <div className="video-date-time">
                                      {videoDate}
                                    </div>
                                    <div className='video-views'><i className="fa fa-eye"></i>&nbsp;{video.views} Views</div>
                                  </a>
                                )}
                                {video.is_twitter && (
                                  <a
                                    href={`/watch?id=${video.id}`}
                                  >
                                    {
                                      import("react-lazy-load-image-component").then(LazyLoadImage => {
                                        return (
                                          <LazyLoadImage
                                            alt={`${videoTitle}`}
                                            height="auto"
                                            src={`${video.thumb_nail}`}
                                            width="100%"
                                          />
                                        )

                                      })
                                    }
                                    <div className="video-title">{videoTitle}</div>
                                    <div className="video-date-time">
                                      {videoDate}
                                    </div>
                                    <div className='video-views'><i className="fa fa-eye"></i>&nbsp;{video.views} Views</div>
                                  </a>
                                )}
                                {!video.vimeo_video_id && !video.is_irl && !video.is_twitter && (
                                  <a
                                    href={`/watch?url=${video.url}&meta_data=${video.meta_data}`}
                                  >
                                    {
                                      import("react-lazy-load-image-component").then(LazyLoadImage => {
                                        return (
                                          <LazyLoadImage
                                            alt={`${videoTitle}`}
                                            height="auto"
                                            src={`https://i.ytimg.com/vi/${video.url}/mqdefault.jpg`}
                                            width="100%"
                                          />
                                        )
                                      })
                                    }
                                    <h1 className="video-title">{videoTitle}</h1>
                                    <div className="video-date-time">
                                      {videoDate}
                                    </div>
                                    <div className='video-views'><i className="fa fa-eye"></i>&nbsp;{video.views} Views</div>
                                  </a>
                                )}
                                {video.is_irl && (
                                  <a
                                    href={`/watch?url=${video.url}&irl=${true}`}
                                  >
                                    {
                                      import("react-lazy-load-image-component").then(LazyLoadImage => {
                                        return (
                                          <LazyLoadImage
                                            alt={`${videoTitle}`}
                                            height="auto"
                                            src={`https://i.ytimg.com/vi/${video.url}/mqdefault.jpg`}
                                            width="100%"
                                          />
                                        )
                                      })
                                    }
                                    <div className="video-title">{videoTitle}</div>
                                    <div className="video-date-time">
                                      {videoDate}
                                    </div>
                                    <div className='video-views'><i className="fa fa-eye"></i>&nbsp;{video.views} Views</div>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </GridListTile>)})
                      );
                    }
                  })}
                </GridList>)
            })}
          <div className="col-xs-12">
            {
              import("semantic-ui-react").then(Pagination => {
                return (
                  <Pagination
                    onPageChange={this.handlePageChange}
                    defaultActivePage={videosInfo.currentPage}
                    siblingRange={3}
                    size="mini"
                    totalPages={videosInfo.totalPages}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );

  }
}

export default HomeComponent;
