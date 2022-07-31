import './Sphere.css';
import TagSphere from 'react-tag-sphere';
const Sphere = () => {
  const texts = [
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/java.svg'}
      alt="Java"
    />,
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/javascript.svg'}
      alt="JavaScript"
    />,
    'SQL',
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/html-5.svg'}
      alt="HTML5"
    />,

    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/css-3.svg'}
      alt="CSS3"
    />,
    <img
      width={100}
      src={'https://cdn.svgporn.com/logos/mongodb.svg'}
      alt="MongoDB"
    />,

    <img
      width={100}
      src={'https://cdn.svgporn.com/logos/express.svg'}
      alt={'Express'}
    />,
    <img
      width={50}
      src={'https://cdn.svgporn.com/logos/react.svg'}
      alt={'React'}
    />,
    <img
      width={100}
      src={'https://cdn.svgporn.com/logos/nodejs.svg'}
      alt={'Nodejs'}
    />,

    <img
      width={70}
      src={'https://cdn.svgporn.com/logos/git.svg'}
      alt={'GIT'}
    />,

    <img
      width={150}
      src={'https://cdn.svgporn.com/logos/wordpress.svg'}
      alt={'WordPress'}
    />,
  ];
  return (
    <TagSphere
      texts={texts}
      maxSpeed={7}
      initialSpeed={32}
      initialDirection={135}
      keepRollingAfterMouseOut={true}
      useContainerInlineStyles={true}
      fullWidth={false}
      fullHeight={false}
      radius={texts.length * 20}
      className="tag-sphere"
    />
  );
};

export default Sphere;
