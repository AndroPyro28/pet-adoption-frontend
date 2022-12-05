import { NavLink } from "react-router-dom";
import { Content, IndexPageContainer, Banner, About, Main, Donation, Gcash, Bank, Detail, Paypal, FAQSLIST, FAQS } from "./components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllBlogQuery as PublicQuery } from "../../../services/publicBlog";
import { useGetAllBlogQuery as PrivateQuery } from "../../../services/privateBlog";
import ContentBlog from "../../../components/blog/ContentBlog";
import { useEffect, useState } from "react";
import Modal from "../gallery/Modal";
import { getRefetchFunction } from "../../../redux/refetchSlice";
import FAQ from "./FAQ";
const Index = (): JSX.Element => {
  const { user }: any = useSelector(state => state);
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  let path = pathname.replaceAll('user', '').replaceAll('/', '')
  const { data: dataPublic, refetch: refetchPublic } = PublicQuery(path === '' ? "HOME" : path.toUpperCase())
  const { data: dataPrivate, refetch: refetchPrivate } = PrivateQuery(path === '' ? "HOME" : path.toUpperCase())


  useEffect(() => {
    if (user.role === 'ADMIN') {
      refetchPrivate()
      dispatch(getRefetchFunction(refetchPrivate))
    } else {
      refetchPublic()
    }

  }, [])

  const [displayPicture, setDisplayPicture] = useState("");

  const fetchBlogs = user.role === 'ADMIN' ? dataPrivate?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture} />
  }) : dataPublic?.map((blog) => {
    return <ContentBlog data={blog} setDisplayPicture={setDisplayPicture} displayPicture={displayPicture} />
  })

  const [faqsList] = useState([
    {
      question: 'Adopt a pet',
      answer: 'Create an account and select an animal/s you want to adopt in the adoption tab. The organization will notify you on the success of the procedure.'
    },
    {
      question: 'How to adopt?',
      answer: 'Click apply in the adoption tab and wait for the confirmation of the application.'
    },
    {
      question: 'Operational schedule?',
      answer: 'The operational schedule of the the animal shelter is from 9:00 am to 5:00 pm Monday to Saturday. Schedule may change without prior notice in case of emergency.'
    },
    {
      question: 'Location?',
      answer: 'The animal shelter is located at Mabalacat, Pampanga.'
    }
  ])

  return (
    <IndexPageContainer>
      {
        displayPicture && <Modal displayPicture={displayPicture} setDisplayPicture={setDisplayPicture} />
      }
      <Banner>
        <Content>
          <h1>
            Redefining Shelter:
            <br />
            Website for Noahs
            <br />
            Ark Dog And Cat Shelter
          </h1>
          <h2>
            One Life <br /> At A Time
          </h2>

          {
            !pathname.includes('/user') && user.role !== "ADMIN" && <div>
              <NavLink to={'login'}>
                <button className="btn" type="button">
                  <span></span> LOG IN
                </button>
              </NavLink>
              <NavLink to={'signup'}>
                <button className="btn" type="button">
                  <span></span>CREATE ACOUNT
                </button>
              </NavLink>
            </div>
          }

        </Content>
      </Banner>

      {fetchBlogs}
      {/* <About>
        <Main>
          <img src="/images/img/background2.jpg" />
          <div className="about-text">
            <h1> About Our Animal Sheter</h1>
            <br />
            <p>
              An animal shelter is a staffed facility where homeless animals and
              animals seized by authorities in cruelty cases find safety and
              comfort, are cared for, and are made available for adoption.
              Temporarily housing animals in shelters keeps them from being
              loose on the streets, where they struggle to find clean food and
              water, can be hit by cars, can be attacked by other animals or
              cruel humans, or face otherpotential dangers.
            </p>
            <br />
          </div>
        </Main>
      </About> */}
      {/* <Donation>
        <Gcash>
          <ol>
            <h3>To donate via Gcash:</h3>
            <li>Log in to your GCash account, then tap on QR on your navigation bar.</li>
            <li>Align your phone's camera to our QR code to scan it.</li>
            <li>Input the total amount and tap Next.</li>
            <li>Review all details then tap on Pay.</li>
          </ol>
          <img src="/images/content/gcash.png" />
        </Gcash>

        <Bank>
          <h3>Bank details:</h3>
          <Detail><label>BDO:</label> <span> 12345678910 </span> Sample name</Detail>
          <Detail><label>LANDBANK:</label> <span> 1512678910 </span> Sample name</Detail>
          <Detail><label>SECRET-BANK:</label> <span> 999999999 </span> Sample name</Detail>
        </Bank>

        <Paypal>
          <h3>Paypal</h3>
          <p>Paypal is the easiest and safest way to donate online using your credit card.</p>
          <p>You do not need to be a Paypal member.</p>

          <h4>Paypal/NoahsArkSampleOnly</h4>
        </Paypal>

      </Donation> */}

      <FAQS>
        <h1>Frequently Asked Question(s)</h1>

        <FAQSLIST>
          {
            faqsList?.map((faqs, index) => <FAQ data={faqs} key={index} />)
          }

        </FAQSLIST>
      </FAQS>
    </IndexPageContainer>
  );
};

export default Index;
