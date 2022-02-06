import React from 'react';
import {
  Container,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        companyInfo: "",
        noOfSuccessfulLaunches: 0,
        noOfUnsuccessfulLaunchesNo: 0,
        totalNumberOfPeopleInCrew: 0,
        totalTimeInSpace: 0,
        averageMassOfRockets: 0,
        totalNoOfLaunches: 0,
        latestLaunchFlightName: "",
        nextLaunchFlightName: "",
        value:''
    };
  };

    componentDidMount = async () => {
        this.getCompanyInfo()
        this.getNoOfSuccessfulLaunches()
        this.getNoOfUnsuccessfulLaunches()
        this.getNumberOfPeopleInCrew()
        this.getTotalTimeInSpace()
        this.getAverageMassOfRockets()
        this.getNextLaunch()
        this.getLatestLaunch();
        this.getLaunchpads();
    };

    launchpadsList = [];

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
                this.setState({ companyInfo: data.summary });
            })
            .catch((e) => {

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
                this.setState({ noOfSuccessfulLaunches: data });
            })
            .catch((e) => {
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
                this.setState({ noOfUnsuccessfulLaunches: data });
            })
            .catch((e) => {
            });
    };

    getNumberOfPeopleInCrew= () => {
        fetch(
            "http://localhost:8080/total-people-in-crew",
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
                this.setState({ totalNumberOfPeopleInCrew: data });
            })
            .catch((e) => {
            });
    };

    getTotalTimeInSpace= () => {
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
                this.setState({ totalTimeInSpace: data });
            })
            .catch((e) => {
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
                this.setState({ averageMassOfRockets: data });
            })
            .catch((e) => {
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
                    this.launchpadsList.push({value: i.id,key: i.name});
                }
            })
            .catch((e) => {
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
                this.setState({ totalNoOfLaunches: data });
            })
            .catch((e) => {
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
                this.setState({ latestLaunchFlightName: data.name });
            })
            .catch((e) => {
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
                this.setState({ nextLaunchFLightName: data.name });
            })
            .catch((e) => {
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
                      <p> The number of successful launches is {this.state.noOfSuccessfulLaunches} and the number of unsuccessful launches is {this.state.noOfUnsuccessfulLaunches}   </p>
                      <p> Total number of people in the crew is {this.state.totalNumberOfPeopleInCrew} </p>
                      <p> Total time in space of all crew-dragon flights is {this.state.totalTimeInSpace} years </p>
                      <p> Average mass of all rockets is {this.state.averageMassOfRockets} kilograms. </p>
                      <div>
                          <label>
                              Total number of launches from
                              <select onChange={this.getLaunchesFromLaunchpad}>
                                  {this.launchpadsList.map((option) => (
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