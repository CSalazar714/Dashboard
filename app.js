class App extends React.Component {


      render(){
            return(
                  <div className="App">
                        <h1 className="dashboardTitle">Dashboard Test! </h1>

                        <div className='ParentComponent'>
                        <SideBar className="dashboardSidebar"/>
                              <div className='InfoComponents'>
                              <Reviews/>
                              <AverageRating/>
                              <SentimentAnalysis/>
                              <WebsiteVisitors/>
                              </div>
                        </div>

                  </div>

            )
      }
}

class SideBar extends React.Component{
      render(){
            return(
                  <div className="sideBarComponent">
                        <ul>
                              <ul>Dashboard</ul>
                              <br/>
                              <ul>Widget</ul>
                              <br/>
                              <ul>Reviews</ul>
                              <br/>
                              <ul>Customers</ul>
                              <br/>
                              <ul>Online Analysis</ul>
                              <br/>
                              <ul>Settings</ul>
                        </ul>
                  </div>
            )
      }
}
class Reviews extends React.Component{
      render(){
            return(
                  <div className="reviewComponent">
                        <h2>Reviews</h2>
                        <h1>1,281</h1>
                  </div>
            )
      }
}

class AverageRating extends React.Component{
      render(){
            return(
                  <div className="ratingComponent">
                        <h2>Average Rating</h2>
                        <h1>4.6 / 5</h1>
                  </div>
            )
      }
}

class SentimentAnalysis extends React.Component{
      render(){
            return(
                  <div className="analysisComponent">
                        <h1>Sentiment Analysis</h1>
                              <ul>960</ul>
                              <ul>122</ul>
                              <ul>321</ul>
                  </div>
            )
      }
}
class WebsiteVisitors extends React.Component{
      render(){
            return(
                  <div className="visitorsComponent">
                        <h1>This is the Website Visitors Component</h1>
                        <h1>   821</h1>
                  </div>
            )
      }
}

ReactDOM.render(<App/>, document.getElementById('root'))