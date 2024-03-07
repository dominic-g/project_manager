import React from 'react';
import Left from './Left';
import Nav from './Nav';
import Chart from "react-apexcharts";

const Header = ({title, isActive, toggleSidebar}) => {
  const user = 'Dominic N'

  const state = {     
    series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  };

  const donut = {
    options: {
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          /*donut: {
            labels: {
              show: true
            }
          },*/
          expandOnClick: false
        }
      },
    labels: ['Added', 'Finished', 'Warning', 'Past Due', 'Completed']
    },
    series: [44, 55, 41, 17, 15]
  }
  return (
    <div id="mytask-layout" className="theme-indigo">
      <Left value={isActive}/>
      <div className="main px-lg-4 px-md-4">
        <Nav value={toggleSidebar}/>
        <div className="body d-flex py-lg-3 py-md-2">
          <div className="container-xxl">
            <div className="row clearfix g-3">
              <div className="col-xl-8 col-lg-12 col-md-12 flex-column">
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="card">
                      <Chart options={state.options} series={state.series} type="line"/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 className="mb-0 fw-bold ">Employees Availability</h6>
                      </div>
                      <div className="card-body">
                        <div className="row g-2 row-deck">
                          <div className="col-md-6 col-sm-6">
                            <div className="card">
                              <div className="card-body ">
                                <i className="icofont-checked fs-3" />
                                <h6 className="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                                <span className="text-muted">400</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="card">
                              <div className="card-body ">
                                <i className="icofont-stopwatch fs-3" />
                                <h6 className="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                                <span className="text-muted">17</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="card">
                              <div className="card-body ">
                                <i className="icofont-ban fs-3" />
                                <h6 className="mt-3 mb-0 fw-bold small-14">Absent</h6>
                                <span className="text-muted">06</span>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-6">
                            <div className="card">
                              <div className="card-body ">
                                <i className="icofont-beach-bed fs-3" />
                                <h6 className="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                                <span className="text-muted">14</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 className="mb-0 fw-bold ">Total Employees</h6>
                        <h4 className="mb-0 fw-bold">423</h4>
                      </div>
                      <div className="card-body">
                        <Chart options={donut.options} series={donut.series} type="donut"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 className="mb-0 fw-bold ">Top Hiring Sources</h6>
                      </div>
                      <div className="card-body">
                        <div ac-chart="'donut'" id="SimpleCahrtTopHiringSources">
                          <div style={{ minHeight: 315 }}>
                            <div
                              id="apexchartsgh3hwbnr"
                              className="apexcharts-canvas apexchartsgh3hwbnr apexcharts-theme-light"
                              style={{ width: 633, height: 300 }}
                            >
                              <svg
                                id="SvgjsSvg1435"
                                width={633}
                                height={300}
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                className="apexcharts-svg"
                                transform="translate(0, 0)"
                                style={{ background: "transparent" }}
                              >
                                <foreignObject x={0} y={0} width={633} height={300}>
                                  <div
                                    className="apexcharts-legend apexcharts-align-right apx-legend-position-top"
                                    xmlns="http://www.w3.org/1999/xhtml"
                                    style={{
                                      right: 0,
                                      position: "absolute",
                                      left: 0,
                                      top: 4,
                                      maxHeight: 150
                                    }}
                                  >
                                    <div
                                      className="apexcharts-legend-series"
                                      style={{ margin: "2px 5px" }}
                                      rel={1}
                                      seriesname="UixUxxDesigner"
                                    >
                                      <span
                                        className="apexcharts-legend-marker"
                                        style={{
                                          background: "var(--chart-color1) !important",
                                          color: "var(--chart-color1)",
                                          height: 12,
                                          width: 12,
                                          left: 0,
                                          top: 0,
                                          borderWidth: 0,
                                          borderColor: "rgb(255, 255, 255)",
                                          borderRadius: 2
                                        }}
                                        rel={1}
                                      />
                                      <span
                                        className="apexcharts-legend-text"
                                        style={{
                                          color: "rgb(55, 61, 63)",
                                          fontSize: 12,
                                          fontWeight: 400,
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                        rel={1}
                                        i={0}
                                      >
                                        Ui/Ux Designer
                                      </span>
                                    </div>
                                    <div
                                      className="apexcharts-legend-series"
                                      style={{ margin: "2px 5px" }}
                                      rel={2}
                                      seriesname="AppxDevelopment"
                                    >
                                      <span
                                        className="apexcharts-legend-marker"
                                        style={{
                                          background: "var(--chart-color2) !important",
                                          color: "var(--chart-color2)",
                                          height: 12,
                                          width: 12,
                                          left: 0,
                                          top: 0,
                                          borderWidth: 0,
                                          borderColor: "rgb(255, 255, 255)",
                                          borderRadius: 2
                                        }}
                                        rel={2}
                                      />
                                      <span
                                        className="apexcharts-legend-text"
                                        style={{
                                          color: "rgb(55, 61, 63)",
                                          fontSize: 12,
                                          fontWeight: 400,
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                        rel={2}
                                        i={1}
                                      >
                                        App Development
                                      </span>
                                    </div>
                                    <div
                                      className="apexcharts-legend-series"
                                      style={{ margin: "2px 5px" }}
                                      rel={3}
                                      seriesname="QualityxAssurance"
                                    >
                                      <span
                                        className="apexcharts-legend-marker"
                                        style={{
                                          background: "var(--chart-color3) !important",
                                          color: "var(--chart-color3)",
                                          height: 12,
                                          width: 12,
                                          left: 0,
                                          top: 0,
                                          borderWidth: 0,
                                          borderColor: "rgb(255, 255, 255)",
                                          borderRadius: 2
                                        }}
                                        rel={3}
                                      />
                                      <span
                                        className="apexcharts-legend-text"
                                        style={{
                                          color: "rgb(55, 61, 63)",
                                          fontSize: 12,
                                          fontWeight: 400,
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                        rel={3}
                                        i={2}
                                        default-text="Quality%20Assurance"
                                        collapsed="false"
                                      >
                                        Quality Assurance
                                      </span>
                                    </div>
                                    <div
                                      className="apexcharts-legend-series"
                                      style={{ margin: "2px 5px" }}
                                      rel={4}
                                      seriesname="WebxDeveloper"
                                      collapsed="false"
                                    >
                                      <span
                                        className="apexcharts-legend-marker"
                                        style={{
                                          background: "var(--chart-color4) !important",
                                          color: "var(--chart-color4)",
                                          height: 12,
                                          width: 12,
                                          left: 0,
                                          top: 0,
                                          borderWidth: 0,
                                          borderColor: "rgb(255, 255, 255)",
                                          borderRadius: 2
                                        }}
                                        rel={4}
                                        collapsed="false"
                                      />
                                      <span
                                        className="apexcharts-legend-text"
                                        style={{
                                          color: "rgb(55, 61, 63)",
                                          fontSize: 12,
                                          fontWeight: 400,
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                        rel={4}
                                        i={3}
                                        default-text="Web%20Developer"
                                        collapsed="false"
                                      >
                                        Web Developer
                                      </span>
                                    </div>
                                  </div>
                                  <style
                                    type="text/css"
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\t\t\t\toverflow: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t\tpadding: 0 10px;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-bottom,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-top {\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex-wrap: wrap\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-right,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-left {\n\t\t\t\t\t\t\t\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\t\t\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-top.apexcharts-align-left,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-right,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-left {\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-start;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n\t\t\t\t\t\t\t\t\t\t\t\t\tjustify-content: flex-end;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-series {\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\t\t\t\t\t\t\tline-height: normal;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apx-legend-position-top .apexcharts-legend-series {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-text {\n\t\t\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\t\t\tfont-size: 14px;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-text *,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-marker * {\n\t\t\t\t\t\t\t\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-marker {\n\t\t\t\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t\t\t\t\t\t\t\tmargin-right: 3px;\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apexcharts-align-right .apexcharts-legend-series,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend.apexcharts-align-left .apexcharts-legend-series {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend-series.apexcharts-no-click {\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: auto;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend .apexcharts-hidden-zero-series,\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-legend .apexcharts-hidden-null-series {\n\t\t\t\t\t\t\t\t\t\t\t\t\tdisplay: none !important;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t\t\t\t.apexcharts-inactive-legend {\n\t\t\t\t\t\t\t\t\t\t\t\t\topacity: 0.45;\n\t\t\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t\t\t"
                                    }}
                                  />
                                </foreignObject>
                                <g
                                  id="SvgjsG1622"
                                  className="apexcharts-yaxis"
                                  rel={0}
                                  transform="translate(17.383331298828125, 0)"
                                >
                                  <g id="SvgjsG1623" className="apexcharts-yaxis-texts-g">
                                    <text
                                      id="SvgjsText1625"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="55.5"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1626">200</tspan>
                                      <title>200</title>
                                    </text>
                                    <text
                                      id="SvgjsText1628"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="97.4932"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1629">160</tspan>
                                      <title>160</title>
                                    </text>
                                    <text
                                      id="SvgjsText1631"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="139.4864"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1632">120</tspan>
                                      <title>120</title>
                                    </text>
                                    <text
                                      id="SvgjsText1634"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="181.4796"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1635">80</tspan>
                                      <title>80</title>
                                    </text>
                                    <text
                                      id="SvgjsText1637"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="223.4728"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1638">40</tspan>
                                      <title>40</title>
                                    </text>
                                    <text
                                      id="SvgjsText1640"
                                      fontFamily="Helvetica, Arial, sans-serif"
                                      x={20}
                                      y="265.466"
                                      textAnchor="end"
                                      dominantBaseline="auto"
                                      fontSize="11px"
                                      fontWeight={400}
                                      fill="#373d3f"
                                      className="apexcharts-text apexcharts-yaxis-label "
                                      style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                      <tspan id="SvgjsTspan1641">0</tspan>
                                      <title>0</title>
                                    </text>
                                  </g>
                                </g>
                                <g
                                  id="SvgjsG1437"
                                  className="apexcharts-inner apexcharts-graphical"
                                  transform="translate(47.383331298828125, 54)"
                                >
                                  <defs id="SvgjsDefs1436">
                                    <linearGradient
                                      id="SvgjsLinearGradient1440"
                                      x1={0}
                                      y1={0}
                                      x2={0}
                                      y2={1}
                                    >
                                      <stop
                                        id="SvgjsStop1441"
                                        stopOpacity="0.4"
                                        stopColor="rgba(216,227,240,0.4)"
                                        offset={0}
                                      />
                                      <stop
                                        id="SvgjsStop1442"
                                        stopOpacity="0.5"
                                        stopColor="rgba(190,209,230,0.5)"
                                        offset={1}
                                      />
                                      <stop
                                        id="SvgjsStop1443"
                                        stopOpacity="0.5"
                                        stopColor="rgba(190,209,230,0.5)"
                                        offset={1}
                                      />
                                    </linearGradient>
                                    <clipPath id="gridRectMaskgh3hwbnr">
                                      <rect
                                        id="SvgjsRect1445"
                                        width="579.6166687011719"
                                        height="209.966"
                                        x={-2}
                                        y={0}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                    <clipPath id="forecastMaskgh3hwbnr" />
                                    <clipPath id="nonForecastMaskgh3hwbnr" />
                                    <clipPath id="gridRectMarkerMaskgh3hwbnr">
                                      <rect
                                        id="SvgjsRect1446"
                                        width="579.6166687011719"
                                        height="213.966"
                                        x={-2}
                                        y={-2}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fff"
                                      />
                                    </clipPath>
                                  </defs>
                                  <rect
                                    id="SvgjsRect1444"
                                    width="33.57763900756836"
                                    height="209.966"
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    strokeDasharray={3}
                                    fill="url(#SvgjsLinearGradient1440)"
                                    className="apexcharts-xcrosshairs"
                                    y2="209.966"
                                    filter="none"
                                    fillOpacity="0.9"
                                  />
                                  <line
                                    id="SvgjsLine1560"
                                    x1={0}
                                    y1="210.966"
                                    x2={0}
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1561"
                                    x1="47.968055725097656"
                                    y1="210.966"
                                    x2="47.968055725097656"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1562"
                                    x1="95.93611145019531"
                                    y1="210.966"
                                    x2="95.93611145019531"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1563"
                                    x1="143.90416717529297"
                                    y1="210.966"
                                    x2="143.90416717529297"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1564"
                                    x1="191.87222290039062"
                                    y1="210.966"
                                    x2="191.87222290039062"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1565"
                                    x1="239.84027862548828"
                                    y1="210.966"
                                    x2="239.84027862548828"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1566"
                                    x1="287.80833435058594"
                                    y1="210.966"
                                    x2="287.80833435058594"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1567"
                                    x1="335.7763900756836"
                                    y1="210.966"
                                    x2="335.7763900756836"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1568"
                                    x1="383.74444580078125"
                                    y1="210.966"
                                    x2="383.74444580078125"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1569"
                                    x1="431.7125015258789"
                                    y1="210.966"
                                    x2="431.7125015258789"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1570"
                                    x1="479.68055725097656"
                                    y1="210.966"
                                    x2="479.68055725097656"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1571"
                                    x1="527.6486129760742"
                                    y1="210.966"
                                    x2="527.6486129760742"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <line
                                    id="SvgjsLine1572"
                                    x1="575.6166687011719"
                                    y1="210.966"
                                    x2="575.6166687011719"
                                    y2="216.966"
                                    stroke="#e0e0e0"
                                    strokeDasharray={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-xaxis-tick"
                                  />
                                  <g id="SvgjsG1556" className="apexcharts-grid">
                                    <g
                                      id="SvgjsG1557"
                                      className="apexcharts-gridlines-horizontal"
                                    >
                                      <line
                                        id="SvgjsLine1574"
                                        x1={0}
                                        y1="41.9932"
                                        x2="575.6166687011719"
                                        y2="41.9932"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1575"
                                        x1={0}
                                        y1="83.9864"
                                        x2="575.6166687011719"
                                        y2="83.9864"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1576"
                                        x1={0}
                                        y1="125.9796"
                                        x2="575.6166687011719"
                                        y2="125.9796"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                      <line
                                        id="SvgjsLine1577"
                                        x1={0}
                                        y1="167.9728"
                                        x2="575.6166687011719"
                                        y2="167.9728"
                                        stroke="#e0e0e0"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1558"
                                      className="apexcharts-gridlines-vertical"
                                    />
                                    <line
                                      id="SvgjsLine1580"
                                      x1={0}
                                      y1="209.966"
                                      x2="575.6166687011719"
                                      y2="209.966"
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                    <line
                                      id="SvgjsLine1579"
                                      x1={0}
                                      y1={1}
                                      x2={0}
                                      y2="209.966"
                                      stroke="transparent"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                    />
                                  </g>
                                  <g
                                    id="SvgjsG1447"
                                    className="apexcharts-bar-series apexcharts-plot-series"
                                  >
                                    <g
                                      id="SvgjsG1448"
                                      className="apexcharts-series"
                                      seriesname="UixUxxDesigner"
                                      rel={1}
                                      realindex={0}
                                    >
                                      <path
                                        id="SvgjsPath1452"
                                        d="M 7.195208358764649 209.967 L 7.195208358764649 162.72465000000003 L 40.77284736633301 162.72465000000003 L 40.77284736633301 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 7.195208358764649 209.967 L 7.195208358764649 162.72465000000003 L 40.77284736633301 162.72465000000003 L 40.77284736633301 209.967 z"
                                        pathfrom="M 7.195208358764649 209.967 L 7.195208358764649 209.967 L 40.77284736633301 209.967 L 40.77284736633301 209.967 L 40.77284736633301 209.967 L 40.77284736633301 209.967 L 40.77284736633301 209.967 L 7.195208358764649 209.967 z"
                                        cy="162.72365000000002"
                                        cx="55.1632640838623"
                                        j={0}
                                        val={45}
                                        barheight="47.24235"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1454"
                                        d="M 55.1632640838623 209.967 L 55.1632640838623 183.72125000000003 L 88.74090309143065 183.72125000000003 L 88.74090309143065 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 55.1632640838623 209.967 L 55.1632640838623 183.72125000000003 L 88.74090309143065 183.72125000000003 L 88.74090309143065 209.967 z"
                                        pathfrom="M 55.1632640838623 209.967 L 55.1632640838623 209.967 L 88.74090309143065 209.967 L 88.74090309143065 209.967 L 88.74090309143065 209.967 L 88.74090309143065 209.967 L 88.74090309143065 209.967 L 55.1632640838623 209.967 z"
                                        cy="183.72025000000002"
                                        cx="103.13131980895996"
                                        j={1}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1456"
                                        d="M 103.13131980895996 209.967 L 103.13131980895996 163.77448 L 136.7089588165283 163.77448 L 136.7089588165283 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 103.13131980895996 209.967 L 103.13131980895996 163.77448 L 136.7089588165283 163.77448 L 136.7089588165283 209.967 z"
                                        pathfrom="M 103.13131980895996 209.967 L 103.13131980895996 209.967 L 136.7089588165283 209.967 L 136.7089588165283 209.967 L 136.7089588165283 209.967 L 136.7089588165283 209.967 L 136.7089588165283 209.967 L 103.13131980895996 209.967 z"
                                        cy="163.77348"
                                        cx="151.09937553405763"
                                        j={2}
                                        val={44}
                                        barheight="46.19252"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1458"
                                        d="M 151.09937553405763 209.967 L 151.09937553405763 185.82091 L 184.677014541626 185.82091 L 184.677014541626 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 151.09937553405763 209.967 L 151.09937553405763 185.82091 L 184.677014541626 185.82091 L 184.677014541626 209.967 z"
                                        pathfrom="M 151.09937553405763 209.967 L 151.09937553405763 209.967 L 184.677014541626 209.967 L 184.677014541626 209.967 L 184.677014541626 209.967 L 184.677014541626 209.967 L 184.677014541626 209.967 L 151.09937553405763 209.967 z"
                                        cy="185.81991"
                                        cx="199.06743125915528"
                                        j={3}
                                        val={23}
                                        barheight="24.14609"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1460"
                                        d="M 199.06743125915528 209.967 L 199.06743125915528 183.72125000000003 L 232.64507026672365 183.72125000000003 L 232.64507026672365 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 199.06743125915528 209.967 L 199.06743125915528 183.72125000000003 L 232.64507026672365 183.72125000000003 L 232.64507026672365 209.967 z"
                                        pathfrom="M 199.06743125915528 209.967 L 199.06743125915528 209.967 L 232.64507026672365 209.967 L 232.64507026672365 209.967 L 232.64507026672365 209.967 L 232.64507026672365 209.967 L 232.64507026672365 209.967 L 199.06743125915528 209.967 z"
                                        cy="183.72025000000002"
                                        cx="247.03548698425294"
                                        j={4}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1462"
                                        d="M 247.03548698425294 209.967 L 247.03548698425294 166.92397000000003 L 280.6131259918213 166.92397000000003 L 280.6131259918213 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 247.03548698425294 209.967 L 247.03548698425294 166.92397000000003 L 280.6131259918213 166.92397000000003 L 280.6131259918213 209.967 z"
                                        pathfrom="M 247.03548698425294 209.967 L 247.03548698425294 209.967 L 280.6131259918213 209.967 L 280.6131259918213 209.967 L 280.6131259918213 209.967 L 280.6131259918213 209.967 L 280.6131259918213 209.967 L 247.03548698425294 209.967 z"
                                        cy="166.92297000000002"
                                        cx="295.0035427093506"
                                        j={5}
                                        val={41}
                                        barheight="43.04303"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1464"
                                        d="M 295.0035427093506 209.967 L 295.0035427093506 176.37244 L 328.58118171691893 176.37244 L 328.58118171691893 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 295.0035427093506 209.967 L 295.0035427093506 176.37244 L 328.58118171691893 176.37244 L 328.58118171691893 209.967 z"
                                        pathfrom="M 295.0035427093506 209.967 L 295.0035427093506 209.967 L 328.58118171691893 209.967 L 328.58118171691893 209.967 L 328.58118171691893 209.967 L 328.58118171691893 209.967 L 328.58118171691893 209.967 L 295.0035427093506 209.967 z"
                                        cy="176.37144"
                                        cx="342.97159843444825"
                                        j={6}
                                        val={32}
                                        barheight="33.59456"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1466"
                                        d="M 342.97159843444825 209.967 L 342.97159843444825 183.72125000000003 L 376.5492374420166 183.72125000000003 L 376.5492374420166 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 342.97159843444825 209.967 L 342.97159843444825 183.72125000000003 L 376.5492374420166 183.72125000000003 L 376.5492374420166 209.967 z"
                                        pathfrom="M 342.97159843444825 209.967 L 342.97159843444825 209.967 L 376.5492374420166 209.967 L 376.5492374420166 209.967 L 376.5492374420166 209.967 L 376.5492374420166 209.967 L 376.5492374420166 209.967 L 342.97159843444825 209.967 z"
                                        cy="183.72025000000002"
                                        cx="390.9396541595459"
                                        j={7}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1468"
                                        d="M 390.9396541595459 209.967 L 390.9396541595459 186.87074 L 424.51729316711425 186.87074 L 424.51729316711425 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 390.9396541595459 209.967 L 390.9396541595459 186.87074 L 424.51729316711425 186.87074 L 424.51729316711425 209.967 z"
                                        pathfrom="M 390.9396541595459 209.967 L 390.9396541595459 209.967 L 424.51729316711425 209.967 L 424.51729316711425 209.967 L 424.51729316711425 209.967 L 424.51729316711425 209.967 L 424.51729316711425 209.967 L 390.9396541595459 209.967 z"
                                        cy="186.86974"
                                        cx="438.90770988464357"
                                        j={8}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1470"
                                        d="M 438.90770988464357 209.967 L 438.90770988464357 141.72805000000002 L 472.4853488922119 141.72805000000002 L 472.4853488922119 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 438.90770988464357 209.967 L 438.90770988464357 141.72805000000002 L 472.4853488922119 141.72805000000002 L 472.4853488922119 209.967 z"
                                        pathfrom="M 438.90770988464357 209.967 L 438.90770988464357 209.967 L 472.4853488922119 209.967 L 472.4853488922119 209.967 L 472.4853488922119 209.967 L 472.4853488922119 209.967 L 472.4853488922119 209.967 L 438.90770988464357 209.967 z"
                                        cy="141.72705000000002"
                                        cx="486.8757656097412"
                                        j={9}
                                        val={65}
                                        barheight="68.23895"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1472"
                                        d="M 486.8757656097412 209.967 L 486.8757656097412 186.87074 L 520.4534046173096 186.87074 L 520.4534046173096 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 486.8757656097412 209.967 L 486.8757656097412 186.87074 L 520.4534046173096 186.87074 L 520.4534046173096 209.967 z"
                                        pathfrom="M 486.8757656097412 209.967 L 486.8757656097412 209.967 L 520.4534046173096 209.967 L 520.4534046173096 209.967 L 520.4534046173096 209.967 L 520.4534046173096 209.967 L 520.4534046173096 209.967 L 486.8757656097412 209.967 z"
                                        cy="186.86974"
                                        cx="534.8438213348388"
                                        j={10}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1474"
                                        d="M 534.8438213348388 209.967 L 534.8438213348388 179.52193000000003 L 568.4214603424072 179.52193000000003 L 568.4214603424072 209.967 z"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={0}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 534.8438213348388 209.967 L 534.8438213348388 179.52193000000003 L 568.4214603424072 179.52193000000003 L 568.4214603424072 209.967 z"
                                        pathfrom="M 534.8438213348388 209.967 L 534.8438213348388 209.967 L 568.4214603424072 209.967 L 568.4214603424072 209.967 L 568.4214603424072 209.967 L 568.4214603424072 209.967 L 568.4214603424072 209.967 L 534.8438213348388 209.967 z"
                                        cy="179.52093000000002"
                                        cx="582.8118770599365"
                                        j={11}
                                        val={29}
                                        barheight="30.44507"
                                        barwidth="33.57763900756836"
                                      />
                                      <g
                                        id="SvgjsG1450"
                                        className="apexcharts-bar-goals-markers"
                                        style={{ pointerEvents: "none" }}
                                      >
                                        <g
                                          id="SvgjsG1451"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1453"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1455"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1457"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1459"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1461"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1463"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1465"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1467"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1469"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1471"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1473"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1475"
                                      className="apexcharts-series"
                                      seriesname="AppxDevelopment"
                                      rel={2}
                                      realindex={1}
                                    >
                                      <path
                                        id="SvgjsPath1479"
                                        d="M 7.195208358764649 162.72565000000003 L 7.195208358764649 115.48330000000003 L 40.77284736633301 115.48330000000003 L 40.77284736633301 162.72565000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 7.195208358764649 162.72565000000003 L 7.195208358764649 115.48330000000003 L 40.77284736633301 115.48330000000003 L 40.77284736633301 162.72565000000003 z"
                                        pathfrom="M 7.195208358764649 162.72565000000003 L 7.195208358764649 162.72565000000003 L 40.77284736633301 162.72565000000003 L 40.77284736633301 162.72565000000003 L 40.77284736633301 162.72565000000003 L 40.77284736633301 162.72565000000003 L 40.77284736633301 162.72565000000003 L 7.195208358764649 162.72565000000003 z"
                                        cy="115.48230000000002"
                                        cx="55.1632640838623"
                                        j={0}
                                        val={45}
                                        barheight="47.24235"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1481"
                                        d="M 55.1632640838623 183.72225000000003 L 55.1632640838623 171.12429000000003 L 88.74090309143065 171.12429000000003 L 88.74090309143065 183.72225000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 55.1632640838623 183.72225000000003 L 55.1632640838623 171.12429000000003 L 88.74090309143065 171.12429000000003 L 88.74090309143065 183.72225000000003 z"
                                        pathfrom="M 55.1632640838623 183.72225000000003 L 55.1632640838623 183.72225000000003 L 88.74090309143065 183.72225000000003 L 88.74090309143065 183.72225000000003 L 88.74090309143065 183.72225000000003 L 88.74090309143065 183.72225000000003 L 88.74090309143065 183.72225000000003 L 55.1632640838623 183.72225000000003 z"
                                        cy="171.12329000000003"
                                        cx="103.13131980895996"
                                        j={1}
                                        val={12}
                                        barheight="12.59796"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1483"
                                        d="M 103.13131980895996 163.77548000000002 L 103.13131980895996 137.52973 L 136.7089588165283 137.52973 L 136.7089588165283 163.77548000000002 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 103.13131980895996 163.77548000000002 L 103.13131980895996 137.52973 L 136.7089588165283 137.52973 L 136.7089588165283 163.77548000000002 z"
                                        pathfrom="M 103.13131980895996 163.77548000000002 L 103.13131980895996 163.77548000000002 L 136.7089588165283 163.77548000000002 L 136.7089588165283 163.77548000000002 L 136.7089588165283 163.77548000000002 L 136.7089588165283 163.77548000000002 L 136.7089588165283 163.77548000000002 L 103.13131980895996 163.77548000000002 z"
                                        cy="137.52873"
                                        cx="151.09937553405763"
                                        j={2}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1485"
                                        d="M 151.09937553405763 185.82191 L 151.09937553405763 162.72565 L 184.677014541626 162.72565 L 184.677014541626 185.82191 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 151.09937553405763 185.82191 L 151.09937553405763 162.72565 L 184.677014541626 162.72565 L 184.677014541626 185.82191 z"
                                        pathfrom="M 151.09937553405763 185.82191 L 151.09937553405763 185.82191 L 184.677014541626 185.82191 L 184.677014541626 185.82191 L 184.677014541626 185.82191 L 184.677014541626 185.82191 L 184.677014541626 185.82191 L 151.09937553405763 185.82191 z"
                                        cy="162.72465"
                                        cx="199.06743125915528"
                                        j={3}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1487"
                                        d="M 199.06743125915528 183.72225000000003 L 199.06743125915528 163.77548000000004 L 232.64507026672365 163.77548000000004 L 232.64507026672365 183.72225000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 199.06743125915528 183.72225000000003 L 199.06743125915528 163.77548000000004 L 232.64507026672365 163.77548000000004 L 232.64507026672365 183.72225000000003 z"
                                        pathfrom="M 199.06743125915528 183.72225000000003 L 199.06743125915528 183.72225000000003 L 232.64507026672365 183.72225000000003 L 232.64507026672365 183.72225000000003 L 232.64507026672365 183.72225000000003 L 232.64507026672365 183.72225000000003 L 232.64507026672365 183.72225000000003 L 199.06743125915528 183.72225000000003 z"
                                        cy="163.77448000000004"
                                        cx="247.03548698425294"
                                        j={4}
                                        val={19}
                                        barheight="19.94677"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1489"
                                        d="M 247.03548698425294 166.92497000000003 L 247.03548698425294 143.82871000000003 L 280.6131259918213 143.82871000000003 L 280.6131259918213 166.92497000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 247.03548698425294 166.92497000000003 L 247.03548698425294 143.82871000000003 L 280.6131259918213 143.82871000000003 L 280.6131259918213 166.92497000000003 z"
                                        pathfrom="M 247.03548698425294 166.92497000000003 L 247.03548698425294 166.92497000000003 L 280.6131259918213 166.92497000000003 L 280.6131259918213 166.92497000000003 L 280.6131259918213 166.92497000000003 L 280.6131259918213 166.92497000000003 L 280.6131259918213 166.92497000000003 L 247.03548698425294 166.92497000000003 z"
                                        cy="143.82771000000002"
                                        cx="295.0035427093506"
                                        j={5}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1491"
                                        d="M 295.0035427093506 176.37344000000002 L 295.0035427093506 145.92837 L 328.58118171691893 145.92837 L 328.58118171691893 176.37344000000002 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 295.0035427093506 176.37344000000002 L 295.0035427093506 145.92837 L 328.58118171691893 145.92837 L 328.58118171691893 176.37344000000002 z"
                                        pathfrom="M 295.0035427093506 176.37344000000002 L 295.0035427093506 176.37344000000002 L 328.58118171691893 176.37344000000002 L 328.58118171691893 176.37344000000002 L 328.58118171691893 176.37344000000002 L 328.58118171691893 176.37344000000002 L 328.58118171691893 176.37344000000002 L 295.0035427093506 176.37344000000002 z"
                                        cy="145.92737"
                                        cx="342.97159843444825"
                                        j={6}
                                        val={29}
                                        barheight="30.44507"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1493"
                                        d="M 342.97159843444825 183.72225000000003 L 342.97159843444825 159.57616000000004 L 376.5492374420166 159.57616000000004 L 376.5492374420166 183.72225000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 342.97159843444825 183.72225000000003 L 342.97159843444825 159.57616000000004 L 376.5492374420166 159.57616000000004 L 376.5492374420166 183.72225000000003 z"
                                        pathfrom="M 342.97159843444825 183.72225000000003 L 342.97159843444825 183.72225000000003 L 376.5492374420166 183.72225000000003 L 376.5492374420166 183.72225000000003 L 376.5492374420166 183.72225000000003 L 376.5492374420166 183.72225000000003 L 376.5492374420166 183.72225000000003 L 342.97159843444825 183.72225000000003 z"
                                        cy="159.57516000000004"
                                        cx="390.9396541595459"
                                        j={7}
                                        val={23}
                                        barheight="24.14609"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1495"
                                        d="M 390.9396541595459 186.87174000000002 L 390.9396541595459 162.72565 L 424.51729316711425 162.72565 L 424.51729316711425 186.87174000000002 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 390.9396541595459 186.87174000000002 L 390.9396541595459 162.72565 L 424.51729316711425 162.72565 L 424.51729316711425 186.87174000000002 z"
                                        pathfrom="M 390.9396541595459 186.87174000000002 L 390.9396541595459 186.87174000000002 L 424.51729316711425 186.87174000000002 L 424.51729316711425 186.87174000000002 L 424.51729316711425 186.87174000000002 L 424.51729316711425 186.87174000000002 L 424.51729316711425 186.87174000000002 L 390.9396541595459 186.87174000000002 z"
                                        cy="162.72465"
                                        cx="438.90770988464357"
                                        j={8}
                                        val={23}
                                        barheight="24.14609"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1497"
                                        d="M 438.90770988464357 141.72905000000003 L 438.90770988464357 115.48330000000003 L 472.4853488922119 115.48330000000003 L 472.4853488922119 141.72905000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 438.90770988464357 141.72905000000003 L 438.90770988464357 115.48330000000003 L 472.4853488922119 115.48330000000003 L 472.4853488922119 141.72905000000003 z"
                                        pathfrom="M 438.90770988464357 141.72905000000003 L 438.90770988464357 141.72905000000003 L 472.4853488922119 141.72905000000003 L 472.4853488922119 141.72905000000003 L 472.4853488922119 141.72905000000003 L 472.4853488922119 141.72905000000003 L 472.4853488922119 141.72905000000003 L 438.90770988464357 141.72905000000003 z"
                                        cy="115.48230000000002"
                                        cx="486.8757656097412"
                                        j={9}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1499"
                                        d="M 486.8757656097412 186.87174000000002 L 486.8757656097412 143.82871000000003 L 520.4534046173096 143.82871000000003 L 520.4534046173096 186.87174000000002 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 486.8757656097412 186.87174000000002 L 486.8757656097412 143.82871000000003 L 520.4534046173096 143.82871000000003 L 520.4534046173096 186.87174000000002 z"
                                        pathfrom="M 486.8757656097412 186.87174000000002 L 486.8757656097412 186.87174000000002 L 520.4534046173096 186.87174000000002 L 520.4534046173096 186.87174000000002 L 520.4534046173096 186.87174000000002 L 520.4534046173096 186.87174000000002 L 520.4534046173096 186.87174000000002 L 486.8757656097412 186.87174000000002 z"
                                        cy="143.82771000000002"
                                        cx="534.8438213348388"
                                        j={10}
                                        val={41}
                                        barheight="43.04303"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1501"
                                        d="M 534.8438213348388 179.52293000000003 L 534.8438213348388 145.92837000000003 L 568.4214603424072 145.92837000000003 L 568.4214603424072 179.52293000000003 z"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={1}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 534.8438213348388 179.52293000000003 L 534.8438213348388 145.92837000000003 L 568.4214603424072 145.92837000000003 L 568.4214603424072 179.52293000000003 z"
                                        pathfrom="M 534.8438213348388 179.52293000000003 L 534.8438213348388 179.52293000000003 L 568.4214603424072 179.52293000000003 L 568.4214603424072 179.52293000000003 L 568.4214603424072 179.52293000000003 L 568.4214603424072 179.52293000000003 L 568.4214603424072 179.52293000000003 L 534.8438213348388 179.52293000000003 z"
                                        cy="145.92737000000002"
                                        cx="582.8118770599365"
                                        j={11}
                                        val={32}
                                        barheight="33.59456"
                                        barwidth="33.57763900756836"
                                      />
                                      <g
                                        id="SvgjsG1477"
                                        className="apexcharts-bar-goals-markers"
                                        style={{ pointerEvents: "none" }}
                                      >
                                        <g
                                          id="SvgjsG1478"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1480"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1482"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1484"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1486"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1488"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1490"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1492"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1494"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1496"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1498"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1500"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1502"
                                      className="apexcharts-series"
                                      seriesname="QualityxAssurance"
                                      rel={3}
                                      realindex={2}
                                    >
                                      <path
                                        id="SvgjsPath1506"
                                        d="M 7.195208358764649 115.48430000000003 L 7.195208358764649 68.24195000000003 L 40.77284736633301 68.24195000000003 L 40.77284736633301 115.48430000000003 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 7.195208358764649 115.48430000000003 L 7.195208358764649 68.24195000000003 L 40.77284736633301 68.24195000000003 L 40.77284736633301 115.48430000000003 z"
                                        pathfrom="M 7.195208358764649 115.48430000000003 L 7.195208358764649 115.48430000000003 L 40.77284736633301 115.48430000000003 L 40.77284736633301 115.48430000000003 L 40.77284736633301 115.48430000000003 L 40.77284736633301 115.48430000000003 L 40.77284736633301 115.48430000000003 L 7.195208358764649 115.48430000000003 z"
                                        cy="68.24095000000003"
                                        cx="55.1632640838623"
                                        j={0}
                                        val={45}
                                        barheight="47.24235"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1508"
                                        d="M 55.1632640838623 171.12529000000004 L 55.1632640838623 144.87954000000005 L 88.74090309143065 144.87954000000005 L 88.74090309143065 171.12529000000004 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 55.1632640838623 171.12529000000004 L 55.1632640838623 144.87954000000005 L 88.74090309143065 144.87954000000005 L 88.74090309143065 171.12529000000004 z"
                                        pathfrom="M 55.1632640838623 171.12529000000004 L 55.1632640838623 171.12529000000004 L 88.74090309143065 171.12529000000004 L 88.74090309143065 171.12529000000004 L 88.74090309143065 171.12529000000004 L 88.74090309143065 171.12529000000004 L 88.74090309143065 171.12529000000004 L 55.1632640838623 171.12529000000004 z"
                                        cy="144.87854000000004"
                                        cx="103.13131980895996"
                                        j={1}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1510"
                                        d="M 103.13131980895996 137.53073 L 103.13131980895996 103.93617 L 136.7089588165283 103.93617 L 136.7089588165283 137.53073 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 103.13131980895996 137.53073 L 103.13131980895996 103.93617 L 136.7089588165283 103.93617 L 136.7089588165283 137.53073 z"
                                        pathfrom="M 103.13131980895996 137.53073 L 103.13131980895996 137.53073 L 136.7089588165283 137.53073 L 136.7089588165283 137.53073 L 136.7089588165283 137.53073 L 136.7089588165283 137.53073 L 136.7089588165283 137.53073 L 103.13131980895996 137.53073 z"
                                        cy="103.93517"
                                        cx="151.09937553405763"
                                        j={2}
                                        val={32}
                                        barheight="33.59456"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1512"
                                        d="M 151.09937553405763 162.72665 L 151.09937553405763 136.4809 L 184.677014541626 136.4809 L 184.677014541626 162.72665 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 151.09937553405763 162.72665 L 151.09937553405763 136.4809 L 184.677014541626 136.4809 L 184.677014541626 162.72665 z"
                                        pathfrom="M 151.09937553405763 162.72665 L 151.09937553405763 162.72665 L 184.677014541626 162.72665 L 184.677014541626 162.72665 L 184.677014541626 162.72665 L 184.677014541626 162.72665 L 184.677014541626 162.72665 L 151.09937553405763 162.72665 z"
                                        cy="136.4799"
                                        cx="199.06743125915528"
                                        j={3}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1514"
                                        d="M 199.06743125915528 163.77648000000005 L 199.06743125915528 140.68022000000005 L 232.64507026672365 140.68022000000005 L 232.64507026672365 163.77648000000005 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 199.06743125915528 163.77648000000005 L 199.06743125915528 140.68022000000005 L 232.64507026672365 140.68022000000005 L 232.64507026672365 163.77648000000005 z"
                                        pathfrom="M 199.06743125915528 163.77648000000005 L 199.06743125915528 163.77648000000005 L 232.64507026672365 163.77648000000005 L 232.64507026672365 163.77648000000005 L 232.64507026672365 163.77648000000005 L 232.64507026672365 163.77648000000005 L 232.64507026672365 163.77648000000005 L 199.06743125915528 163.77648000000005 z"
                                        cy="140.67922000000004"
                                        cx="247.03548698425294"
                                        j={4}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1516"
                                        d="M 247.03548698425294 143.82971000000003 L 247.03548698425294 75.59076000000003 L 280.6131259918213 75.59076000000003 L 280.6131259918213 143.82971000000003 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 247.03548698425294 143.82971000000003 L 247.03548698425294 75.59076000000003 L 280.6131259918213 75.59076000000003 L 280.6131259918213 143.82971000000003 z"
                                        pathfrom="M 247.03548698425294 143.82971000000003 L 247.03548698425294 143.82971000000003 L 280.6131259918213 143.82971000000003 L 280.6131259918213 143.82971000000003 L 280.6131259918213 143.82971000000003 L 280.6131259918213 143.82971000000003 L 280.6131259918213 143.82971000000003 L 247.03548698425294 143.82971000000003 z"
                                        cy="75.58976000000003"
                                        cx="295.0035427093506"
                                        j={5}
                                        val={65}
                                        barheight="68.23895"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1518"
                                        d="M 295.0035427093506 145.92937 L 295.0035427093506 99.73685 L 328.58118171691893 99.73685 L 328.58118171691893 145.92937 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 295.0035427093506 145.92937 L 295.0035427093506 99.73685 L 328.58118171691893 99.73685 L 328.58118171691893 145.92937 z"
                                        pathfrom="M 295.0035427093506 145.92937 L 295.0035427093506 145.92937 L 328.58118171691893 145.92937 L 328.58118171691893 145.92937 L 328.58118171691893 145.92937 L 328.58118171691893 145.92937 L 328.58118171691893 145.92937 L 295.0035427093506 145.92937 z"
                                        cy="99.73585"
                                        cx="342.97159843444825"
                                        j={6}
                                        val={44}
                                        barheight="46.19252"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1520"
                                        d="M 342.97159843444825 159.57716000000005 L 342.97159843444825 135.43107000000006 L 376.5492374420166 135.43107000000006 L 376.5492374420166 159.57716000000005 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 342.97159843444825 159.57716000000005 L 342.97159843444825 135.43107000000006 L 376.5492374420166 135.43107000000006 L 376.5492374420166 159.57716000000005 z"
                                        pathfrom="M 342.97159843444825 159.57716000000005 L 342.97159843444825 159.57716000000005 L 376.5492374420166 159.57716000000005 L 376.5492374420166 159.57716000000005 L 376.5492374420166 159.57716000000005 L 376.5492374420166 159.57716000000005 L 376.5492374420166 159.57716000000005 L 342.97159843444825 159.57716000000005 z"
                                        cy="135.43007000000006"
                                        cx="390.9396541595459"
                                        j={7}
                                        val={23}
                                        barheight="24.14609"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1522"
                                        d="M 390.9396541595459 162.72665 L 390.9396541595459 136.4809 L 424.51729316711425 136.4809 L 424.51729316711425 162.72665 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 390.9396541595459 162.72665 L 390.9396541595459 136.4809 L 424.51729316711425 136.4809 L 424.51729316711425 162.72665 z"
                                        pathfrom="M 390.9396541595459 162.72665 L 390.9396541595459 162.72665 L 424.51729316711425 162.72665 L 424.51729316711425 162.72665 L 424.51729316711425 162.72665 L 424.51729316711425 162.72665 L 424.51729316711425 162.72665 L 390.9396541595459 162.72665 z"
                                        cy="136.4799"
                                        cx="438.90770988464357"
                                        j={8}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1524"
                                        d="M 438.90770988464357 115.48430000000003 L 438.90770988464357 72.44127000000003 L 472.4853488922119 72.44127000000003 L 472.4853488922119 115.48430000000003 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 438.90770988464357 115.48430000000003 L 438.90770988464357 72.44127000000003 L 472.4853488922119 72.44127000000003 L 472.4853488922119 115.48430000000003 z"
                                        pathfrom="M 438.90770988464357 115.48430000000003 L 438.90770988464357 115.48430000000003 L 472.4853488922119 115.48430000000003 L 472.4853488922119 115.48430000000003 L 472.4853488922119 115.48430000000003 L 472.4853488922119 115.48430000000003 L 472.4853488922119 115.48430000000003 L 438.90770988464357 115.48430000000003 z"
                                        cy="72.44027000000003"
                                        cx="486.8757656097412"
                                        j={9}
                                        val={41}
                                        barheight="43.04303"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1526"
                                        d="M 486.8757656097412 143.82971000000003 L 486.8757656097412 120.73345000000003 L 520.4534046173096 120.73345000000003 L 520.4534046173096 143.82971000000003 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 486.8757656097412 143.82971000000003 L 486.8757656097412 120.73345000000003 L 520.4534046173096 120.73345000000003 L 520.4534046173096 143.82971000000003 z"
                                        pathfrom="M 486.8757656097412 143.82971000000003 L 486.8757656097412 143.82971000000003 L 520.4534046173096 143.82971000000003 L 520.4534046173096 143.82971000000003 L 520.4534046173096 143.82971000000003 L 520.4534046173096 143.82971000000003 L 520.4534046173096 143.82971000000003 L 486.8757656097412 143.82971000000003 z"
                                        cy="120.73245000000003"
                                        cx="534.8438213348388"
                                        j={10}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1528"
                                        d="M 534.8438213348388 145.92937000000003 L 534.8438213348388 115.48430000000003 L 568.4214603424072 115.48430000000003 L 568.4214603424072 145.92937000000003 z"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={2}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 534.8438213348388 145.92937000000003 L 534.8438213348388 115.48430000000003 L 568.4214603424072 115.48430000000003 L 568.4214603424072 145.92937000000003 z"
                                        pathfrom="M 534.8438213348388 145.92937000000003 L 534.8438213348388 145.92937000000003 L 568.4214603424072 145.92937000000003 L 568.4214603424072 145.92937000000003 L 568.4214603424072 145.92937000000003 L 568.4214603424072 145.92937000000003 L 568.4214603424072 145.92937000000003 L 534.8438213348388 145.92937000000003 z"
                                        cy="115.48330000000003"
                                        cx="582.8118770599365"
                                        j={11}
                                        val={29}
                                        barheight="30.44507"
                                        barwidth="33.57763900756836"
                                      />
                                      <g
                                        id="SvgjsG1504"
                                        className="apexcharts-bar-goals-markers"
                                        style={{ pointerEvents: "none" }}
                                      >
                                        <g
                                          id="SvgjsG1505"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1507"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1509"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1511"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1513"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1515"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1517"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1519"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1521"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1523"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1525"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1527"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1529"
                                      className="apexcharts-series"
                                      seriesname="WebxDeveloper"
                                      rel={4}
                                      realindex={3}
                                    >
                                      <path
                                        id="SvgjsPath1533"
                                        d="M 7.195208358764649 68.24295000000004 L 7.195208358764649 34.64839000000003 L 40.77284736633301 34.64839000000003 L 40.77284736633301 68.24295000000004 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 7.195208358764649 68.24295000000004 L 7.195208358764649 34.64839000000003 L 40.77284736633301 34.64839000000003 L 40.77284736633301 68.24295000000004 z"
                                        pathfrom="M 7.195208358764649 68.24295000000004 L 7.195208358764649 68.24295000000004 L 40.77284736633301 68.24295000000004 L 40.77284736633301 68.24295000000004 L 40.77284736633301 68.24295000000004 L 40.77284736633301 68.24295000000004 L 40.77284736633301 68.24295000000004 L 7.195208358764649 68.24295000000004 z"
                                        cy="34.64739000000003"
                                        cx="55.1632640838623"
                                        j={0}
                                        val={32}
                                        barheight="33.59456"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1535"
                                        d="M 55.1632640838623 144.88054000000005 L 55.1632640838623 118.63479000000005 L 88.74090309143065 118.63479000000005 L 88.74090309143065 144.88054000000005 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 55.1632640838623 144.88054000000005 L 55.1632640838623 118.63479000000005 L 88.74090309143065 118.63479000000005 L 88.74090309143065 144.88054000000005 z"
                                        pathfrom="M 55.1632640838623 144.88054000000005 L 55.1632640838623 144.88054000000005 L 88.74090309143065 144.88054000000005 L 88.74090309143065 144.88054000000005 L 88.74090309143065 144.88054000000005 L 88.74090309143065 144.88054000000005 L 88.74090309143065 144.88054000000005 L 55.1632640838623 144.88054000000005 z"
                                        cy="118.63379000000005"
                                        cx="103.13131980895996"
                                        j={1}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1537"
                                        d="M 103.13131980895996 103.93717000000001 L 103.13131980895996 80.84091000000001 L 136.7089588165283 80.84091000000001 L 136.7089588165283 103.93717000000001 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 103.13131980895996 103.93717000000001 L 103.13131980895996 80.84091000000001 L 136.7089588165283 80.84091000000001 L 136.7089588165283 103.93717000000001 z"
                                        pathfrom="M 103.13131980895996 103.93717000000001 L 103.13131980895996 103.93717000000001 L 136.7089588165283 103.93717000000001 L 136.7089588165283 103.93717000000001 L 136.7089588165283 103.93717000000001 L 136.7089588165283 103.93717000000001 L 136.7089588165283 103.93717000000001 L 103.13131980895996 103.93717000000001 z"
                                        cy="80.83991"
                                        cx="151.09937553405763"
                                        j={2}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1539"
                                        d="M 151.09937553405763 136.4819 L 151.09937553405763 124.93377 L 184.677014541626 124.93377 L 184.677014541626 136.4819 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 151.09937553405763 136.4819 L 151.09937553405763 124.93377 L 184.677014541626 124.93377 L 184.677014541626 136.4819 z"
                                        pathfrom="M 151.09937553405763 136.4819 L 151.09937553405763 136.4819 L 184.677014541626 136.4819 L 184.677014541626 136.4819 L 184.677014541626 136.4819 L 184.677014541626 136.4819 L 184.677014541626 136.4819 L 151.09937553405763 136.4819 z"
                                        cy="124.93276999999999"
                                        cx="199.06743125915528"
                                        j={3}
                                        val={11}
                                        barheight="11.54813"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1541"
                                        d="M 199.06743125915528 140.68122000000005 L 199.06743125915528 117.58496000000005 L 232.64507026672365 117.58496000000005 L 232.64507026672365 140.68122000000005 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 199.06743125915528 140.68122000000005 L 199.06743125915528 117.58496000000005 L 232.64507026672365 117.58496000000005 L 232.64507026672365 140.68122000000005 z"
                                        pathfrom="M 199.06743125915528 140.68122000000005 L 199.06743125915528 140.68122000000005 L 232.64507026672365 140.68122000000005 L 232.64507026672365 140.68122000000005 L 232.64507026672365 140.68122000000005 L 232.64507026672365 140.68122000000005 L 232.64507026672365 140.68122000000005 L 199.06743125915528 140.68122000000005 z"
                                        cy="117.58396000000005"
                                        cx="247.03548698425294"
                                        j={4}
                                        val={22}
                                        barheight="23.09626"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1543"
                                        d="M 247.03548698425294 75.59176000000004 L 247.03548698425294 45.14669000000003 L 280.6131259918213 45.14669000000003 L 280.6131259918213 75.59176000000004 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 247.03548698425294 75.59176000000004 L 247.03548698425294 45.14669000000003 L 280.6131259918213 45.14669000000003 L 280.6131259918213 75.59176000000004 z"
                                        pathfrom="M 247.03548698425294 75.59176000000004 L 247.03548698425294 75.59176000000004 L 280.6131259918213 75.59176000000004 L 280.6131259918213 75.59176000000004 L 280.6131259918213 75.59176000000004 L 280.6131259918213 75.59176000000004 L 280.6131259918213 75.59176000000004 L 247.03548698425294 75.59176000000004 z"
                                        cy="45.14569000000003"
                                        cx="295.0035427093506"
                                        j={5}
                                        val={29}
                                        barheight="30.44507"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1545"
                                        d="M 295.0035427093506 99.73785000000001 L 295.0035427093506 82.94057000000001 L 328.58118171691893 82.94057000000001 L 328.58118171691893 99.73785000000001 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 295.0035427093506 99.73785000000001 L 295.0035427093506 82.94057000000001 L 328.58118171691893 82.94057000000001 L 328.58118171691893 99.73785000000001 z"
                                        pathfrom="M 295.0035427093506 99.73785000000001 L 295.0035427093506 99.73785000000001 L 328.58118171691893 99.73785000000001 L 328.58118171691893 99.73785000000001 L 328.58118171691893 99.73785000000001 L 328.58118171691893 99.73785000000001 L 328.58118171691893 99.73785000000001 L 295.0035427093506 99.73785000000001 z"
                                        cy="82.93957"
                                        cx="342.97159843444825"
                                        j={6}
                                        val={16}
                                        barheight="16.79728"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1547"
                                        d="M 342.97159843444825 135.43207000000007 L 342.97159843444825 109.18632000000007 L 376.5492374420166 109.18632000000007 L 376.5492374420166 135.43207000000007 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 342.97159843444825 135.43207000000007 L 342.97159843444825 109.18632000000007 L 376.5492374420166 109.18632000000007 L 376.5492374420166 135.43207000000007 z"
                                        pathfrom="M 342.97159843444825 135.43207000000007 L 342.97159843444825 135.43207000000007 L 376.5492374420166 135.43207000000007 L 376.5492374420166 135.43207000000007 L 376.5492374420166 135.43207000000007 L 376.5492374420166 135.43207000000007 L 376.5492374420166 135.43207000000007 L 342.97159843444825 135.43207000000007 z"
                                        cy="109.18532000000006"
                                        cx="390.9396541595459"
                                        j={7}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1549"
                                        d="M 390.9396541595459 136.4819 L 390.9396541595459 127.03343 L 424.51729316711425 127.03343 L 424.51729316711425 136.4819 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 390.9396541595459 136.4819 L 390.9396541595459 127.03343 L 424.51729316711425 127.03343 L 424.51729316711425 136.4819 z"
                                        pathfrom="M 390.9396541595459 136.4819 L 390.9396541595459 136.4819 L 424.51729316711425 136.4819 L 424.51729316711425 136.4819 L 424.51729316711425 136.4819 L 424.51729316711425 136.4819 L 424.51729316711425 136.4819 L 390.9396541595459 136.4819 z"
                                        cy="127.03242999999999"
                                        cx="438.90770988464357"
                                        j={8}
                                        val={9}
                                        barheight="9.44847"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1551"
                                        d="M 438.90770988464357 72.44227000000004 L 438.90770988464357 48.29618000000003 L 472.4853488922119 48.29618000000003 L 472.4853488922119 72.44227000000004 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 438.90770988464357 72.44227000000004 L 438.90770988464357 48.29618000000003 L 472.4853488922119 48.29618000000003 L 472.4853488922119 72.44227000000004 z"
                                        pathfrom="M 438.90770988464357 72.44227000000004 L 438.90770988464357 72.44227000000004 L 472.4853488922119 72.44227000000004 L 472.4853488922119 72.44227000000004 L 472.4853488922119 72.44227000000004 L 472.4853488922119 72.44227000000004 L 472.4853488922119 72.44227000000004 L 438.90770988464357 72.44227000000004 z"
                                        cy="48.29518000000003"
                                        cx="486.8757656097412"
                                        j={9}
                                        val={23}
                                        barheight="24.14609"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1553"
                                        d="M 486.8757656097412 120.73445000000004 L 486.8757656097412 94.48870000000004 L 520.4534046173096 94.48870000000004 L 520.4534046173096 120.73445000000004 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 486.8757656097412 120.73445000000004 L 486.8757656097412 94.48870000000004 L 520.4534046173096 94.48870000000004 L 520.4534046173096 120.73445000000004 z"
                                        pathfrom="M 486.8757656097412 120.73445000000004 L 486.8757656097412 120.73445000000004 L 520.4534046173096 120.73445000000004 L 520.4534046173096 120.73445000000004 L 520.4534046173096 120.73445000000004 L 520.4534046173096 120.73445000000004 L 520.4534046173096 120.73445000000004 L 486.8757656097412 120.73445000000004 z"
                                        cy="94.48770000000003"
                                        cx="534.8438213348388"
                                        j={10}
                                        val={25}
                                        barheight="26.24575"
                                        barwidth="33.57763900756836"
                                      />
                                      <path
                                        id="SvgjsPath1555"
                                        d="M 534.8438213348388 115.48530000000004 L 534.8438213348388 101.83751000000004 L 568.4214603424072 101.83751000000004 L 568.4214603424072 115.48530000000004 z"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="round"
                                        strokeWidth={0}
                                        strokeDasharray={0}
                                        className="apexcharts-bar-area"
                                        index={3}
                                        clipPath="url(#gridRectMaskgh3hwbnr)"
                                        pathto="M 534.8438213348388 115.48530000000004 L 534.8438213348388 101.83751000000004 L 568.4214603424072 101.83751000000004 L 568.4214603424072 115.48530000000004 z"
                                        pathfrom="M 534.8438213348388 115.48530000000004 L 534.8438213348388 115.48530000000004 L 568.4214603424072 115.48530000000004 L 568.4214603424072 115.48530000000004 L 568.4214603424072 115.48530000000004 L 568.4214603424072 115.48530000000004 L 568.4214603424072 115.48530000000004 L 534.8438213348388 115.48530000000004 z"
                                        cy="101.83651000000003"
                                        cx="582.8118770599365"
                                        j={11}
                                        val={13}
                                        barheight="13.64779"
                                        barwidth="33.57763900756836"
                                      />
                                      <g
                                        id="SvgjsG1531"
                                        className="apexcharts-bar-goals-markers"
                                        style={{ pointerEvents: "none" }}
                                      >
                                        <g
                                          id="SvgjsG1532"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1534"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1536"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1538"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1540"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1542"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1544"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1546"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1548"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1550"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1552"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                        <g
                                          id="SvgjsG1554"
                                          className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                          clipPath="url(#gridRectMarkerMaskgh3hwbnr)"
                                        />
                                      </g>
                                    </g>
                                    <g
                                      id="SvgjsG1449"
                                      className="apexcharts-datalabels"
                                      realindex={0}
                                    />
                                    <g
                                      id="SvgjsG1476"
                                      className="apexcharts-datalabels"
                                      realindex={1}
                                    />
                                    <g
                                      id="SvgjsG1503"
                                      className="apexcharts-datalabels"
                                      realindex={2}
                                    />
                                    <g
                                      id="SvgjsG1530"
                                      className="apexcharts-datalabels"
                                      realindex={3}
                                    />
                                  </g>
                                  <g id="SvgjsG1559" className="apexcharts-grid-borders">
                                    <line
                                      id="SvgjsLine1573"
                                      x1={0}
                                      y1={0}
                                      x2="575.6166687011719"
                                      y2={0}
                                      stroke="#e0e0e0"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1578"
                                      x1={0}
                                      y1="209.966"
                                      x2="575.6166687011719"
                                      y2="209.966"
                                      stroke="#e0e0e0"
                                      strokeDasharray={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-gridline"
                                    />
                                    <line
                                      id="SvgjsLine1621"
                                      x1={0}
                                      y1="210.966"
                                      x2="575.6166687011719"
                                      y2="210.966"
                                      stroke="#e0e0e0"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                    />
                                  </g>
                                  <line
                                    id="SvgjsLine1581"
                                    x1={0}
                                    y1={0}
                                    x2="575.6166687011719"
                                    y2={0}
                                    stroke="#b6b6b6"
                                    strokeDasharray={0}
                                    strokeWidth={1}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs"
                                  />
                                  <line
                                    id="SvgjsLine1582"
                                    x1={0}
                                    y1={0}
                                    x2="575.6166687011719"
                                    y2={0}
                                    strokeDasharray={0}
                                    strokeWidth={0}
                                    strokeLinecap="butt"
                                    className="apexcharts-ycrosshairs-hidden"
                                  />
                                  <g
                                    id="SvgjsG1583"
                                    className="apexcharts-xaxis"
                                    transform="translate(0, 0)"
                                  >
                                    <g
                                      id="SvgjsG1584"
                                      className="apexcharts-xaxis-texts-g"
                                      transform="translate(0, -4)"
                                    >
                                      <text
                                        id="SvgjsText1586"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="23.984027862548828"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1587">Jan</tspan>
                                        <title>Jan</title>
                                      </text>
                                      <text
                                        id="SvgjsText1589"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="71.95208358764648"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1590">Feb</tspan>
                                        <title>Feb</title>
                                      </text>
                                      <text
                                        id="SvgjsText1592"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="119.92013931274414"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1593">March</tspan>
                                        <title>March</title>
                                      </text>
                                      <text
                                        id="SvgjsText1595"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="167.8881950378418"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1596">Apr</tspan>
                                        <title>Apr</title>
                                      </text>
                                      <text
                                        id="SvgjsText1598"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="215.85625076293945"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1599">May</tspan>
                                        <title>May</title>
                                      </text>
                                      <text
                                        id="SvgjsText1601"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="263.8243064880371"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1602">Jun</tspan>
                                        <title>Jun</title>
                                      </text>
                                      <text
                                        id="SvgjsText1604"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="311.79236221313477"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1605">July</tspan>
                                        <title>July</title>
                                      </text>
                                      <text
                                        id="SvgjsText1607"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="359.7604179382324"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1608">Aug</tspan>
                                        <title>Aug</title>
                                      </text>
                                      <text
                                        id="SvgjsText1610"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="407.7284736633301"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1611">Sept</tspan>
                                        <title>Sept</title>
                                      </text>
                                      <text
                                        id="SvgjsText1613"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="455.69652938842773"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1614">Oct</tspan>
                                        <title>Oct</title>
                                      </text>
                                      <text
                                        id="SvgjsText1616"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="503.6645851135254"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1617">Nov</tspan>
                                        <title>Nov</title>
                                      </text>
                                      <text
                                        id="SvgjsText1619"
                                        fontFamily="Helvetica, Arial, sans-serif"
                                        x="551.632640838623"
                                        y="238.966"
                                        textAnchor="middle"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#373d3f"
                                        className="apexcharts-text apexcharts-xaxis-label "
                                        style={{
                                          fontFamily: "Helvetica, Arial, sans-serif"
                                        }}
                                      >
                                        <tspan id="SvgjsTspan1620">Dec</tspan>
                                        <title>Dec</title>
                                      </text>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1642"
                                    className="apexcharts-yaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1643"
                                    className="apexcharts-xaxis-annotations"
                                  />
                                  <g
                                    id="SvgjsG1644"
                                    className="apexcharts-point-annotations"
                                  />
                                </g>
                              </svg>
                              <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div
                                  className="apexcharts-tooltip-title"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12
                                  }}
                                />
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 1 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{ backgroundColor: "var(--chart-color1)" }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily: "Helvetica, Arial, sans-serif",
                                      fontSize: 12
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 2 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{ backgroundColor: "var(--chart-color2)" }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily: "Helvetica, Arial, sans-serif",
                                      fontSize: 12
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 3 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{ backgroundColor: "var(--chart-color3)" }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily: "Helvetica, Arial, sans-serif",
                                      fontSize: 12
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 4 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{ backgroundColor: "var(--chart-color4)" }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily: "Helvetica, Arial, sans-serif",
                                      fontSize: 12
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-12">
                <div className="row g-3">
                  <div className="col-md-6 col-lg-6 col-xl-12">
                    <div className="card bg-primary">
                      <div className="card-body row">
                        <div className="col">
                          <span className="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center">
                            <i className="icofont-file-text fs-5" />
                          </span>
                          <h1 className="mt-3 mb-0 fw-bold text-white">1546</h1>
                          <span className="text-white">Applications</span>
                        </div>
                        <div className="col">
                          <img
                            className="img-fluid"
                            src="/template/my-task/react/static/media/interview.1710874b575c5c9a24cde4ad43a4c04b.svg"
                            alt="interview"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-12 flex-column">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center flex-fill">
                          <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                            <i className="icofont-users-alt-2 fs-5" />
                          </span>
                          <div className="d-flex flex-column ps-3  flex-fill">
                            <h6 className="fw-bold mb-0 fs-4">246</h6>
                            <span className="text-muted">Interviews</span>
                          </div>
                          <i className="icofont-chart-bar-graph fs-3 text-muted" />
                        </div>
                      </div>
                    </div>
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex align-items-center flex-fill">
                          <span className="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center">
                            <i className="icofont-holding-hands fs-5" />
                          </span>
                          <div className="d-flex flex-column ps-3  flex-fill">
                            <h6 className="fw-bold mb-0 fs-4">101</h6>
                            <span className="text-muted">Hired</span>
                          </div>
                          <i className="icofont-chart-line fs-3 text-muted" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-12 col-xl-12">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                        <h6 className="mb-0 fw-bold ">Upcomming Interviews</h6>
                      </div>
                      <div className="card-body">
                        <div className="flex-grow-1">
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar2.3ef6eaa7d15ccc6dd265.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Natalie Gibson</h6>
                                <span className="text-muted">Ui/UX Designer</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 1.30 - 1:30
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar9.750b25a3830b1be60112.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Peter Piperg</h6>
                                <span className="text-muted">Web Design</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 9.00 - 1:30
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar12.eab92b5518d49a808817.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Robert Young</h6>
                                <span className="text-muted">PHP Developer</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 1.30 - 2:30
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar8.3ef6eaa7d15ccc6dd265.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Victoria Vbell</h6>
                                <span className="text-muted">IOS Developer</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 2.00 - 3:30
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar7.207e668ffe106473b1e6.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Mary Butler</h6>
                                <span className="text-muted">Writer</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 4.00 - 4:30
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center border-bottom flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar3.750b25a3830b1be60112.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Youn Bel</h6>
                                <span className="text-muted">Unity 3d</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 7.00 - 8.00
                            </div>
                          </div>
                          <div className="py-2 d-flex align-items-center  flex-wrap">
                            <div className="d-flex align-items-center flex-fill">
                              <img
                                className="avatar lg rounded-circle img-thumbnail"
                                src="/template/my-task/react/static/media/avatar2.3ef6eaa7d15ccc6dd265.jpg"
                                alt="profile"
                              />
                              <div className="d-flex flex-column ps-3">
                                <h6 className="fw-bold mb-0 small-14">Gibson Butler</h6>
                                <span className="text-muted">Networking</span>
                              </div>
                            </div>
                            <div className="time-block text-truncate">
                              <i className="icofont-clock-time" /> 8.00 - 9.00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3 row-deck">
              <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                        <i className="bi bi-journal-check fs-4" />
                      </div>
                      <div className="flex-fill ms-4">
                        <div className="">Total Task</div>
                        <h5 className="mb-0 ">122</h5>
                      </div>
                      <a
                        href="#!"
                        title="view-members"
                        className="btn btn-link text-decoration-none  rounded-1"
                      >
                        <i className="icofont-hand-drawn-right fs-2 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                        <i className="bi bi-list-check fs-4" />
                      </div>
                      <div className="flex-fill ms-4">
                        <div className="">Completed Task</div>
                        <h5 className="mb-0 ">376</h5>
                      </div>
                      <a
                        href="#!"
                        title="view-members"
                        className="btn btn-link text-decoration-none  rounded-1"
                      >
                        <i className="icofont-hand-drawn-right fs-2 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <div className="card ">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="avatar lg  rounded-1 no-thumbnail bg-lightyellow color-defult">
                        <i className="bi bi-clipboard-data fs-4" />
                      </div>
                      <div className="flex-fill ms-4">
                        <div className="">Progress Task</div>
                        <h5 className="mb-0 ">74</h5>
                      </div>
                      <a
                        href="#!"
                        title="view-members"
                        className="btn btn-link text-decoration-none  rounded-1"
                      >
                        <i className="icofont-hand-drawn-right fs-2 " />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3 row-deck">
              <div className="col-md-12 col-lg-4">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <h6 className="mb-0 fw-bold ">Income Analytics</h6>
                  </div>
                  <div className="card-body">
                    <div className="d-flex justify-content-end text-center">
                      <div className="p-2">
                        <h6 className="mb-0 fw-bold">$5,318</h6>
                        <small className="text-muted">Income</small>
                      </div>
                      <div className="p-2 ms-4">
                        <h6 className="mb-0 fw-bold">$2,840</h6>
                        <small className="text-muted">Expense</small>
                      </div>
                    </div>
                    <div ac-chart="'donut'" id="SimpleCahrtIncomeAnalytics">
                      <div style={{ minHeight: "305.75px" }}>
                        <div
                          id="apexchartsfvj0lw1r"
                          className="apexcharts-canvas apexchartsfvj0lw1r apexcharts-theme-light"
                          style={{ width: 292, height: "305.75px" }}
                        >
                          <svg
                            id="SvgjsSvg2427"
                            width={292}
                            height="305.75"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            
                            className="apexcharts-svg"
                            
                            transform="translate(0, 0)"
                            style={{ background: "transparent" }}
                          >
                            <foreignObject x={0} y={0} width={292} height="305.75">
                              <div
                                className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                                xmlns="http://www.w3.org/1999/xhtml"
                                style={{
                                  inset: "auto 0px 1px",
                                  position: "absolute",
                                  maxHeight: 168
                                }}
                              >
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={1}
                                  seriesname="France"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(0, 143, 251) !important",
                                      color: "rgb(0, 143, 251)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={1}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={1}
                                    i={0}
                                    data-default-text="France"
                                    data-collapsed="false"
                                  >
                                    France
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={2}
                                  seriesname="India"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(26, 154, 251) !important",
                                      color: "rgb(26, 154, 251)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={2}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={2}
                                    i={1}
                                    data-default-text="India"
                                    data-collapsed="false"
                                  >
                                    India
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={3}
                                  seriesname="Canada"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(51, 165, 252) !important",
                                      color: "rgb(51, 165, 252)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={3}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={3}
                                    i={2}
                                    data-default-text="Canada"
                                    data-collapsed="false"
                                  >
                                    Canada
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={4}
                                  seriesname="Italy"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(77, 177, 252) !important",
                                      color: "rgb(77, 177, 252)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={4}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={4}
                                    i={3}
                                    data-default-text="Italy"
                                    data-collapsed="false"
                                  >
                                    Italy
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={5}
                                  seriesname="Japan"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(102, 188, 253) !important",
                                      color: "rgb(102, 188, 253)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={5}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={5}
                                    i={4}
                                    data-default-text="Japan"
                                    data-collapsed="false"
                                  >
                                    Japan
                                  </span>
                                </div>
                                <div
                                  className="apexcharts-legend-series"
                                  style={{ margin: "2px 5px" }}
                                  rel={6}
                                  seriesname="Us"
                                  data-collapsed="false"
                                >
                                  <span
                                    className="apexcharts-legend-marker"
                                    style={{
                                      background: "rgb(128, 199, 253) !important",
                                      color: "rgb(128, 199, 253)",
                                      height: 12,
                                      width: 12,
                                      left: 0,
                                      top: 0,
                                      borderWidth: 0,
                                      borderColor: "rgb(255, 255, 255)",
                                      borderRadius: 12
                                    }}
                                    rel={6}
                                    data-collapsed="false"
                                  />
                                  <span
                                    className="apexcharts-legend-text"
                                    style={{
                                      color: "rgb(55, 61, 63)",
                                      fontSize: 12,
                                      fontWeight: 400,
                                      fontFamily: "Helvetica, Arial, sans-serif"
                                    }}
                                    rel={6}
                                    i={5}
                                    data-default-text="Us"
                                    data-collapsed="false"
                                  >
                                    Us
                                  </span>
                                </div>
                              </div>
                              <style
                                type="text/css"
                                dangerouslySetInnerHTML={{
                                  __html:
                                    "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                                }}
                              />
                            </foreignObject>
                            <g
                              id="SvgjsG2429"
                              className="apexcharts-inner apexcharts-graphical"
                              transform="translate(12, 0)"
                            >
                              <defs id="SvgjsDefs2428">
                                <clipPath id="gridRectMaskfvj0lw1r">
                                  <rect
                                    id="SvgjsRect2430"
                                    width={275}
                                    height={256}
                                    x="-2.5"
                                    y="-0.5"
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                                <clipPath id="forecastMaskfvj0lw1r" />
                                <clipPath id="nonForecastMaskfvj0lw1r" />
                                <clipPath id="gridRectMarkerMaskfvj0lw1r">
                                  <rect
                                    id="SvgjsRect2431"
                                    width={274}
                                    height={259}
                                    x={-2}
                                    y={-2}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fff"
                                  />
                                </clipPath>
                              </defs>
                              <g id="SvgjsG2432" className="apexcharts-pie">
                                <line
                                  id="SvgjsLine2441"
                                  x1={135}
                                  y1="8.109756097560961"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine2442"
                                  x1="238.3949841835324"
                                  y1="67.8048780487805"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine2443"
                                  x1="238.3949841835324"
                                  y1="187.1951219512195"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine2444"
                                  x1={135}
                                  y1="246.89024390243904"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine2445"
                                  x1="31.605015816467613"
                                  y1="187.1951219512195"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <line
                                  id="SvgjsLine2446"
                                  x1="31.605015816467628"
                                  y1="67.80487804878047"
                                  x2={135}
                                  y2="127.5"
                                  stroke="#e8e8e8"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                />
                                <g id="SvgjsG2434">
                                  <circle
                                    id="SvgjsCircle2436"
                                    r="119.39024390243904"
                                    cx={135}
                                    cy="127.5"
                                    fill="none"
                                    strokeWidth={0}
                                    stroke="#e8e8e8"
                                  />
                                  <circle
                                    id="SvgjsCircle2437"
                                    r="95.51219512195124"
                                    cx={135}
                                    cy="127.5"
                                    fill="none"
                                    strokeWidth={0}
                                    stroke="#e8e8e8"
                                  />
                                  <circle
                                    id="SvgjsCircle2438"
                                    r="71.63414634146343"
                                    cx={135}
                                    cy="127.5"
                                    fill="none"
                                    strokeWidth={0}
                                    stroke="#e8e8e8"
                                  />
                                  <circle
                                    id="SvgjsCircle2439"
                                    r="47.756097560975626"
                                    cx={135}
                                    cy="127.5"
                                    fill="none"
                                    strokeWidth={0}
                                    stroke="#e8e8e8"
                                  />
                                  <circle
                                    id="SvgjsCircle2440"
                                    r="23.878048780487816"
                                    cx={135}
                                    cy="127.5"
                                    fill="none"
                                    strokeWidth={0}
                                    stroke="#e8e8e8"
                                  />
                                </g>
                                <g id="SvgjsG2435" />
                                <g
                                  id="SvgjsG2433"
                                  transform="translate(0, 0) scale(1)"
                                >
                                  <g id="SvgjsG2447" className="apexcharts-slices">
                                    <g
                                      id="SvgjsG2448"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="France"
                                      rel={1}
                                      data-realindex={0}
                                    >
                                      <path
                                        id="SvgjsPath2449"
                                        d="M 135 53.35865853658535 A 74.14134146341465 74.14134146341465 0 0 1 199.2082851779736 90.42932926829269 L 135 127.5 L 135 53.35865853658535"
                                        fill="var(--chart-color1)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-0"
                                        index={0}
                                        j={0}
                                        data-angle={60}
                                        data-startangle={0}
                                        data-strokewidth={1}
                                        data-value={1242}
                                        data-pathorig="M 135 53.35865853658535 A 74.14134146341465 74.14134146341465 0 0 1 199.2082851779736 90.42932926829269 L 135 127.5 L 135 53.35865853658535"
                                        stroke="#008ffb"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG2450"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="India"
                                      rel={2}
                                      data-realindex={1}
                                    >
                                      <path
                                        id="SvgjsPath2451"
                                        d="M 189.12727422007922 96.24960365853659 A 62.50079268292684 62.50079268292684 0 0 1 189.12727422007922 158.75039634146341 L 135 127.5 L 189.12727422007922 96.24960365853659"
                                        fill="var(--chart-color2)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-1"
                                        index={0}
                                        j={1}
                                        data-angle={60}
                                        data-startangle={60}
                                        data-strokewidth={1}
                                        data-value={1047}
                                        data-pathorig="M 189.12727422007922 96.24960365853659 A 62.50079268292684 62.50079268292684 0 0 1 189.12727422007922 158.75039634146341 L 135 127.5 L 189.12727422007922 96.24960365853659"
                                        stroke="#1a9afb"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG2452"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="Canada"
                                      rel={3}
                                      data-realindex={2}
                                    >
                                      <path
                                        id="SvgjsPath2453"
                                        d="M 204.8950093080679 167.85390243902438 A 80.70780487804879 80.70780487804879 0 0 1 135 208.2078048780488 L 135 127.5 L 204.8950093080679 167.85390243902438"
                                        fill="var(--chart-color3)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-2"
                                        index={0}
                                        j={2}
                                        data-angle={60}
                                        data-startangle={120}
                                        data-strokewidth={1}
                                        data-value={1352}
                                        data-pathorig="M 204.8950093080679 167.85390243902438 A 80.70780487804879 80.70780487804879 0 0 1 135 208.2078048780488 L 135 127.5 L 204.8950093080679 167.85390243902438"
                                        stroke="#33a5fc"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG2454"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="Italy"
                                      rel={4}
                                      data-realindex={3}
                                    >
                                      <path
                                        id="SvgjsPath2455"
                                        d="M 135 214.53548780487807 A 87.03548780487807 87.03548780487807 0 0 1 59.62505653020487 171.01774390243904 L 135 127.5 L 135 214.53548780487807"
                                        fill="var(--chart-color4)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-3"
                                        index={0}
                                        j={3}
                                        data-angle={60}
                                        data-startangle={180}
                                        data-strokewidth={1}
                                        data-value={1458}
                                        data-pathorig="M 135 214.53548780487807 A 87.03548780487807 87.03548780487807 0 0 1 59.62505653020487 171.01774390243904 L 135 127.5 L 135 214.53548780487807"
                                        stroke="#4db1fc"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG2456"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="Japan"
                                      rel={5}
                                      data-realindex={4}
                                    >
                                      <path
                                        id="SvgjsPath2457"
                                        d="M 59.263174085562525 171.22667682926829 A 87.4533536585366 87.4533536585366 0 0 1 59.263174085562525 83.77332317073169 L 135 127.5 L 59.263174085562525 171.22667682926829"
                                        fill="var(--chart-color5)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-4"
                                        index={0}
                                        j={4}
                                        data-angle={60}
                                        data-startangle={240}
                                        data-strokewidth={1}
                                        data-value={1465}
                                        data-pathorig="M 59.263174085562525 171.22667682926829 A 87.4533536585366 87.4533536585366 0 0 1 59.263174085562525 83.77332317073169 L 135 127.5 L 59.263174085562525 171.22667682926829"
                                        stroke="#66bcfd"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG2458"
                                      className="apexcharts-series apexcharts-pie-series"
                                      seriesname="Us"
                                      rel={6}
                                      data-realindex={5}
                                    >
                                      <path
                                        id="SvgjsPath2459"
                                        d="M 37.34343743865368 71.11795731707315 A 112.76408536585366 112.76408536585366 0 0 1 134.98031895442355 14.735916351641563 L 135 127.5 L 37.34343743865368 71.11795731707315"
                                        fill="var(--chart-color6)"
                                        fillOpacity={1}
                                        strokeOpacity={1}
                                        strokeLinecap="butt"
                                        strokeWidth={1}
                                        strokeDasharray={0}
                                        className="apexcharts-pie-area apexcharts-polararea-slice-5"
                                        index={0}
                                        j={5}
                                        data-angle={60}
                                        data-startangle={300}
                                        data-strokewidth={1}
                                        data-value={1889}
                                        data-pathorig="M 37.34343743865368 71.11795731707315 A 112.76408536585366 112.76408536585366 0 0 1 134.98031895442355 14.735916351641563 L 135 127.5 L 37.34343743865368 71.11795731707315"
                                        stroke="#80c7fd"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                              <line
                                id="SvgjsLine2460"
                                x1={0}
                                y1={0}
                                x2={270}
                                y2={0}
                                stroke="#b6b6b6"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs"
                              />
                              <line
                                id="SvgjsLine2461"
                                x1={0}
                                y1={0}
                                x2={270}
                                y2={0}
                                strokeDasharray={0}
                                strokeWidth={0}
                                strokeLinecap="butt"
                                className="apexcharts-ycrosshairs-hidden"
                              />
                            </g>
                          </svg>
                          <div className="apexcharts-tooltip apexcharts-theme-dark">
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 1 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(0, 143, 251)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 2 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(26, 154, 251)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 3 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(51, 165, 252)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 4 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(77, 177, 252)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 5 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(102, 188, 253)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                            <div
                              className="apexcharts-tooltip-series-group"
                              style={{ order: 6 }}
                            >
                              <span
                                className="apexcharts-tooltip-marker"
                                style={{ backgroundColor: "rgb(128, 199, 253)" }}
                              />
                              <div
                                className="apexcharts-tooltip-text"
                                style={{
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                  fontSize: 12
                                }}
                              >
                                <div className="apexcharts-tooltip-y-group">
                                  <span className="apexcharts-tooltip-text-y-label" />
                                  <span className="apexcharts-tooltip-text-y-value" />
                                </div>
                                <div className="apexcharts-tooltip-goals-group">
                                  <span className="apexcharts-tooltip-text-goals-label" />
                                  <span className="apexcharts-tooltip-text-goals-value" />
                                </div>
                                <div className="apexcharts-tooltip-z-group">
                                  <span className="apexcharts-tooltip-text-z-label" />
                                  <span className="apexcharts-tooltip-text-z-value" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-8">
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                    <div className="info-header">
                      <h6 className="mb-0 fw-bold ">Project Timeline</h6>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-sm btn-link  dropdown-toggle"
                        id="react-aria3836924582-:r2:"
                        aria-expanded="false"
                      />
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="SimpleCahrtProjectTimeline" style={{ minHeight: 422 }}>
                      <div
                        id="apexcharts45p2wp51"
                        className="apexcharts-canvas apexcharts45p2wp51 apexcharts-theme-light"
                        style={{ width: 633, height: 407 }}
                      >
                        <svg
                          id="SvgjsSvg2284"
                          width={633}
                          height={407}
                          xmlns="http://www.w3.org/2000/svg"
                          version="1.1"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          
                          className="apexcharts-svg apexcharts-zoomable"
                          
                          transform="translate(0, 0)"
                          style={{ background: "transparent" }}
                        >
                          <foreignObject x={0} y={0} width={633} height={407}>
                            <div
                              className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                              xmlns="http://www.w3.org/1999/xhtml"
                              style={{
                                inset: "auto 0px 1px",
                                position: "absolute",
                                maxHeight: "203.5px"
                              }}
                            >
                              <div
                                className="apexcharts-legend-series"
                                style={{ margin: "2px 5px" }}
                                rel={1}
                                seriesname="Justin"
                                data-collapsed="false"
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  style={{
                                    background: "var(--chart-color1) !important",
                                    color: "var(--chart-color1)",
                                    height: 12,
                                    width: 12,
                                    left: 0,
                                    top: 0,
                                    borderWidth: 0,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 12
                                  }}
                                  rel={1}
                                  data-collapsed="false"
                                />
                                <span
                                  className="apexcharts-legend-text"
                                  style={{
                                    color: "rgb(55, 61, 63)",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  rel={1}
                                  i={0}
                                  data-default-text="Justin"
                                  data-collapsed="false"
                                >
                                  Justin
                                </span>
                              </div>
                              <div
                                className="apexcharts-legend-series"
                                style={{ margin: "2px 5px" }}
                                rel={2}
                                seriesname="Michael"
                                data-collapsed="false"
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  style={{
                                    background: "var(--chart-color2) !important",
                                    color: "var(--chart-color2)",
                                    height: 12,
                                    width: 12,
                                    left: 0,
                                    top: 0,
                                    borderWidth: 0,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 12
                                  }}
                                  rel={2}
                                  data-collapsed="false"
                                />
                                <span
                                  className="apexcharts-legend-text"
                                  style={{
                                    color: "rgb(55, 61, 63)",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  rel={2}
                                  i={1}
                                  data-default-text="Michael"
                                  data-collapsed="false"
                                >
                                  Michael
                                </span>
                              </div>
                              <div
                                className="apexcharts-legend-series"
                                style={{ margin: "2px 5px" }}
                                rel={3}
                                seriesname="Jason"
                                data-collapsed="false"
                              >
                                <span
                                  className="apexcharts-legend-marker"
                                  style={{
                                    background: "var(--chart-color4) !important",
                                    color: "var(--chart-color4)",
                                    height: 12,
                                    width: 12,
                                    left: 0,
                                    top: 0,
                                    borderWidth: 0,
                                    borderColor: "rgb(255, 255, 255)",
                                    borderRadius: 12
                                  }}
                                  rel={3}
                                  data-collapsed="false"
                                />
                                <span
                                  className="apexcharts-legend-text"
                                  style={{
                                    color: "rgb(55, 61, 63)",
                                    fontSize: 12,
                                    fontWeight: 400,
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                  rel={3}
                                  i={2}
                                  data-default-text="Jason"
                                  data-collapsed="false"
                                >
                                  Jason
                                </span>
                              </div>
                            </div>
                            <style
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }"
                              }}
                            />
                          </foreignObject>
                          <g
                            id="SvgjsG2286"
                            className="apexcharts-inner apexcharts-graphical"
                            transform="translate(93.36666870117188, 30)"
                          >
                            <defs id="SvgjsDefs2285">
                              <clipPath id="gridRectMask45p2wp51">
                                <rect
                                  id="SvgjsRect2307"
                                  width="533.6333312988281"
                                  height="322.966"
                                  x={-2}
                                  y={0}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                              <clipPath id="forecastMask45p2wp51" />
                              <clipPath id="nonForecastMask45p2wp51" />
                              <clipPath id="gridRectMarkerMask45p2wp51">
                                <rect
                                  id="SvgjsRect2308"
                                  width="589.6333312988281"
                                  height="382.966"
                                  x={-30}
                                  y={-30}
                                  rx={0}
                                  ry={0}
                                  opacity={1}
                                  strokeWidth={0}
                                  stroke="none"
                                  strokeDasharray={0}
                                  fill="#fff"
                                />
                              </clipPath>
                            </defs>
                            <line
                              id="SvgjsLine2290"
                              x1={0}
                              y1={0}
                              x2={0}
                              y2="322.966"
                              strokeDasharray={3}
                              strokeLinecap="butt"
                              className="apexcharts-xcrosshairs"
                              x={0}
                              y={0}
                              width={1}
                              height="322.966"
                              fill="#b1b9c4"
                              filter="none"
                              fillOpacity="0.9"
                              strokeWidth={0}
                            />
                            <line
                              id="SvgjsLine2353"
                              x1={0}
                              y1="323.966"
                              x2={0}
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine2354"
                              x1="81.48205096905048"
                              y1="323.966"
                              x2="81.48205096905048"
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine2355"
                              x1="162.96410193810095"
                              y1="323.966"
                              x2="162.96410193810095"
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine2356"
                              x1="244.44615290715143"
                              y1="323.966"
                              x2="244.44615290715143"
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine2357"
                              x1="325.9282038762019"
                              y1="323.966"
                              x2="325.9282038762019"
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <line
                              id="SvgjsLine2358"
                              x1="407.41025484525244"
                              y1="323.966"
                              x2="407.41025484525244"
                              y2="329.966"
                              stroke="#e0e0e0"
                              strokeDasharray={0}
                              strokeLinecap="butt"
                              className="apexcharts-xaxis-tick"
                            />
                            <g id="SvgjsG2349" className="apexcharts-grid">
                              <g
                                id="SvgjsG2350"
                                className="apexcharts-gridlines-horizontal"
                              >
                                <line
                                  id="SvgjsLine2360"
                                  x1={0}
                                  y1="64.5932"
                                  x2="529.6333312988281"
                                  y2="64.5932"
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine2361"
                                  x1={0}
                                  y1="129.1864"
                                  x2="529.6333312988281"
                                  y2="129.1864"
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine2362"
                                  x1={0}
                                  y1="193.7796"
                                  x2="529.6333312988281"
                                  y2="193.7796"
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                                <line
                                  id="SvgjsLine2363"
                                  x1={0}
                                  y1="258.3728"
                                  x2="529.6333312988281"
                                  y2="258.3728"
                                  stroke="#e0e0e0"
                                  strokeDasharray={0}
                                  strokeLinecap="butt"
                                  className="apexcharts-gridline"
                                />
                              </g>
                              <g
                                id="SvgjsG2351"
                                className="apexcharts-gridlines-vertical"
                              />
                              <line
                                id="SvgjsLine2366"
                                x1={0}
                                y1="322.966"
                                x2="529.6333312988281"
                                y2="322.966"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine2365"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2="322.966"
                                stroke="transparent"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <g
                              id="SvgjsG2309"
                              className="apexcharts-rangebar-series apexcharts-plot-series"
                            >
                              <g
                                id="SvgjsG2310"
                                className="apexcharts-series"
                                seriesname="Justin"
                                rel={1}
                                data-realindex={0}
                              >
                                <path
                                  id="SvgjsPath2314"
                                  d="M 40.7420254846327 9.68898 L 122.22407645366528 9.68898 L 122.22407645366528 24.760726666666667 L 40.7420254846327 24.760726666666667 Z"
                                  fill="var(--chart-color1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 40.7420254846327 9.68898 L 122.22407645366528 9.68898 L 122.22407645366528 24.760726666666667 L 40.7420254846327 24.760726666666667 Z"
                                  pathfrom="M 40.7420254846327 9.68898 L 40.7420254846327 9.68898 L 40.7420254846327 24.760726666666667 L 40.7420254846327 24.760726666666667 L 40.7420254846327 24.760726666666667 L 40.7420254846327 24.760726666666667 L 40.7420254846327 24.760726666666667 L 40.7420254846327 9.68898 Z"
                                  data-range-y1={1583107200000}
                                  data-range-y2={1583280000000}
                                  cy="9.68898"
                                  cx="122.22307645366527"
                                  j={0}
                                  val={1583280000000}
                                  barheight="15.071746666666666"
                                  barwidth="81.48205096903257"
                                />
                                <path
                                  id="SvgjsPath2316"
                                  d="M 40.7420254846327 74.28218 L 122.22407645366528 74.28218 L 122.22407645366528 89.35392666666667 L 40.7420254846327 89.35392666666667 Z"
                                  fill="var(--chart-color1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 40.7420254846327 74.28218 L 122.22407645366528 74.28218 L 122.22407645366528 89.35392666666667 L 40.7420254846327 89.35392666666667 Z"
                                  pathfrom="M 40.7420254846327 74.28218 L 40.7420254846327 74.28218 L 40.7420254846327 89.35392666666667 L 40.7420254846327 89.35392666666667 L 40.7420254846327 89.35392666666667 L 40.7420254846327 89.35392666666667 L 40.7420254846327 89.35392666666667 L 40.7420254846327 74.28218 Z"
                                  data-range-y1={1583107200000}
                                  data-range-y2={1583280000000}
                                  cy="74.28218"
                                  cx="122.22307645366527"
                                  j={1}
                                  val={1583280000000}
                                  barheight="15.071746666666666"
                                  barwidth="81.48205096903257"
                                />
                                <path
                                  id="SvgjsPath2318"
                                  d="M 122.22407645366528 138.87538 L 244.44715290721413 138.87538 L 244.44715290721413 153.94712666666666 L 122.22407645366528 153.94712666666666 Z"
                                  fill="var(--chart-color1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 122.22407645366528 138.87538 L 244.44715290721413 138.87538 L 244.44715290721413 153.94712666666666 L 122.22407645366528 153.94712666666666 Z"
                                  pathfrom="M 122.22407645366528 138.87538 L 122.22407645366528 138.87538 L 122.22407645366528 153.94712666666666 L 122.22407645366528 153.94712666666666 L 122.22407645366528 153.94712666666666 L 122.22407645366528 153.94712666666666 L 122.22407645366528 153.94712666666666 L 122.22407645366528 138.87538 Z"
                                  data-range-y1={1583280000000}
                                  data-range-y2={1583539200000}
                                  cy="138.87538"
                                  cx="244.44615290721413"
                                  j={2}
                                  val={1583539200000}
                                  barheight="15.071746666666666"
                                  barwidth="122.22307645354886"
                                />
                                <path
                                  id="SvgjsPath2320"
                                  d="M 407.41125484527925 203.46857999999997 L 448.15228032979553 203.46857999999997 L 448.15228032979553 218.54032666666663 L 407.41125484527925 218.54032666666663 Z"
                                  fill="var(--chart-color1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 407.41125484527925 203.46857999999997 L 448.15228032979553 203.46857999999997 L 448.15228032979553 218.54032666666663 L 407.41125484527925 218.54032666666663 Z"
                                  pathfrom="M 407.41125484527925 203.46857999999997 L 407.41125484527925 203.46857999999997 L 407.41125484527925 218.54032666666663 L 407.41125484527925 218.54032666666663 L 407.41125484527925 218.54032666666663 L 407.41125484527925 218.54032666666663 L 407.41125484527925 218.54032666666663 L 407.41125484527925 203.46857999999997 Z"
                                  data-range-y1={1583884800000}
                                  data-range-y2={1583971200000}
                                  cy="203.46857999999997"
                                  cx="448.15128032979555"
                                  j={3}
                                  val={1583971200000}
                                  barheight="15.071746666666666"
                                  barwidth="40.741025484516285"
                                />
                                <path
                                  id="SvgjsPath2322"
                                  d="M 40.7420254846327 268.06178 L 81.48305096914899 268.06178 L 81.48305096914899 283.1335266666667 L 40.7420254846327 283.1335266666667 Z"
                                  fill="var(--chart-color1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={0}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 40.7420254846327 268.06178 L 81.48305096914899 268.06178 L 81.48305096914899 283.1335266666667 L 40.7420254846327 283.1335266666667 Z"
                                  pathfrom="M 40.7420254846327 268.06178 L 40.7420254846327 268.06178 L 40.7420254846327 283.1335266666667 L 40.7420254846327 283.1335266666667 L 40.7420254846327 283.1335266666667 L 40.7420254846327 283.1335266666667 L 40.7420254846327 283.1335266666667 L 40.7420254846327 268.06178 Z"
                                  data-range-y1={1583107200000}
                                  data-range-y2={1583193600000}
                                  cy="268.06178"
                                  cx="81.48205096914899"
                                  j={4}
                                  val={1583193600000}
                                  barheight="15.071746666666666"
                                  barwidth="40.741025484516285"
                                />
                                <g
                                  id="SvgjsG2312"
                                  className="apexcharts-rangebar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG2313"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2315"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2317"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2319"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2321"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG2323"
                                className="apexcharts-series"
                                seriesname="Michael"
                                rel={2}
                                data-realindex={1}
                              >
                                <path
                                  id="SvgjsPath2327"
                                  d="M 0.001 24.760726666666667 L 81.48305096914899 24.760726666666667 L 81.48305096914899 39.83247333333333 L 0.001 39.83247333333333 Z"
                                  fill="var(--chart-color2)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 0.001 24.760726666666667 L 81.48305096914899 24.760726666666667 L 81.48305096914899 39.83247333333333 L 0.001 39.83247333333333 Z"
                                  pathfrom="M 0.001 24.760726666666667 L 0.001 24.760726666666667 L 0.001 39.83247333333333 L 0.001 39.83247333333333 L 0.001 39.83247333333333 L 0.001 39.83247333333333 L 0.001 39.83247333333333 L 0.001 24.760726666666667 Z"
                                  data-range-y1={1583020800000}
                                  data-range-y2={1583193600000}
                                  cy="24.760726666666667"
                                  cx="81.48205096914899"
                                  j={0}
                                  val={1583193600000}
                                  barheight="15.071746666666666"
                                  barwidth="81.48205096914899"
                                />
                                <path
                                  id="SvgjsPath2329"
                                  d="M 81.48305096914899 89.35392666666667 L 244.44715290721413 89.35392666666667 L 244.44715290721413 104.42567333333334 L 81.48305096914899 104.42567333333334 Z"
                                  fill="var(--chart-color2)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 81.48305096914899 89.35392666666667 L 244.44715290721413 89.35392666666667 L 244.44715290721413 104.42567333333334 L 81.48305096914899 104.42567333333334 Z"
                                  pathfrom="M 81.48305096914899 89.35392666666667 L 81.48305096914899 89.35392666666667 L 81.48305096914899 104.42567333333334 L 81.48305096914899 104.42567333333334 L 81.48305096914899 104.42567333333334 L 81.48305096914899 104.42567333333334 L 81.48305096914899 104.42567333333334 L 81.48305096914899 89.35392666666667 Z"
                                  data-range-y1={1583193600000}
                                  data-range-y2={1583539200000}
                                  cy="89.35392666666667"
                                  cx="244.44615290721413"
                                  j={1}
                                  val={1583539200000}
                                  barheight="15.071746666666666"
                                  barwidth="162.96410193806514"
                                />
                                <path
                                  id="SvgjsPath2331"
                                  d="M 203.70612742269785 153.94712666666666 L 325.9292038762467 153.94712666666666 L 325.9292038762467 169.01887333333332 L 203.70612742269785 169.01887333333332 Z"
                                  fill="var(--chart-color2)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 203.70612742269785 153.94712666666666 L 325.9292038762467 153.94712666666666 L 325.9292038762467 169.01887333333332 L 203.70612742269785 169.01887333333332 Z"
                                  pathfrom="M 203.70612742269785 153.94712666666666 L 203.70612742269785 153.94712666666666 L 203.70612742269785 169.01887333333332 L 203.70612742269785 169.01887333333332 L 203.70612742269785 169.01887333333332 L 203.70612742269785 169.01887333333332 L 203.70612742269785 169.01887333333332 L 203.70612742269785 153.94712666666666 Z"
                                  data-range-y1={1583452800000}
                                  data-range-y2={1583712000000}
                                  cy="153.94712666666666"
                                  cx="325.9282038762467"
                                  j={2}
                                  val={1583712000000}
                                  barheight="15.071746666666666"
                                  barwidth="122.22307645354886"
                                />
                                <path
                                  id="SvgjsPath2333"
                                  d="M 366.67022936076296 218.54032666666666 L 407.41125484527925 218.54032666666666 L 407.41125484527925 233.6120733333333 L 366.67022936076296 233.6120733333333 Z"
                                  fill="var(--chart-color2)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 366.67022936076296 218.54032666666666 L 407.41125484527925 218.54032666666666 L 407.41125484527925 233.6120733333333 L 366.67022936076296 233.6120733333333 Z"
                                  pathfrom="M 366.67022936076296 218.54032666666666 L 366.67022936076296 218.54032666666666 L 366.67022936076296 233.6120733333333 L 366.67022936076296 233.6120733333333 L 366.67022936076296 233.6120733333333 L 366.67022936076296 233.6120733333333 L 366.67022936076296 233.6120733333333 L 366.67022936076296 218.54032666666666 Z"
                                  data-range-y1={1583798400000}
                                  data-range-y2={1583884800000}
                                  cy="218.54032666666666"
                                  cx="407.41025484527927"
                                  j={3}
                                  val={1583884800000}
                                  barheight="15.071746666666666"
                                  barwidth="40.741025484516285"
                                />
                                <path
                                  id="SvgjsPath2335"
                                  d="M 0.001 283.1335266666666 L 40.7420254846327 283.1335266666666 L 40.7420254846327 298.2052733333333 L 0.001 298.2052733333333 Z"
                                  fill="var(--chart-color2)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={1}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 0.001 283.1335266666666 L 40.7420254846327 283.1335266666666 L 40.7420254846327 298.2052733333333 L 0.001 298.2052733333333 Z"
                                  pathfrom="M 0.001 283.1335266666666 L 0.001 283.1335266666666 L 0.001 298.2052733333333 L 0.001 298.2052733333333 L 0.001 298.2052733333333 L 0.001 298.2052733333333 L 0.001 298.2052733333333 L 0.001 283.1335266666666 Z"
                                  data-range-y1={1583020800000}
                                  data-range-y2={1583107200000}
                                  cy="283.1335266666666"
                                  cx="40.7410254846327"
                                  j={4}
                                  val={1583107200000}
                                  barheight="15.071746666666666"
                                  barwidth="40.7410254846327"
                                />
                                <g
                                  id="SvgjsG2325"
                                  className="apexcharts-rangebar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG2326"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2328"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2330"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2332"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2334"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG2336"
                                className="apexcharts-series"
                                seriesname="Jason"
                                rel={3}
                                data-realindex={2}
                              >
                                <path
                                  id="SvgjsPath2340"
                                  d="M 81.48305096914899 39.83247333333333 L 162.96510193818156 39.83247333333333 L 162.96510193818156 54.904219999999995 L 81.48305096914899 54.904219999999995 Z"
                                  fill="var(--chart-color4)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={2}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 81.48305096914899 39.83247333333333 L 162.96510193818156 39.83247333333333 L 162.96510193818156 54.904219999999995 L 81.48305096914899 54.904219999999995 Z"
                                  pathfrom="M 81.48305096914899 39.83247333333333 L 81.48305096914899 39.83247333333333 L 81.48305096914899 54.904219999999995 L 81.48305096914899 54.904219999999995 L 81.48305096914899 54.904219999999995 L 81.48305096914899 54.904219999999995 L 81.48305096914899 54.904219999999995 L 81.48305096914899 39.83247333333333 Z"
                                  data-range-y1={1583193600000}
                                  data-range-y2={1583366400000}
                                  cy="39.83247333333333"
                                  cx="162.96410193818156"
                                  j={0}
                                  val={1583366400000}
                                  barheight="15.071746666666666"
                                  barwidth="81.48205096903257"
                                />
                                <path
                                  id="SvgjsPath2342"
                                  d="M 0.001 104.42567333333332 L 325.9292038762467 104.42567333333332 L 325.9292038762467 119.49741999999999 L 0.001 119.49741999999999 Z"
                                  fill="var(--chart-color4)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={2}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 0.001 104.42567333333332 L 325.9292038762467 104.42567333333332 L 325.9292038762467 119.49741999999999 L 0.001 119.49741999999999 Z"
                                  pathfrom="M 0.001 104.42567333333332 L 0.001 104.42567333333332 L 0.001 119.49741999999999 L 0.001 119.49741999999999 L 0.001 119.49741999999999 L 0.001 119.49741999999999 L 0.001 119.49741999999999 L 0.001 104.42567333333332 Z"
                                  data-range-y1={1583020800000}
                                  data-range-y2={1583712000000}
                                  cy="104.42567333333332"
                                  cx="325.9282038762467"
                                  j={1}
                                  val={1583712000000}
                                  barheight="15.071746666666666"
                                  barwidth="325.9282038762467"
                                />
                                <path
                                  id="SvgjsPath2344"
                                  d="M 162.96510193818156 169.01887333333332 L 285.1881783917304 169.01887333333332 L 285.1881783917304 184.09061999999997 L 162.96510193818156 184.09061999999997 Z"
                                  fill="var(--chart-color4)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={2}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 162.96510193818156 169.01887333333332 L 285.1881783917304 169.01887333333332 L 285.1881783917304 184.09061999999997 L 162.96510193818156 184.09061999999997 Z"
                                  pathfrom="M 162.96510193818156 169.01887333333332 L 162.96510193818156 169.01887333333332 L 162.96510193818156 184.09061999999997 L 162.96510193818156 184.09061999999997 L 162.96510193818156 184.09061999999997 L 162.96510193818156 184.09061999999997 L 162.96510193818156 184.09061999999997 L 162.96510193818156 169.01887333333332 Z"
                                  data-range-y1={1583366400000}
                                  data-range-y2={1583625600000}
                                  cy="169.01887333333332"
                                  cx="285.1871783917304"
                                  j={2}
                                  val={1583625600000}
                                  barheight="15.071746666666666"
                                  barwidth="122.22307645354886"
                                />
                                <path
                                  id="SvgjsPath2346"
                                  d="M 407.41125484527925 233.6120733333333 L 651.8574077524934 233.6120733333333 L 651.8574077524934 248.68381999999997 L 407.41125484527925 248.68381999999997 Z"
                                  fill="var(--chart-color4)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={2}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 407.41125484527925 233.6120733333333 L 651.8574077524934 233.6120733333333 L 651.8574077524934 248.68381999999997 L 407.41125484527925 248.68381999999997 Z"
                                  pathfrom="M 407.41125484527925 233.6120733333333 L 407.41125484527925 233.6120733333333 L 407.41125484527925 248.68381999999997 L 407.41125484527925 248.68381999999997 L 407.41125484527925 248.68381999999997 L 407.41125484527925 248.68381999999997 L 407.41125484527925 248.68381999999997 L 407.41125484527925 233.6120733333333 Z"
                                  data-range-y1={1583884800000}
                                  data-range-y2={1584403200000}
                                  cy="233.6120733333333"
                                  cx="651.8564077524934"
                                  j={3}
                                  val={1584403200000}
                                  barheight="15.071746666666666"
                                  barwidth="244.44615290721413"
                                />
                                <path
                                  id="SvgjsPath2348"
                                  d="M 81.48305096914899 298.2052733333333 L 162.96510193818156 298.2052733333333 L 162.96510193818156 313.27702 L 81.48305096914899 313.27702 Z"
                                  fill="var(--chart-color4)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  strokeLinecap="square"
                                  strokeWidth={0}
                                  strokeDasharray={0}
                                  className="apexcharts-rangebar-area"
                                  index={2}
                                  clipPath="url(#gridRectMask45p2wp51)"
                                  pathto="M 81.48305096914899 298.2052733333333 L 162.96510193818156 298.2052733333333 L 162.96510193818156 313.27702 L 81.48305096914899 313.27702 Z"
                                  pathfrom="M 81.48305096914899 298.2052733333333 L 81.48305096914899 298.2052733333333 L 81.48305096914899 313.27702 L 81.48305096914899 313.27702 L 81.48305096914899 313.27702 L 81.48305096914899 313.27702 L 81.48305096914899 313.27702 L 81.48305096914899 298.2052733333333 Z"
                                  data-range-y1={1583193600000}
                                  data-range-y2={1583366400000}
                                  cy="298.2052733333333"
                                  cx="162.96410193818156"
                                  j={4}
                                  val={1583366400000}
                                  barheight="15.071746666666666"
                                  barwidth="81.48205096903257"
                                />
                                <g
                                  id="SvgjsG2338"
                                  className="apexcharts-rangebar-goals-markers"
                                  style={{ pointerEvents: "none" }}
                                >
                                  <g
                                    id="SvgjsG2339"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2341"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2343"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2345"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                  <g
                                    id="SvgjsG2347"
                                    className="apexcharts-hidden-element-shown apexcharts-bar-goals-groups"
                                    clipPath="url(#gridRectMarkerMask45p2wp51)"
                                  />
                                </g>
                              </g>
                              <g
                                id="SvgjsG2311"
                                className="apexcharts-datalabels"
                                data-realindex={0}
                              />
                              <g
                                id="SvgjsG2324"
                                className="apexcharts-datalabels"
                                data-realindex={1}
                              />
                              <g
                                id="SvgjsG2337"
                                className="apexcharts-datalabels"
                                data-realindex={2}
                              />
                            </g>
                            <g id="SvgjsG2352" className="apexcharts-grid-borders">
                              <line
                                id="SvgjsLine2359"
                                x1={0}
                                y1={0}
                                x2="529.6333312988281"
                                y2={0}
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine2364"
                                x1={0}
                                y1="322.966"
                                x2="529.6333312988281"
                                y2="322.966"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                                className="apexcharts-gridline"
                              />
                              <line
                                id="SvgjsLine2403"
                                x1={0}
                                y1="322.966"
                                x2="529.6333312988281"
                                y2="322.966"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeWidth={1}
                                strokeLinecap="butt"
                              />
                              <line
                                id="SvgjsLine2421"
                                x1={0}
                                y1={1}
                                x2={0}
                                y2="322.966"
                                stroke="#e0e0e0"
                                strokeDasharray={0}
                                strokeLinecap="butt"
                              />
                            </g>
                            <line
                              id="SvgjsLine2367"
                              x1={0}
                              y1={0}
                              x2="529.6333312988281"
                              y2={0}
                              stroke="#b6b6b6"
                              strokeDasharray={0}
                              strokeWidth={1}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs"
                            />
                            <line
                              id="SvgjsLine2368"
                              x1={0}
                              y1={0}
                              x2="529.6333312988281"
                              y2={0}
                              strokeDasharray={0}
                              strokeWidth={0}
                              strokeLinecap="butt"
                              className="apexcharts-ycrosshairs-hidden"
                            />
                            <g
                              id="SvgjsG2404"
                              className="apexcharts-yaxis apexcharts-xaxis-inversed"
                              rel={0}
                            >
                              <g
                                id="SvgjsG2405"
                                className="apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g"
                                transform="translate(0, 0)"
                              >
                                <text
                                  id="SvgjsText2407"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={-15}
                                  y="35.232654545454544"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2408">Design</tspan>
                                  <title>Design</title>
                                </text>
                                <text
                                  id="SvgjsText2410"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={-15}
                                  y="99.82585454545455"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2411">MobileApp</tspan>
                                  <title>MobileApp</title>
                                </text>
                                <text
                                  id="SvgjsText2413"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={-15}
                                  y="164.41905454545454"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2414">Infography</tspan>
                                  <title>Infography</title>
                                </text>
                                <text
                                  id="SvgjsText2416"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={-15}
                                  y="229.01225454545454"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2417">Protoyping</tspan>
                                  <title>Protoyping</title>
                                </text>
                                <text
                                  id="SvgjsText2419"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={-15}
                                  y="293.60545454545456"
                                  textAnchor="end"
                                  dominantBaseline="auto"
                                  fontSize="11px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-yaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2420">Development</tspan>
                                  <title>Development</title>
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG2369"
                              className="apexcharts-xaxis apexcharts-yaxis-inversed"
                            >
                              <g
                                id="SvgjsG2370"
                                className="apexcharts-xaxis-texts-g"
                                transform="translate(0, -8)"
                              >
                                <text
                                  id="SvgjsText2372"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x={0}
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2374">Mar &apos;20</tspan>
                                  <title>Mar &apos;20</title>
                                </text>
                                <text
                                  id="SvgjsText2376"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="81.48205096905048"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2378">03 Mar</tspan>
                                  <title>03 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2380"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="162.96410193810095"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2382">05 Mar</tspan>
                                  <title>05 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2384"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="244.44615290715143"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2386">07 Mar</tspan>
                                  <title>07 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2388"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="325.9282038762019"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2390">09 Mar</tspan>
                                  <title>09 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2392"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="407.41025484525244"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2394">11 Mar</tspan>
                                  <title>11 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2396"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="488.892305814303"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2398">13 Mar</tspan>
                                  <title>13 Mar</title>
                                </text>
                                <text
                                  id="SvgjsText2400"
                                  fontFamily="Helvetica, Arial, sans-serif"
                                  x="570.3743567833535"
                                  y="352.966"
                                  textAnchor="middle"
                                  dominantBaseline="auto"
                                  fontSize="12px"
                                  fontWeight={400}
                                  fill="#373d3f"
                                  className="apexcharts-text apexcharts-xaxis-label "
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif"
                                  }}
                                >
                                  <tspan id="SvgjsTspan2402" />
                                  <title />
                                </text>
                              </g>
                            </g>
                            <g
                              id="SvgjsG2422"
                              className="apexcharts-yaxis-annotations"
                            />
                            <g
                              id="SvgjsG2423"
                              className="apexcharts-xaxis-annotations"
                            />
                            <g
                              id="SvgjsG2424"
                              className="apexcharts-point-annotations"
                            />
                            <rect
                              id="SvgjsRect2425"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                              className="apexcharts-zoom-rect"
                            />
                            <rect
                              id="SvgjsRect2426"
                              width={0}
                              height={0}
                              x={0}
                              y={0}
                              rx={0}
                              ry={0}
                              opacity={1}
                              strokeWidth={0}
                              stroke="none"
                              strokeDasharray={0}
                              fill="#fefefe"
                              className="apexcharts-selection-rect"
                            />
                          </g>
                          <rect
                            id="SvgjsRect2289"
                            width={0}
                            height={0}
                            x={0}
                            y={0}
                            rx={0}
                            ry={0}
                            opacity={1}
                            strokeWidth={0}
                            stroke="none"
                            strokeDasharray={0}
                            fill="#fefefe"
                          />
                        </svg>
                        <div className="apexcharts-tooltip apexcharts-theme-light">
                          <div
                            className="apexcharts-tooltip-title"
                            style={{
                              fontFamily: "Helvetica, Arial, sans-serif",
                              fontSize: 12
                            }}
                          />
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 1 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "var(--chart-color1)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 2 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "var(--chart-color2)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                          <div
                            className="apexcharts-tooltip-series-group"
                            style={{ order: 3 }}
                          >
                            <span
                              className="apexcharts-tooltip-marker"
                              style={{ backgroundColor: "var(--chart-color4)" }}
                            />
                            <div
                              className="apexcharts-tooltip-text"
                              style={{
                                fontFamily: "Helvetica, Arial, sans-serif",
                                fontSize: 12
                              }}
                            >
                              <div className="apexcharts-tooltip-y-group">
                                <span className="apexcharts-tooltip-text-y-label" />
                                <span className="apexcharts-tooltip-text-y-value" />
                              </div>
                              <div className="apexcharts-tooltip-goals-group">
                                <span className="apexcharts-tooltip-text-goals-label" />
                                <span className="apexcharts-tooltip-text-goals-value" />
                              </div>
                              <div className="apexcharts-tooltip-z-group">
                                <span className="apexcharts-tooltip-text-z-label" />
                                <span className="apexcharts-tooltip-text-z-value" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                          <div className="apexcharts-yaxistooltip-text" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 row-cols-xxl-4">
              <div className="col">
                <div className="card bg-primary">
                  <div className="card-body text-white d-flex align-items-center">
                    <i className="icofont-data fs-3" />
                    <div className="d-flex flex-column ms-3">
                      <h6 className="mb-0">Total Projects</h6>
                      <span className="text-white">550</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-primary">
                  <div className="card-body text-white d-flex align-items-center">
                    <i className="icofont-chart-flow fs-3" />
                    <div className="d-flex flex-column ms-3">
                      <h6 className="mb-0">Coming Projects</h6>
                      <span className="text-white">210</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-primary">
                  <div className="card-body text-white d-flex align-items-center">
                    <i className="icofont-chart-flow-2 fs-3" />
                    <div className="d-flex flex-column ms-3">
                      <h6 className="mb-0">Progress Projects</h6>
                      <span className="text-white">8456 Files</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card bg-primary">
                  <div className="card-body text-white d-flex align-items-center">
                    <i className="icofont-tasks fs-3" />
                    <div className="d-flex flex-column ms-3">
                      <h6 className="mb-0">Finished Projects</h6>
                      <span className="text-white">88 Files</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-3 mb-3 row-deck">
              <div className="col-md-12">
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <div className="info-header">
                      <h6 className="mb-0 fw-bold ">Project Information</h6>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      id="myProjectTable_wrapper"
                      className="dataTables_wrapper dt-bootstrap5 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="table-responsive">
                            <table
                              id="myProjectTable"
                              className="table table-hover align-middle mb-0 nowrap dataTable no-footer dtr-inline"
                              role="grid"
                              aria-describedby="myProjectTable_info"
                            >
                              <thead>
                                <tr role="row">
                                  <th
                                    className="sorting_asc"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-sort="ascending"
                                    aria-label="Title: activate to sort column descending"
                                  >
                                    Title
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Date Start: activate to sort column ascending"
                                  >
                                    Date Start
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Deadline: activate to sort column ascending"
                                  >
                                    Deadline
                                  </th>
                                  <th
                                    className="dt-body-right sorting"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Leader: activate to sort column ascending"
                                  >
                                    Leader
                                  </th>
                                  <th
                                    className="sorting"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Completion: activate to sort column ascending"
                                  >
                                    Completion
                                  </th>
                                  <th
                                    className="dt-body-right sorting"
                                    tabIndex={0}
                                    aria-controls="myProjectTable"
                                    rowSpan={1}
                                    colSpan={1}
                                    aria-label="Stage: activate to sort column ascending"
                                  >
                                    Stage
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr role="row" className="odd">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Box of Crayons</a>
                                  </td>
                                  <td>23-02-2021</td>
                                  <td>1 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
                                      alt="Aatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Peter</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={85}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        85%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-warning">MEDIUM</span>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Fast Cad</a>
                                  </td>
                                  <td>14-04-2021</td>
                                  <td>2 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                                      alt="Avatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Benjamin</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={76}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        76%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-secondary">
                                      MEDIUM
                                    </span>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Gob Geeklords</a>
                                  </td>
                                  <td>16-03-2021</td>
                                  <td>10 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBQADAQAAAAAAAAAAAAAIAAQGBwkBAgMF/9oACAEBAAAAAD+p7KlrqNfazA+K+jmtyFefOB+ONcQbynvapg7vxgPhhhxSxxxwPLY//8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAL/2gAIAQIQAAAAwZnMhX2CZ3//xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYAAv/aAAgBAxAAAADGB9U0zOsVv//EADUQAAEDAgQEAwUHBQAAAAAAAAIBAwQFBgAHESEIEhMxEBRhFSJCUWIzQUNxgZKTkZSiwsP/2gAIAQEAAT8Axnhm5EyhtP2kDASa3PU2KZGc15FcRN3HPobxd2aN/XzNkS7juie+LpkSRReMIraF8LbQqgomi4tnMa+rOlhNtq6qjBdH4QeU2i3U9DbPUCRVVV0VMcPed4ZuUOTFrCMR7npu8tln3AfZ7C+2Kqq+h+PGZPlys2IcB37GJQ4osJt+KZmuLVyCptxWDCr8i434FZmh12OvHJKeAEujYG4o9z+aLh/hzg06zqxUp1znIr0Vh50BgMG9TwNlFVWjdQP6rty44Wa3Oo+dFsRoqr0qkMmFJD3921aVzsHyUPHiNtSRTrlsDOOFC67FvyRjVpAFTMIJEqo+ifJrUsQqPGWjxqUyLDlIWOLYCo6oUZR0RrlXblUdvywFHCNDcpsRthiCqGiC2HJ0wNVUhEU2+/ZccPdmrdma105x+RWPbkVXYlCVWuVJK6eVR0PQGw38XGwdA2nAEgNFEhJNUVF2VFRcV4Cp5SEgMA690VcZZM+kBHvoKkiFyoqp30XTFAF6pJHGpxm2H1aU3mAc6wIvZRQ1EeZP0TDDDMVlqPHaBplsUAG2xQREU2RERNkRPDNDOa2MrWIzdTB6ZVZIK5HgRtOdQ7c5kuwBi7eLDMStI6xbkOFQY5djBPNSf3uogf4YyBnVm77UrMusVd+dUWKuoG5KcJwuQo7RJjiFqVZtK36D7Lqz0GdJnumLsR023ORhkviH1JMWvxQZq0DptVKXErcYdtJzKI6g+jjXJjKHPyhZoPu0d2nnSa200rqRjdR1t4E7k0eg44hHVqWbVzlqqtseUjt/SgMAqp+5Vx5L6ccIzqpTL4iqaooyob38gmn+mOLmYrtbs2lge8aHLkf3BiH/ADx5X0xkYSwc17MfReXWW41/KyYY/8QAJREAAgEDAgUFAAAAAAAAAAAAAQIDAAQSETEFEyFBURAUFjJh/9oACAECAQE/AKN9bBihc6hsdjv6OodWU7EEUYZfcm31GXM037+aRcEVB2AFWPBYjBDNImTuobrt1peFWvyYycnqJC+Pb6+KveDw8iaVY8WVS2o/K//EACIRAAIABgICAwAAAAAAAAAAAAECAAMEERIxBRMQFSJBof/aAAgBAwEBPwCBQ1JUMEFiuWx4VijKw2CDHevQJ9jjhfX5DsXZmOybxU8mwmzJatYKSIPI1HpBL7viUxv97im5F+yWha4JAj//2Q=="
                                      alt="Avatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Evan</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={65}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        65%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-success">LOW</span>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Java Dalia</a>
                                  </td>
                                  <td>17-03-2021</td>
                                  <td>8 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQQHCAkDBv/aAAgBAQAAAAC/xlyajAyxq5bOuiN887H2Q9qJF/WS1GMbLJL1ICqYW0nz/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAQGAv/aAAgBAhAAAAADMtUpoP8A/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwYAAQcF/9oACAEDEAAAAIcFtap1tuxH/8QAKxAAAQQBAwIFBAMBAAAAAAAAAQIDBAUGAAcRITEIEBJRYRMUcZEgIlOB/9oACAEBAAE/APLxVZhm0nc24xmylS49HDQwa+GhSkMOtLbBL3sslWvCrmGbxNzKfG66VMfopiHzYQ1qUthplDZIe9kEK/hfXUHGKK5yCyURErYT8x8p7htlBWQPkga3B3ezLcfIXru0sFx2QVohw46vQ1FYJ5CB7n3UdYTuTmOD3sHIae3k+tlwBxl1xSmJDfPKmnEnoQdUN5EyKgp8gg8/bWUJiYyFdwh9AcAPyOfPemvl22024MCAhSpDlNI+khPdwoHrKB8kDW1nh1sb9uPeZqHq+tVwtmEP6Snx7r/zRrPtraWftzY47QU7MZcJozK9thHX7hkc8e6lODlJJ1tVAk0m2mC1U1JTLj0kNLyFd0LLYJQflPnJYEhhxlXQKTxzq5hy6lL5ZhOSnEjltpBSgufgrIA1SxJNm2wp6GuK4ocuNuFKy3+SgkHUdlLDTbSeyEhPm9b1sUrS9LQFJ7gdSD/zUvNKnKUJVQT0vNx3VpcWnofUDxxwevGoea1OKoUq/sEstyHUIbWrqfUTx2HXjUe2q5JbS1LBUrjgduf35HtrcWW5W4/arYUUyZJLDRHcFw9SPkDk6Yqp0Vf1Yz7rK+OPU2opP7Gn6udJX9WTIdec7epxRUf2dbczHLLHqpb6iqTGIYdJ7ktnoT8kcHQ1/8QAIhEAAgEEAQQDAAAAAAAAAAAAAQIRAAMEIRIQFDFBJFFx/9oACAECAQE/AKEbk/nRiwViokxqruRm3cpZkMr6QeBSzxXl5jdZuU+ObKooJdo36rh8vu+4E/UVhZT5BvK6gFGiR7r/xAAoEQABAgUCBAcAAAAAAAAAAAABAhEAAwQFEhMxEBRikRUXISMkcXL/2gAIAQMBAT8AjGm0nym6rbYjHu78Es4y2f1iXIopNCqYnEy1pZSyRl2gs5bZ4stsF1rJVIVlJWtCA3UWjyztePK+LfE/Huv9xerYLVWzaTMqKFrQX6S0f//Z"
                                      alt="Avatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Connor</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={48}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        48%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-secondary">
                                      MEDIUM
                                    </span>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Practice to Perfect</a>
                                  </td>
                                  <td>12-02-2021</td>
                                  <td>1 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                                      alt="Avatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Colin</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={80}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        80%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-success">LOW</span>
                                  </td>
                                </tr>
                                <tr role="row" className="even">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Rhinestone</a>
                                  </td>
                                  <td>18-02-2021</td>
                                  <td>2 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
                                      alt="Avatar"
                                      className="avatar sm rounded-circle me-2"
                                    />
                                    <a href="#!">Adam</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar  bg-primary"
                                        role="progressbar"
                                        aria-valuenow={90}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        90%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-danger">HIGH</span>
                                  </td>
                                </tr>
                                <tr role="row" className="odd">
                                  <td tabIndex={0} className="sorting_1">
                                    <a href="projects">Social Geek Made</a>
                                  </td>
                                  <td>10-01-2021</td>
                                  <td>4 Month</td>
                                  <td className=" dt-body-right">
                                    <img
                                      src="data-image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                                      alt="Avatar"
                                      className="avatar sm  rounded-circle me-2"
                                    />
                                    <a href="#!">Keith</a>
                                  </td>
                                  <td>
                                    <div className="progress">
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        aria-valuenow={92}
                                        aria-valuemin={0}
                                        aria-valuemax={100}
                                      >
                                        78%
                                      </div>
                                    </div>
                                  </td>
                                  <td className=" dt-body-right">
                                    <span className="badge bg-warning">MEDIUM</span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

