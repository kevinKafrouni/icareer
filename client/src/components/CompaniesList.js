import CompanyCard from "./CompanyCard";

function CompaniesList() {
    return (
  <div>
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                              <CompanyCard 
                                logo=""
                                name="google"
                                location="usa"
                                jobs={2000}
                              />
                              <CompanyCard 
                                logo=""
                                name="murex"
                                location="beirut"
                                jobs={59}
                              />
                              <CompanyCard 
                                logo=""
                                name="android"
                                location="india"
                                jobs={290}
                              />
                              
                            </ul>
                          </div>
                        </div>
                      </div>
    )
  }
  
  
  export default CompaniesList;