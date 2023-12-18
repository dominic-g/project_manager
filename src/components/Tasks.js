import React from 'react';
import Dashboard from './Dashboard';
import Left from './Left';
import { Helmet } from 'react-helmet-async';

const Projects = ({ projects, notifications }) => {
	const pageTitle = "Projects Details";


	return (
		<>

			<Helmet>
				<link rel="stylesheet" href={`${process.env.PUBLIC_URL}/assets/css/main.e6515412.css`}/>
				<title>Tasks | List</title>
			</Helmet>

			<div id="mytask-layout" className="theme-indigo">
				<Left />
				<div className="main px-lg-4 px-md-4">
					<div className="header">
						<nav className="navbar py-4">
							<div className="container-xxl">
								<div className="h-right d-flex align-items-center order-1">
									<div className="d-flex">
										<a
											className="nav-link text-primary collapsed info-page-icon"
											title="Get Help"
											href="/template/my-task/react/help"
											>
										<i className="icofont-info-square fs-5" />
										</a>
										<div className="avatar-list avatar-list-stacked px-3 me-2">
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
												alt=""
												/>
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
												alt=""
												/>
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
												alt=""
												/>
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
												alt=""
												/>
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
												alt=""
												/>
											<img
												className="avatar rounded-circle"
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
												alt=""
												/>
											<span className="avatar rounded-circle text-center pointer">
											<i className="icofont-ui-add" />
											</span>
										</div>
									</div>
									<div className="notifications px-2 px-md-0 dropdown">
										<a
											className="nav-link dropdown-toggle pulse dropdown-toggle"
											id="react-aria5276916549-:r0:"
											aria-expanded="false"
											>
										<i className="icofont-alarm fs-5" />
										</a>
									</div>
									<div className="dropdown user-profile ms-2 ms-sm-3 d-flex align-items-center dropdown">
										<div className="u-info me-2">
											<p className="mb-0 text-end line-height-sm ">
												<span className="font-weight-bold">Dylan Hunter</span>
											</p>
											<small>Admin Profile</small>
										</div>
										<a
											className="nav-link dropdown-toggle pulse p-0 dropdown-toggle"
											id="react-aria5276916549-:r1:"
											aria-expanded="false"
											>
										<img
											className="avatar lg rounded-circle img-thumbnail"
											src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAACvCAYAAAAFSMcJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjBCQzEyNDQwRjVFMDExRUJCMkREODYzREU3NDZBQ0ZFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjBCQzEyNDQxRjVFMDExRUJCMkREODYzREU3NDZBQ0ZFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MEJDMTI0M0VGNUUwMTFFQkIyREQ4NjNERTc0NkFDRkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEJDMTI0M0ZGNUUwMTFFQkIyREQ4NjNERTc0NkFDRkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6HbGhRAAAd00lEQVR42uyd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"
											alt="profile"
											/>
										</a>
									</div>
								</div>
								<button className="navbar-toggler p-0 border-0 menu-toggle order-3">
								<span className="fa fa-bars" />
								</button>
								<div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
									<div className="input-group flex-nowrap input-group-lg">
										<button
											type="button"
											className="input-group-text"
											id="addon-wrapping"
											>
										<i className="fa fa-search" />
										</button>
										<input
											type="search"
											className="form-control"
											placeholder="Search"
											aria-label="search"
											aria-describedby="addon-wrapping"
											/>
										<button type="button" className="input-group-text add-member-top">
										<i className="fa fa-plus" />
										</button>
									</div>
								</div>
							</div>
						</nav>
					</div>
					<div className="body d-flex py-lg-3 py-md-2">
						<div className="container-xxl">
							<div className="row align-items-center">
								<div className="border-0 mb-4">
									<div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
										<h3 className="fw-bold mb-0 py-3 pb-2">Tasks Management</h3>
										<div className="col-auto d-flex w-sm-100">
											<button className="btn btn-dark btn-set-task w-sm-100">
											<i className="icofont-plus-circle me-2 fs-6" />
											Create Task
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="row clearfix g-3">
								<div className="col-lg-12 col-md-12 flex-column">
									<div className="row g-3 row-deck">
										<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
											<div className="card">
												<div className="card-header py-3">
													<h6 className="mb-0 fw-bold ">Task Progress</h6>
												</div>
												<div className="card-body mem-list">
													<div className="progress-count mb-4">
														<div className="d-flex justify-content-between align-items-center mb-1">
															<h6 className="mb-0 fw-bold d-flex align-items-center">
																UI/UX Design
															</h6>
															<span className="small text-muted">02/07</span>
														</div>
														<div style={{ height: 10 }} className="progress">
														<div
														role="progressbar"
														className="light-info-bg progress-bar"
														style={{ width: "92%", height: 10 }}
														aria-valuenow={92}
														aria-valuemin={0}
														aria-valuemax={100}
														/>
													</div>
												</div>
												<div className="progress-count mb-4">
													<div className="d-flex justify-content-between align-items-center mb-1">
														<h6 className="mb-0 fw-bold d-flex align-items-center">
															Website Design
														</h6>
														<span className="small text-muted">01/03</span>
													</div>
													<div style={{ height: 10 }} className="progress">
													<div
													role="progressbar"
													className="light-lightgreen progress-bar"
													style={{ width: "60%", height: 10 }}
													aria-valuenow={60}
													aria-valuemin={0}
													aria-valuemax={100}
													/>
												</div>
											</div>
											<div className="progress-count mb-4">
												<div className="d-flex justify-content-between align-items-center mb-1">
													<h6 className="mb-0 fw-bold d-flex align-items-center">
														Quality Assurance
													</h6>
													<span className="small text-muted">02/07</span>
												</div>
												<div style={{ height: 10 }} className="progress">
												<div
												role="progressbar"
												className="light-success-bg progress-bar"
												style={{ width: "40%", height: 10 }}
												aria-valuenow={40}
												aria-valuemin={0}
												aria-valuemax={100}
												/>
											</div>
										</div>
										<div className="progress-count mb-4">
											<div className="d-flex justify-content-between align-items-center mb-1">
												<h6 className="mb-0 fw-bold d-flex align-items-center">
													Development
												</h6>
												<span className="small text-muted">01/05</span>
											</div>
											<div style={{ height: 10 }} className="progress">
											<div
											role="progressbar"
											className="light-orange-bg progress-bar"
											style={{ width: "40%", height: 10 }}
											aria-valuenow={40}
											aria-valuemin={0}
											aria-valuemax={100}
											/>
										</div>
									</div>
									<div className="progress-count mb-4">
										<div className="d-flex justify-content-between align-items-center mb-1">
											<h6 className="mb-0 fw-bold d-flex align-items-center">
												Testing
											</h6>
											<span className="small text-muted">01/08</span>
										</div>
										<div style={{ height: 10 }} className="progress">
										<div
										role="progressbar"
										className="light-lightyellow progress-bar"
										style={{ width: "30%", height: 10 }}
										aria-valuenow={30}
										aria-valuemin={0}
										aria-valuemax={100}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
						<div className="card">
							<div className="card-header py-3">
								<h6 className="mb-0 fw-bold ">Recent Activity</h6>
							</div>
							<div className="card-body mem-list">
								<div className="timeline-item ti-danger border-bottom ms-2">
									<div className="d-flex">
										<span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">
										RH
										</span>
										<div className="flex-fill ms-3">
											<div className="mb-1">
												<strong>Rechard Add New Task</strong>
											</div>
											<span className="d-flex text-muted">20Min ago</span>
										</div>
									</div>
								</div>
								<div className="timeline-item ti-info border-bottom ms-2">
									<div className="d-flex">
										<span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
										SP
										</span>
										<div className="flex-fill ms-3">
											<div className="mb-1">
												<strong>Shipa Review Completed</strong>
											</div>
											<span className="d-flex text-muted">40Min ago</span>
										</div>
									</div>
								</div>
								<div className="timeline-item ti-info border-bottom ms-2">
									<div className="d-flex">
										<span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">
										MR
										</span>
										<div className="flex-fill ms-3">
											<div className="mb-1">
												<strong>Mora Task To Completed</strong>
											</div>
											<span className="d-flex text-muted">1Hr ago</span>
										</div>
									</div>
								</div>
								<div className="timeline-item ti-success  ms-2">
									<div className="d-flex">
										<span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">
										FL
										</span>
										<div className="flex-fill ms-3">
											<div className="mb-1">
												<strong>Fila Add New Task</strong>
											</div>
											<span className="d-flex text-muted">1Day ago</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12">
						<div className="card">
							<div className="card-header py-3">
								<h6 className="mb-0 fw-bold ">Allocated Task Members</h6>
							</div>
							<div className="card-body">
								<div className="flex-grow-1 mem-list">
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQQHCAkDBv/aAAgBAQAAAAC/xlyajAyxq5bOuiN887H2Q9qJF/WS1GMbLJL1ICqYW0nz/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAQGAv/aAAgBAhAAAAADMtUpoP8A/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwYAAQcF/9oACAEDEAAAAIcFtap1tuxH/8QAKxAAAQQBAwIFBAMBAAAAAAAAAQIDBAUGAAcRITEIEBJRYRMUcZEgIlOB/9oACAEBAAE/APLxVZhm0nc24xmylS49HDQwa+GhSkMOtLbBL3sslWvCrmGbxNzKfG66VMfopiHzYQ1qUthplDZIe9kEK/hfXUHGKK5yCyURErYT8x8p7htlBWQPkga3B3ezLcfIXru0sFx2QVohw46vQ1FYJ5CB7n3UdYTuTmOD3sHIae3k+tlwBxl1xSmJDfPKmnEnoQdUN5EyKgp8gg8/bWUJiYyFdwh9AcAPyOfPemvl22024MCAhSpDlNI+khPdwoHrKB8kDW1nh1sb9uPeZqHq+tVwtmEP6Snx7r/zRrPtraWftzY47QU7MZcJozK9thHX7hkc8e6lODlJJ1tVAk0m2mC1U1JTLj0kNLyFd0LLYJQflPnJYEhhxlXQKTxzq5hy6lL5ZhOSnEjltpBSgufgrIA1SxJNm2wp6GuK4ocuNuFKy3+SgkHUdlLDTbSeyEhPm9b1sUrS9LQFJ7gdSD/zUvNKnKUJVQT0vNx3VpcWnofUDxxwevGoea1OKoUq/sEstyHUIbWrqfUTx2HXjUe2q5JbS1LBUrjgduf35HtrcWW5W4/arYUUyZJLDRHcFw9SPkDk6Yqp0Vf1Yz7rK+OPU2opP7Gn6udJX9WTIdec7epxRUf2dbczHLLHqpb6iqTGIYdJ7ktnoT8kcHQ1/8QAIhEAAgEEAQQDAAAAAAAAAAAAAQIRAAMEIRIQFDFBJFFx/9oACAECAQE/AKEbk/nRiwViokxqruRm3cpZkMr6QeBSzxXl5jdZuU+ObKooJdo36rh8vu+4E/UVhZT5BvK6gFGiR7r/xAAoEQABAgUCBAcAAAAAAAAAAAABAhEAAwQFEhMxEBRikRUXISMkcXL/2gAIAQMBAT8AjGm0nym6rbYjHu78Es4y2f1iXIopNCqYnEy1pZSyRl2gs5bZ4stsF1rJVIVlJWtCA3UWjyztePK+LfE/Huv9xerYLVWzaTMqKFrQX6S0f//Z"
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Lucinda Massey</h6>
												<span className="small text-muted">
												Ui/UX Designer
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Ryan Nolan</h6>
												<span className="small text-muted">
												Website Designer
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Oliver Black</h6>
												<span className="small text-muted">
												App Developer
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Adam Walker</h6>
												<span className="small text-muted">
												Quality Checker
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Brian Skinner</h6>
												<span className="small text-muted">
												Quality Checker
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBQADAQAAAAAAAAAAAAAIAAQGBwkBAgMF/9oACAEBAAAAAD+p7KlrqNfazA+K+jmtyFefOB+ONcQbynvapg7vxgPhhhxSxxxwPLY//8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAL/2gAIAQIQAAAAwZnMhX2CZ3//xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYAAv/aAAgBAxAAAADGB9U0zOsVv//EADUQAAEDAgQEAwUHBQAAAAAAAAIBAwQFBgAHESEIEhMxEBRhFSJCUWIzQUNxgZKTkZSiwsP/2gAIAQEAAT8Axnhm5EyhtP2kDASa3PU2KZGc15FcRN3HPobxd2aN/XzNkS7juie+LpkSRReMIraF8LbQqgomi4tnMa+rOlhNtq6qjBdH4QeU2i3U9DbPUCRVVV0VMcPed4ZuUOTFrCMR7npu8tln3AfZ7C+2Kqq+h+PGZPlys2IcB37GJQ4osJt+KZmuLVyCptxWDCr8i434FZmh12OvHJKeAEujYG4o9z+aLh/hzg06zqxUp1znIr0Vh50BgMG9TwNlFVWjdQP6rty44Wa3Oo+dFsRoqr0qkMmFJD3921aVzsHyUPHiNtSRTrlsDOOFC67FvyRjVpAFTMIJEqo+ifJrUsQqPGWjxqUyLDlIWOLYCo6oUZR0RrlXblUdvywFHCNDcpsRthiCqGiC2HJ0wNVUhEU2+/ZccPdmrdma105x+RWPbkVXYlCVWuVJK6eVR0PQGw38XGwdA2nAEgNFEhJNUVF2VFRcV4Cp5SEgMA690VcZZM+kBHvoKkiFyoqp30XTFAF6pJHGpxm2H1aU3mAc6wIvZRQ1EeZP0TDDDMVlqPHaBplsUAG2xQREU2RERNkRPDNDOa2MrWIzdTB6ZVZIK5HgRtOdQ7c5kuwBi7eLDMStI6xbkOFQY5djBPNSf3uogf4YyBnVm77UrMusVd+dUWKuoG5KcJwuQo7RJjiFqVZtK36D7Lqz0GdJnumLsR023ORhkviH1JMWvxQZq0DptVKXErcYdtJzKI6g+jjXJjKHPyhZoPu0d2nnSa200rqRjdR1t4E7k0eg44hHVqWbVzlqqtseUjt/SgMAqp+5Vx5L6ccIzqpTL4iqaooyob38gmn+mOLmYrtbs2lge8aHLkf3BiH/ADx5X0xkYSwc17MfReXWW41/KyYY/8QAJREAAgEDAgUFAAAAAAAAAAAAAQIDAAQSETEFEyFBURAUFjJh/9oACAECAQE/AKN9bBihc6hsdjv6OodWU7EEUYZfcm31GXM037+aRcEVB2AFWPBYjBDNImTuobrt1peFWvyYycnqJC+Pb6+KveDw8iaVY8WVS2o/K//EACIRAAIABgICAwAAAAAAAAAAAAECAAMEERIxBRMQFSJBof/aAAgBAwEBPwCBQ1JUMEFiuWx4VijKw2CDHevQJ9jjhfX5DsXZmOybxU8mwmzJatYKSIPI1HpBL7viUxv97im5F+yWha4JAj//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Dan Short</h6>
												<span className="small text-muted">
												App Developer
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
									<div className="py-2 d-flex align-items-center border-bottom">
										<div className="d-flex ms-2 align-items-center flex-fill">
											<img
												src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
												className="avatar lg rounded-circle img-thumbnail"
												alt="avatar"
												/>
											<div className="d-flex flex-column ps-2">
												<h6 className="fw-bold mb-0">Jack Glover</h6>
												<span className="small text-muted">
												Ui/UX Designer
												</span>
											</div>
										</div>
										<button
											type="button"
											className="btn light-danger-bg text-end"
											data-bs-toggle="modal"
											data-bs-target="#dremovetask"
											>
										Remove
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row taskboard g-3 py-xxl-4">
					<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
						<h6 className="fw-bold py-3 mb-0">In Progress</h6>
						<div className="Droppable">
							<div type="grag" data="MEDI1UM" draggable="true">
								<div className="dd-handle mt-2">
									<div className="task-info d-flex align-items-center justify-content-between">
										<h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
											Quality Assurance
										</h6>
										<div className="task-priority d-flex flex-column align-items-center justify-content-center">
											<div className="avatar-list avatar-list-stacked m-0">
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
													alt=""
													/>
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
													alt=""
													/>
											</div>
											<span className="badge bg-warning text-end mt-2">
											MEDIUM
											</span>
										</div>
									</div>
									<p className="py-2 mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										In id nec scelerisque massa.
									</p>
									<div className="tikit-info row g-3 align-items-center">
										<div className="col-sm">
											<ul className="d-flex list-unstyled align-items-center flex-wrap">
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-flag" />
														<span className="ms-1">28 Mar</span>
													</div>
												</li>
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-ui-text-chat" />
														<span className="ms-1">5</span>
													</div>
												</li>
												<li>
													<div className="d-flex align-items-center">
														<i className="icofont-paper-clip" />
														<span className="ms-1">5</span>
													</div>
												</li>
											</ul>
										</div>
										<div className="col-sm text-end">
											<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
												Box of Crayons
											</div>
										</div>
									</div>
								</div>
							</div>
							<div type="grag" data="LOW2" draggable="true">
								<div className="dd-handle mt-2">
									<div className="task-info d-flex align-items-center justify-content-between">
										<h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
											Website Design
										</h6>
										<div className="task-priority d-flex flex-column align-items-center justify-content-center">
											<div className="avatar-list avatar-list-stacked m-0">
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
													alt=""
													/>
											</div>
											<span className="badge bg-success text-end mt-2">
											LOW
											</span>
										</div>
									</div>
									<p className="py-2 mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										In id nec scelerisque massa.
									</p>
									<div className="tikit-info row g-3 align-items-center">
										<div className="col-sm">
											<ul className="d-flex list-unstyled align-items-center flex-wrap">
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-flag" />
														<span className="ms-1">12 Feb</span>
													</div>
												</li>
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-ui-text-chat" />
														<span className="ms-1">3</span>
													</div>
												</li>
												<li>
													<div className="d-flex align-items-center">
														<i className="icofont-paper-clip" />
														<span className="ms-1">4</span>
													</div>
												</li>
											</ul>
										</div>
										<div className="col-sm text-end">
											<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
												Practice to Perfect
											</div>
										</div>
									</div>
								</div>
							</div>
							<div type="grag" data="MEDI3UM" draggable="true">
								<div className="dd-handle mt-2">
									<div className="task-info d-flex align-items-center justify-content-between">
										<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
											UI/UX Design
										</h6>
										<div className="task-priority d-flex flex-column align-items-center justify-content-center">
											<div className="avatar-list avatar-list-stacked m-0">
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
													alt=""
													/>
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
													alt=""
													/>
											</div>
											<span className="badge bg-warning text-end mt-2">
											MEDIUM
											</span>
										</div>
									</div>
									<p className="py-2 mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										In id nec scelerisque massa.
									</p>
									<div className="tikit-info row g-3 align-items-center">
										<div className="col-sm">
											<ul className="d-flex list-unstyled align-items-center flex-wrap">
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-flag" />
														<span className="ms-1">03 Apr</span>
													</div>
												</li>
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-ui-text-chat" />
														<span className="ms-1">7</span>
													</div>
												</li>
												<li>
													<div className="d-flex align-items-center">
														<i className="icofont-paper-clip" />
														<span className="ms-1">1</span>
													</div>
												</li>
											</ul>
										</div>
										<div className="col-sm text-end">
											<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
												Social Geek Made
											</div>
										</div>
									</div>
								</div>
							</div>
							<div type="grag" data="MEDI4UM" draggable="true">
								<div className="dd-handle mt-2">
									<div className="task-info d-flex align-items-center justify-content-between">
										<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
											UI/UX Design
										</h6>
										<div className="task-priority d-flex flex-column align-items-center justify-content-center">
											<div className="avatar-list avatar-list-stacked m-0">
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBQADAQAAAAAAAAAAAAAIAAQGBwkBAgMF/9oACAEBAAAAAD+p7KlrqNfazA+K+jmtyFefOB+ONcQbynvapg7vxgPhhhxSxxxwPLY//8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAL/2gAIAQIQAAAAwZnMhX2CZ3//xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYAAv/aAAgBAxAAAADGB9U0zOsVv//EADUQAAEDAgQEAwUHBQAAAAAAAAIBAwQFBgAHESEIEhMxEBRhFSJCUWIzQUNxgZKTkZSiwsP/2gAIAQEAAT8Axnhm5EyhtP2kDASa3PU2KZGc15FcRN3HPobxd2aN/XzNkS7juie+LpkSRReMIraF8LbQqgomi4tnMa+rOlhNtq6qjBdH4QeU2i3U9DbPUCRVVV0VMcPed4ZuUOTFrCMR7npu8tln3AfZ7C+2Kqq+h+PGZPlys2IcB37GJQ4osJt+KZmuLVyCptxWDCr8i434FZmh12OvHJKeAEujYG4o9z+aLh/hzg06zqxUp1znIr0Vh50BgMG9TwNlFVWjdQP6rty44Wa3Oo+dFsRoqr0qkMmFJD3921aVzsHyUPHiNtSRTrlsDOOFC67FvyRjVpAFTMIJEqo+ifJrUsQqPGWjxqUyLDlIWOLYCo6oUZR0RrlXblUdvywFHCNDcpsRthiCqGiC2HJ0wNVUhEU2+/ZccPdmrdma105x+RWPbkVXYlCVWuVJK6eVR0PQGw38XGwdA2nAEgNFEhJNUVF2VFRcV4Cp5SEgMA690VcZZM+kBHvoKkiFyoqp30XTFAF6pJHGpxm2H1aU3mAc6wIvZRQ1EeZP0TDDDMVlqPHaBplsUAG2xQREU2RERNkRPDNDOa2MrWIzdTB6ZVZIK5HgRtOdQ7c5kuwBi7eLDMStI6xbkOFQY5djBPNSf3uogf4YyBnVm77UrMusVd+dUWKuoG5KcJwuQo7RJjiFqVZtK36D7Lqz0GdJnumLsR023ORhkviH1JMWvxQZq0DptVKXErcYdtJzKI6g+jjXJjKHPyhZoPu0d2nnSa200rqRjdR1t4E7k0eg44hHVqWbVzlqqtseUjt/SgMAqp+5Vx5L6ccIzqpTL4iqaooyob38gmn+mOLmYrtbs2lge8aHLkf3BiH/ADx5X0xkYSwc17MfReXWW41/KyYY/8QAJREAAgEDAgUFAAAAAAAAAAAAAQIDAAQSETEFEyFBURAUFjJh/9oACAECAQE/AKN9bBihc6hsdjv6OodWU7EEUYZfcm31GXM037+aRcEVB2AFWPBYjBDNImTuobrt1peFWvyYycnqJC+Pb6+KveDw8iaVY8WVS2o/K//EACIRAAIABgICAwAAAAAAAAAAAAECAAMEERIxBRMQFSJBof/aAAgBAwEBPwCBQ1JUMEFiuWx4VijKw2CDHevQJ9jjhfX5DsXZmOybxU8mwmzJatYKSIPI1HpBL7viUxv97im5F+yWha4JAj//2Q=="
													alt=""
													/>
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
													alt=""
													/>
											</div>
											<span className="badge bg-warning text-end mt-2">
											MEDIUM
											</span>
										</div>
									</div>
									<p className="py-2 mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										In id nec scelerisque massa.
									</p>
									<div className="tikit-info row g-3 align-items-center">
										<div className="col-sm">
											<ul className="d-flex list-unstyled align-items-center flex-wrap">
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-flag" />
														<span className="ms-1">03 Apr</span>
													</div>
												</li>
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-ui-text-chat" />
														<span className="ms-1">7</span>
													</div>
												</li>
												<li>
													<div className="d-flex align-items-center">
														<i className="icofont-paper-clip" />
														<span className="ms-1">1</span>
													</div>
												</li>
											</ul>
										</div>
										<div className="col-sm text-end">
											<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
												Social Geek Made
											</div>
										</div>
									</div>
								</div>
							</div>
							<div type="grag" data="High5" draggable="true">
								<div className="dd-handle mt-2">
									<div className="task-info d-flex align-items-center justify-content-between">
										<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
											Quality Ansurance
										</h6>
										<div className="task-priority d-flex flex-column align-items-center justify-content-center">
											<div className="avatar-list avatar-list-stacked m-0">
												<img
													className="avatar rounded-circle small-avt"
													src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
													alt=""
													/>
											</div>
											<span className="badge bg-danger text-end mt-2">
											High
											</span>
										</div>
									</div>
									<p className="py-2 mb-0">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										In id nec scelerisque massa.
									</p>
									<div className="tikit-info row g-3 align-items-center">
										<div className="col-sm">
											<ul className="d-flex list-unstyled align-items-center flex-wrap">
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-flag" />
														<span className="ms-1">25 Mar</span>
													</div>
												</li>
												<li className="me-2">
													<div className="d-flex align-items-center">
														<i className="icofont-ui-text-chat" />
														<span className="ms-1">8</span>
													</div>
												</li>
												<li>
													<div className="d-flex align-items-center">
														<i className="icofont-paper-clip" />
														<span className="ms-1">6</span>
													</div>
												</li>
											</ul>
										</div>
										<div className="col-sm text-end">
											<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
												Box of Crayons
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="p-5" />
							</div>
						</div>
						<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
							<h6 className="fw-bold py-3 mb-0">Needs Review</h6>
							<div className="Droppable">
								<div type="grag" data="MEDIUM1need" draggable="true">
									<div className="dd-handle mt-2">
										<div className="task-info d-flex align-items-center justify-content-between">
											<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
												UI/UX Design
											</h6>
											<div className="task-priority d-flex flex-column align-items-center justify-content-center">
												<div className="avatar-list avatar-list-stacked m-0">
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
														alt=""
														/>
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
														alt=""
														/>
												</div>
												<span className="badge bg-warning text-end mt-2">
												MEDIUM
												</span>
											</div>
										</div>
										<p className="py-2 mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											In id nec scelerisque massa.
										</p>
										<div className="tikit-info row g-3 align-items-center">
											<div className="col-sm">
												<ul className="d-flex list-unstyled align-items-center flex-wrap">
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-flag" />
															<span className="ms-1">03 Apr</span>
														</div>
													</li>
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-ui-text-chat" />
															<span className="ms-1">7</span>
														</div>
													</li>
													<li>
														<div className="d-flex align-items-center">
															<i className="icofont-paper-clip" />
															<span className="ms-1">1</span>
														</div>
													</li>
												</ul>
											</div>
											<div className="col-sm text-end">
												<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
													Social Geek Made
												</div>
											</div>
										</div>
									</div>
								</div>
								<div type="grag" data="MEDIUM2need" draggable="true">
									<div className="dd-handle mt-2">
										<div className="task-info d-flex align-items-center justify-content-between">
											<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
												UI/UX Design
											</h6>
											<div className="task-priority d-flex flex-column align-items-center justify-content-center">
												<div className="avatar-list avatar-list-stacked m-0">
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBQADAQAAAAAAAAAAAAAIAAQGBwkBAgMF/9oACAEBAAAAAD+p7KlrqNfazA+K+jmtyFefOB+ONcQbynvapg7vxgPhhhxSxxxwPLY//8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAL/2gAIAQIQAAAAwZnMhX2CZ3//xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYAAv/aAAgBAxAAAADGB9U0zOsVv//EADUQAAEDAgQEAwUHBQAAAAAAAAIBAwQFBgAHESEIEhMxEBRhFSJCUWIzQUNxgZKTkZSiwsP/2gAIAQEAAT8Axnhm5EyhtP2kDASa3PU2KZGc15FcRN3HPobxd2aN/XzNkS7juie+LpkSRReMIraF8LbQqgomi4tnMa+rOlhNtq6qjBdH4QeU2i3U9DbPUCRVVV0VMcPed4ZuUOTFrCMR7npu8tln3AfZ7C+2Kqq+h+PGZPlys2IcB37GJQ4osJt+KZmuLVyCptxWDCr8i434FZmh12OvHJKeAEujYG4o9z+aLh/hzg06zqxUp1znIr0Vh50BgMG9TwNlFVWjdQP6rty44Wa3Oo+dFsRoqr0qkMmFJD3921aVzsHyUPHiNtSRTrlsDOOFC67FvyRjVpAFTMIJEqo+ifJrUsQqPGWjxqUyLDlIWOLYCo6oUZR0RrlXblUdvywFHCNDcpsRthiCqGiC2HJ0wNVUhEU2+/ZccPdmrdma105x+RWPbkVXYlCVWuVJK6eVR0PQGw38XGwdA2nAEgNFEhJNUVF2VFRcV4Cp5SEgMA690VcZZM+kBHvoKkiFyoqp30XTFAF6pJHGpxm2H1aU3mAc6wIvZRQ1EeZP0TDDDMVlqPHaBplsUAG2xQREU2RERNkRPDNDOa2MrWIzdTB6ZVZIK5HgRtOdQ7c5kuwBi7eLDMStI6xbkOFQY5djBPNSf3uogf4YyBnVm77UrMusVd+dUWKuoG5KcJwuQo7RJjiFqVZtK36D7Lqz0GdJnumLsR023ORhkviH1JMWvxQZq0DptVKXErcYdtJzKI6g+jjXJjKHPyhZoPu0d2nnSa200rqRjdR1t4E7k0eg44hHVqWbVzlqqtseUjt/SgMAqp+5Vx5L6ccIzqpTL4iqaooyob38gmn+mOLmYrtbs2lge8aHLkf3BiH/ADx5X0xkYSwc17MfReXWW41/KyYY/8QAJREAAgEDAgUFAAAAAAAAAAAAAQIDAAQSETEFEyFBURAUFjJh/9oACAECAQE/AKN9bBihc6hsdjv6OodWU7EEUYZfcm31GXM037+aRcEVB2AFWPBYjBDNImTuobrt1peFWvyYycnqJC+Pb6+KveDw8iaVY8WVS2o/K//EACIRAAIABgICAwAAAAAAAAAAAAECAAMEERIxBRMQFSJBof/aAAgBAwEBPwCBQ1JUMEFiuWx4VijKw2CDHevQJ9jjhfX5DsXZmOybxU8mwmzJatYKSIPI1HpBL7viUxv97im5F+yWha4JAj//2Q=="
														alt=""
														/>
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
														alt=""
														/>
												</div>
												<span className="badge bg-warning text-end mt-2">
												MEDIUM
												</span>
											</div>
										</div>
										<p className="py-2 mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											In id nec scelerisque massa.
										</p>
										<div className="tikit-info row g-3 align-items-center">
											<div className="col-sm">
												<ul className="d-flex list-unstyled align-items-center flex-wrap">
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-flag" />
															<span className="ms-1">03 Apr</span>
														</div>
													</li>
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-ui-text-chat" />
															<span className="ms-1">7</span>
														</div>
													</li>
													<li>
														<div className="d-flex align-items-center">
															<i className="icofont-paper-clip" />
															<span className="ms-1">1</span>
														</div>
													</li>
												</ul>
											</div>
											<div className="col-sm text-end">
												<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
													Social Geek Made
												</div>
											</div>
										</div>
									</div>
								</div>
								<div type="grag" data="MEDIUM3need" draggable="true">
									<div className="dd-handle mt-2">
										<div className="task-info d-flex align-items-center justify-content-between">
											<h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
												Quality Assurance
											</h6>
											<div className="task-priority d-flex flex-column align-items-center justify-content-center">
												<div className="avatar-list avatar-list-stacked m-0">
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
														alt=""
														/>
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
														alt=""
														/>
												</div>
												<span className="badge bg-warning text-end mt-2">
												MEDIUM
												</span>
											</div>
										</div>
										<p className="py-2 mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											In id nec scelerisque massa.
										</p>
										<div className="tikit-info row g-3 align-items-center">
											<div className="col-sm">
												<ul className="d-flex list-unstyled align-items-center flex-wrap">
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-flag" />
															<span className="ms-1">28 Mar</span>
														</div>
													</li>
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-ui-text-chat" />
															<span className="ms-1">5</span>
														</div>
													</li>
													<li>
														<div className="d-flex align-items-center">
															<i className="icofont-paper-clip" />
															<span className="ms-1">5</span>
														</div>
													</li>
												</ul>
											</div>
											<div className="col-sm text-end">
												<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
													Box of Crayons
												</div>
											</div>
										</div>
									</div>
								</div>
								<div type="grag" data="High4need" draggable="true">
									<div className="dd-handle mt-2">
										<div className="task-info d-flex align-items-center justify-content-between">
											<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
												Quality Ansurance
											</h6>
											<div className="task-priority d-flex flex-column align-items-center justify-content-center">
												<div className="avatar-list avatar-list-stacked m-0">
													<img
														className="avatar rounded-circle small-avt"
														src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
														alt=""
														/>
												</div>
												<span className="badge bg-danger text-end mt-2">
												High
												</span>
											</div>
										</div>
										<p className="py-2 mb-0">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											In id nec scelerisque massa.
										</p>
										<div className="tikit-info row g-3 align-items-center">
											<div className="col-sm">
												<ul className="d-flex list-unstyled align-items-center flex-wrap">
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-flag" />
															<span className="ms-1">25 Mar</span>
														</div>
													</li>
													<li className="me-2">
														<div className="d-flex align-items-center">
															<i className="icofont-ui-text-chat" />
															<span className="ms-1">8</span>
														</div>
													</li>
													<li>
														<div className="d-flex align-items-center">
															<i className="icofont-paper-clip" />
															<span className="ms-1">6</span>
														</div>
													</li>
												</ul>
											</div>
											<div className="col-sm text-end">
												<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
													Box of Crayons
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="p-5" />
								</div>
							</div>
							<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
								<h6 className="fw-bold py-3 mb-0">Completed</h6>
								<div className="Droppable">
									<div type="grag" data="MEDIUM1Complete" draggable="true">
										<div className="dd-handle mt-2">
											<div className="task-info d-flex align-items-center justify-content-between">
												<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
													UI/UX Design
												</h6>
												<div className="task-priority d-flex flex-column align-items-center justify-content-center">
													<div className="avatar-list avatar-list-stacked m-0">
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAACAgIDAQAAAAAAAAAAAAAFCAAHAgkBAwQG/9oACAEBAAAAAH+FaUu7cz9HKoUAo0dvwakubmHZgtnlZ3OkFGLcCm/BULJL7//EABYBAQEBAAAAAAAAAAAAAAAAAAYABf/aAAgBAhAAAACOoYA+F4e5/8QAGAEBAAMBAAAAAAAAAAAAAAAABgABBwj/2gAIAQMQAAAAi0nep5b0KoL/AP/EADAQAAICAQIEBAQFBQAAAAAAAAECAwQFAAYHESExEBMVURIyQWIIFFKRoSIjQoKS/9oACAEBAAE/ANbt3DU2btXcO6LSF4cXj57jIDyMhiQsEB92PTW89/bq4hZqzm905aa1NJIzRwlj5FdT2jhTsijWzN7bn2Jl6+a2vlp6VmNgWVGPlTKP8JU7Oh9jrYe74d77N25uuCIR+pU0meLnzEUvyyJ/q4I8ePsfncG+IMIJDHEu/wDwwbWH27gX27h6c2HpSwrTg6SQI/MlASx5judLgcJDTnpQYmnFXljZHSOFFBBH15DX4d/Jh4M7FiQdqkrHn7vO7nxz+EqZ/C5TC5EE1b9WWtKB3+CRSp02Okw59JlV1emBXIf5v7Y+HrqGGWzLHXgjaSWVgiIo5lmboANbTwFLam3cPt7HhhXoVY4I/iPNuSjufGWxXgQvJPGg92YADXGIYHK26kVd4J3nrTRXTC/VkbkqhiuuEQwGKyUkdt4IPy9NI6Znf5Av9JClz35arWqs6eZFYjcHsysCPDjburL4HGYzHYey9ebINL5k6dHWOIDmFP0JLana9bfzLViWZ/1SOzn9zqlkp68awzxl1UclYHqBq9kp7MbQwoURujEnqR7artdqP5lWxLC/6o3KH9xrgduvL57GZHHZiy9mfHvF5c0nV2jlB5Bj9SCvfXHOI2bW3eY+VLX8lNen/br0/wC3Xp/269P+3XAyI1rG4wOnxJV/gvr/xAAmEQEAAQIFAwQDAAAAAAAAAAABAgARAwQFEzESFCEGFTJBcYGR/9oACAECAQE/AFtUvUWCTYdvK5K3JQkgSkER4SpZKHuLld8s4vy+rc/2ohGIHAWrWdT289i4LLxAiB+q7zA69zpL3rRtS3c9hYJLxMkJ+Cv/xAAmEQACAAYABQUBAAAAAAAAAAABAgADBBESFAUGBxMhFTEzUWKR/9oACAEDAQE/AACSAIXlOeyLM2kAKZWxMMCpKn3BhMslKAlgfFoTij+kis1GyEr4/N8gcf5D5F2LghiSSCI6eCipOW6Sbryu/NaYzviMjZyB5jX4Vs7Wsvcvl+b/AHaOoYoqvlyrnGnl9+U8tpbhRkLuAY//2Q=="
															alt=""
															/>
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
															alt=""
															/>
													</div>
													<span className="badge bg-warning text-end mt-2">
													MEDIUM
													</span>
												</div>
											</div>
											<p className="py-2 mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In id nec scelerisque massa.
											</p>
											<div className="tikit-info row g-3 align-items-center">
												<div className="col-sm">
													<ul className="d-flex list-unstyled align-items-center flex-wrap">
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-flag" />
																<span className="ms-1">03 Apr</span>
															</div>
														</li>
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-ui-text-chat" />
																<span className="ms-1">7</span>
															</div>
														</li>
														<li>
															<div className="d-flex align-items-center">
																<i className="icofont-paper-clip" />
																<span className="ms-1">1</span>
															</div>
														</li>
													</ul>
												</div>
												<div className="col-sm text-end">
													<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
														Social Geek Made
													</div>
												</div>
											</div>
										</div>
									</div>
									<div type="grag" data="MEDIUM2Complete" draggable="true">
										<div className="dd-handle mt-2">
											<div className="task-info d-flex align-items-center justify-content-between">
												<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
													UI/UX Design
												</h6>
												<div className="task-priority d-flex flex-column align-items-center justify-content-center">
													<div className="avatar-list avatar-list-stacked m-0">
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBQADAQAAAAAAAAAAAAAIAAQGBwkBAgMF/9oACAEBAAAAAD+p7KlrqNfazA+K+jmtyFefOB+ONcQbynvapg7vxgPhhhxSxxxwPLY//8QAGAEAAwEBAAAAAAAAAAAAAAAABAUGAAL/2gAIAQIQAAAAwZnMhX2CZ3//xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYAAv/aAAgBAxAAAADGB9U0zOsVv//EADUQAAEDAgQEAwUHBQAAAAAAAAIBAwQFBgAHESEIEhMxEBRhFSJCUWIzQUNxgZKTkZSiwsP/2gAIAQEAAT8Axnhm5EyhtP2kDASa3PU2KZGc15FcRN3HPobxd2aN/XzNkS7juie+LpkSRReMIraF8LbQqgomi4tnMa+rOlhNtq6qjBdH4QeU2i3U9DbPUCRVVV0VMcPed4ZuUOTFrCMR7npu8tln3AfZ7C+2Kqq+h+PGZPlys2IcB37GJQ4osJt+KZmuLVyCptxWDCr8i434FZmh12OvHJKeAEujYG4o9z+aLh/hzg06zqxUp1znIr0Vh50BgMG9TwNlFVWjdQP6rty44Wa3Oo+dFsRoqr0qkMmFJD3921aVzsHyUPHiNtSRTrlsDOOFC67FvyRjVpAFTMIJEqo+ifJrUsQqPGWjxqUyLDlIWOLYCo6oUZR0RrlXblUdvywFHCNDcpsRthiCqGiC2HJ0wNVUhEU2+/ZccPdmrdma105x+RWPbkVXYlCVWuVJK6eVR0PQGw38XGwdA2nAEgNFEhJNUVF2VFRcV4Cp5SEgMA690VcZZM+kBHvoKkiFyoqp30XTFAF6pJHGpxm2H1aU3mAc6wIvZRQ1EeZP0TDDDMVlqPHaBplsUAG2xQREU2RERNkRPDNDOa2MrWIzdTB6ZVZIK5HgRtOdQ7c5kuwBi7eLDMStI6xbkOFQY5djBPNSf3uogf4YyBnVm77UrMusVd+dUWKuoG5KcJwuQo7RJjiFqVZtK36D7Lqz0GdJnumLsR023ORhkviH1JMWvxQZq0DptVKXErcYdtJzKI6g+jjXJjKHPyhZoPu0d2nnSa200rqRjdR1t4E7k0eg44hHVqWbVzlqqtseUjt/SgMAqp+5Vx5L6ccIzqpTL4iqaooyob38gmn+mOLmYrtbs2lge8aHLkf3BiH/ADx5X0xkYSwc17MfReXWW41/KyYY/8QAJREAAgEDAgUFAAAAAAAAAAAAAQIDAAQSETEFEyFBURAUFjJh/9oACAECAQE/AKN9bBihc6hsdjv6OodWU7EEUYZfcm31GXM037+aRcEVB2AFWPBYjBDNImTuobrt1peFWvyYycnqJC+Pb6+KveDw8iaVY8WVS2o/K//EACIRAAIABgICAwAAAAAAAAAAAAECAAMEERIxBRMQFSJBof/aAAgBAwEBPwCBQ1JUMEFiuWx4VijKw2CDHevQJ9jjhfX5DsXZmOybxU8mwmzJatYKSIPI1HpBL7viUxv97im5F+yWha4JAj//2Q=="
															alt=""
															/>
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
															alt=""
															/>
													</div>
													<span className="badge bg-warning text-end mt-2">
													MEDIUM
													</span>
												</div>
											</div>
											<p className="py-2 mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In id nec scelerisque massa.
											</p>
											<div className="tikit-info row g-3 align-items-center">
												<div className="col-sm">
													<ul className="d-flex list-unstyled align-items-center flex-wrap">
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-flag" />
																<span className="ms-1">03 Apr</span>
															</div>
														</li>
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-ui-text-chat" />
																<span className="ms-1">7</span>
															</div>
														</li>
														<li>
															<div className="d-flex align-items-center">
																<i className="icofont-paper-clip" />
																<span className="ms-1">1</span>
															</div>
														</li>
													</ul>
												</div>
												<div className="col-sm text-end">
													<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
														Social Geek Made
													</div>
												</div>
											</div>
										</div>
									</div>
									<div type="grag" data="MEDIUM3Complete" draggable="true">
										<div className="dd-handle mt-2">
											<div className="task-info d-flex align-items-center justify-content-between">
												<h6 className="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
													Quality Assurance
												</h6>
												<div className="task-priority d-flex flex-column align-items-center justify-content-center">
													<div className="avatar-list avatar-list-stacked m-0">
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
															alt=""
															/>
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
															alt=""
															/>
													</div>
													<span className="badge bg-warning text-end mt-2">
													MEDIUM
													</span>
												</div>
											</div>
											<p className="py-2 mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In id nec scelerisque massa.
											</p>
											<div className="tikit-info row g-3 align-items-center">
												<div className="col-sm">
													<ul className="d-flex list-unstyled align-items-center flex-wrap">
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-flag" />
																<span className="ms-1">28 Mar</span>
															</div>
														</li>
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-ui-text-chat" />
																<span className="ms-1">5</span>
															</div>
														</li>
														<li>
															<div className="d-flex align-items-center">
																<i className="icofont-paper-clip" />
																<span className="ms-1">5</span>
															</div>
														</li>
													</ul>
												</div>
												<div className="col-sm text-end">
													<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
														Box of Crayons
													</div>
												</div>
											</div>
										</div>
									</div>
									<div type="grag" data="High4Complete" draggable="true">
										<div className="dd-handle mt-2">
											<div className="task-info d-flex align-items-center justify-content-between">
												<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
													Quality Ansurance
												</h6>
												<div className="task-priority d-flex flex-column align-items-center justify-content-center">
													<div className="avatar-list avatar-list-stacked m-0">
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
															alt=""
															/>
													</div>
													<span className="badge bg-danger text-end mt-2">
													High
													</span>
												</div>
											</div>
											<p className="py-2 mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In id nec scelerisque massa.
											</p>
											<div className="tikit-info row g-3 align-items-center">
												<div className="col-sm">
													<ul className="d-flex list-unstyled align-items-center flex-wrap">
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-flag" />
																<span className="ms-1">25 Mar</span>
															</div>
														</li>
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-ui-text-chat" />
																<span className="ms-1">8</span>
															</div>
														</li>
														<li>
															<div className="d-flex align-items-center">
																<i className="icofont-paper-clip" />
																<span className="ms-1">6</span>
															</div>
														</li>
													</ul>
												</div>
												<div className="col-sm text-end">
													<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
														Box of Crayons
													</div>
												</div>
											</div>
										</div>
									</div>
									<div type="grag" data="High5Complete" draggable="true">
										<div className="dd-handle mt-2">
											<div className="task-info d-flex align-items-center justify-content-between">
												<h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
													Quality Ansurance
												</h6>
												<div className="task-priority d-flex flex-column align-items-center justify-content-center">
													<div className="avatar-list avatar-list-stacked m-0">
														<img
															className="avatar rounded-circle small-avt"
															src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAdAAABBAMBAQAAAAAAAAAAAAAHAAMFCAECBAkG/9oACAEBAAAAAL/cwkdLm64Buik6tRxkiOKFhcT8tUjz1v4zQn0K+MpkbkEbl//EABgBAAMBAQAAAAAAAAAAAAAAAAMEBgcF/9oACAECEAAAAAZnpxJSr6qzP//EABgBAQADAQAAAAAAAAAAAAAAAAYBAgQD/9oACAEDEAAAALthEJDfTbh//8QALhAAAQMEAQEFBwUAAAAAAAAAAQIDBAAFBhESCAcQITFhFEFicZKhojJRVGNy/9oACAEBAAE/AKuMkw4UmSBsttqUB6ipFwmvuKU+txavsN1DuVwhuB1jmOJ2Qf0moslMmNHfSNB1tKx8lDffeAg22WHDpCmygH1V4CuFcKtCmVwIqm98UthA2PLj4d86OmVFdYJ1yFOMKaWptadKSdEUywp11tpI2VKAqJHTGjtMpO0oGt98/MMRsfI3rJrVBUnzEmY00R9RqZMg3mDDv9klsTLfIQeMhk8kLAOtg+8bqPcLfYLbLyC/TGINva4JVIfUEIRzXwBKj5bUQKtmW4ndwkWfJrVM5fxpjTpPy4KPd1a5ne7DaMaxu0TXYjd3Mp2YtlXBa2mOADXyVzopOjrzrsBzd5nsKyRKWw/Kxx+chDPwOpD6CfTktVdSWaOSOxzD44a9nk5DJiurY/qZbLyvz4UlJ0N+eq6R80vd8teS41d5rspq0+yuwlvK5rQ2/wA0lr/KeFdY6uV8wpv9ocxX1LRRRsEbrp2v7tpb7XMXfX4TsXflterkXafuHa6kb85erl2ZY6w7tu34vGlOfA7M0Vfg2muFdHehe81bV74cM/Stdf/EACURAAICAQMCBwEAAAAAAAAAAAECAxEABBIUBRMkMUFCUXGB8f/aAAgBAgEBPwDUlhp5yjUwjaj8GsTp7rPyOXL3d27d6395CS0MTMbJRST+YyB1ZCLBFHB05+fxabbd3XtxVCKFAoAUM00dxI1eedrxW+v7mpiqFmrP/8QAIhEAAgICAQMFAAAAAAAAAAAAAQIAEQMTEhQhMgQVIyRC/9oACAEDAQE/AMQDZcYIsFgCIceA49epeNVUccXdaqmIisVZWU9wbEPrvp9R25eNX+oSWJYnuTZipYucV9qGTR8nWldlnx13VRkoEz//2Q=="
															alt=""
															/>
													</div>
													<span className="badge bg-danger text-end mt-2">
													High
													</span>
												</div>
											</div>
											<p className="py-2 mb-0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In id nec scelerisque massa.
											</p>
											<div className="tikit-info row g-3 align-items-center">
												<div className="col-sm">
													<ul className="d-flex list-unstyled align-items-center flex-wrap">
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-flag" />
																<span className="ms-1">25 Mar</span>
															</div>
														</li>
														<li className="me-2">
															<div className="d-flex align-items-center">
																<i className="icofont-ui-text-chat" />
																<span className="ms-1">8</span>
															</div>
														</li>
														<li>
															<div className="d-flex align-items-center">
																<i className="icofont-paper-clip" />
																<span className="ms-1">6</span>
															</div>
														</li>
													</ul>
												</div>
												<div className="col-sm text-end">
													<div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
														Box of Crayons
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="p-5" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
			</div>

		</>
	);
}

export default Projects;