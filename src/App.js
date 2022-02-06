import React from 'react';
import { toast } from "react-toastify";
import {
  Button,
  Container,
  Grid,
  Header,
  Segment,
  Dropdown,
    Popup,

} from "semantic-ui-react";
import axios from 'axios'
import * as PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        companyInfo: "",
        noOfSuccessfulLaunches: 0,
        noOfUnsuccessfulLaunchesNo: 0,
        totalNumberOfLaunchesFromLaunchpad: 0,
        totalNumberOfPeopleSentToSpace: 0,
        totalTimeInSpace: 0,
        averageMassOfRockets: 0,
        launches: [],
        latestLaunchFlightName: "",
        nextLaunchFlightName: "",
        imageUrl: "",
        userLandpathName: "",
        launchpads:  [],
        launchpadId: "",
        totalNoOfLaunches: 5,
        value:'fruit'
    };
  };


    componentDidMount = async () => {
        toast("Hello??")
        this.getNoOfSuccessfulLaunches()
        this.getCompanyInfo()
        this.getNoOfSuccessfulLaunches()
        this.getNoOfUnsuccessfulLaunches()
        this.getNumberOfPeopleSentToSpace();
        this.getNextLaunch();
        this.getLatestLaunch();
        this.getAverageMassOfRockets();
        this.gettotalTimeInSpace();
       // this.getTotalNumberOfLaunchesFromLaunchpad();
        this.getLaunchpads();
        this.getLaunchPatchPhoto();
        this.getLaunchImage();
    };

    dummyData = [];
    launchImageData = [];


    getCompanyInfo = () => {
        fetch(
            "http://localhost:8080/company-info",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ companyInfo: data.summary });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getNoOfSuccessfulLaunches = () => {
        fetch(
            "http://localhost:8080/no-of-successful-launches",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ noOfSuccessfulLaunches: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getNoOfUnsuccessfulLaunches = () => {
        fetch(
            "http://localhost:8080/no-of-unsuccessful-launches",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ noOfUnsuccessfulLaunches: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };
    getNumberOfPeopleSentToSpace = () => {
        fetch(
            "http://localhost:8080/total-people-in-space",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ totalNumberOfPeopleSentToSpace: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getNextLaunch= () => {
        fetch(
            "http://localhost:8080/next-launch",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ nextLaunchFLightName: data.name });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getLatestLaunch= () => {
        fetch(
            "http://localhost:8080/latest-launch",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ latestLaunchFlightName: data.name });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    gettotalTimeInSpace= () => {
        fetch(
            "http://localhost:8080/total-time",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ totalTimeInSpace: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };


    getAverageMassOfRockets= () => {
        fetch(
            "http://localhost:8080/average-mass-of-rockets",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ averageMassOfRockets: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getTotalNumberOfLaunchesFromLaunchpad= () => {
        fetch(
            "http://localhost:8080/total-number-of-launches-from-launchpad",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {

                toast.info(`The data is ${data.totalElements}.`);

                this.setState({ totalNumberOfLaunchesFromLaunchpad: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };


    getLaunchpads= () => {
        fetch(
            "http://localhost:8080/launchpads",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                for(let i of data){
                    this.dummyData.push({value: i.id,key: i.name});
                }
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getLaunchImage= () => {
        fetch(
            "http://localhost:8080/launch-details-list",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                for(let i of data){
                    this.launchImageData.push({value: i.id,key: i.name});
                }
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getLaunchPatchPhoto= () => {
        fetch(
            "http://localhost:8080/launch-patch",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
            }
        )
            .then((r) => {
                if (r.ok) {
                    return r;
                }
                if (r.status === 401 || r.status === 403 || r.status === 500) {
                    return Promise.reject(new Error("Something went wrong"));
                }
            })
            .then((r) => {
                return r.json();
            })
            .then((data) => {
                this.setState({ launchPatchPhoto: data });
            })
            .catch((e) => {
                toast.error(e.message);
            });
    };

    getLaunchesFromLaunchpad = (userId) => {
        let launchId = userId.target.value;
        fetch(
            `http://localhost:8080/total-number-of-launches-from-launchpad?id=${launchId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((r) => {
            if (r.ok) {
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500 || r.status === 404) {
                return Promise.reject(new Error("Something went wrong"));
            }
        }).then((r) => {
            return r.json();
        })
            .then((data) => {
                console.log("we neden yani ")
                this.setState({ totalNoOfLaunches: data });
                console.log(data)
            })
            .catch((e) => {
                console.log("error?" + e.message)
                toast.error(e.message);
            });
    };


    getImage = (userLaunchId) => {
        let launchId = userLaunchId.target.value;
        console.log(launchId)
        fetch(
            `http://localhost:8080/launch-details?id=${launchId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then((r) => {
            if (r.ok) {
                return r;
            }
            if (r.status === 401 || r.status === 403 || r.status === 500 || r.status === 404) {
                return Promise.reject(new Error("Something went wrong"));
            }
        }).then((r) => {
            return r.json();
        })
            .then((data) => {
                console.log(data)
                this.setState({ imageUrl: data });

            })
            .catch((e) => {
                console.log("error?" + e.message)
                toast.error(e.message);
            });
    };
  render() {
      return (
        <div className="App">
          <Container>
            <Segment clearing>
              <Header as="h2" content="Device Visibility" >

                <Grid columns={16}>
                  <Grid.Column only="large screen" largeScreen={100}>
                    <h1> Space X </h1>
                      <p style={{ color: 'blue' }}> {this.state.companyInfo}</p>
                      <p> {this.state.noOfSuccessfulLaunches} number of successful launches and {this.state.noOfUnsuccessfulLaunches}  number of unsuccessful launches </p>
                      <p> Total number of launches from Launchpad {this.state.totalNumberOfLaunchesFromLaunchpad} hours </p>
                      <p> Total number of people that are sent to space is {this.state.totalNumberOfPeopleSentToSpace} </p>
                      <p> Total time in space of all crew-dragon flight is {this.state.totalTimeInSpace} years </p>
                      <p> Average mass of all rockets is {this.state.averageMassOfRockets} kilograms. </p>
                      <div>
                          <label>
                              Total number of launches from
                              <select onChange={this.getLaunchesFromLaunchpad}>
                                  {this.dummyData.map((option) => (
                                      <option value={option.value}>{option.key}</option>
                                  ))}
                              </select>
                               is {this.state.totalNoOfLaunches}
                          </label>
                      </div>
                      <p> The latest launch is {this.state.latestLaunchFlightName} </p>
                      <p> The next launch is {this.state.nextLaunchFLightName} </p>

                      <p>  <a href=""><img src={this.state.launchPatchPhoto}></img></a> </p>

                  </Grid.Column>
                </Grid>
              </Header>
            </Segment>
          </Container>
        </div>
    );
  }
}
export default App;