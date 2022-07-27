import React from 'react'
import { Box, Grid, Typography, Button, makeStyles, CardMedia } from '@material-ui/core'
import NavBar from './NavBar';

const useStyles = makeStyles((theme) => (
  {
    wrapper: {
      border: " 1px solid #f5f5f5f",
      cursor: "pointer",
      transition: ".3s",
      backgroundColor: "#fff",

      borderRadius: "5px",
      "&:hover": {
        boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
        borderLeft: "6px solid #f5f5f5",
      }
    },
    cardMedia: {
      paddingTop: "56.25%",
      // margin: "15px",
      backfaceVisibility: "red",
    }
  }))

export default function CardContent() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavBar />
      <Box p={1} className={classes.wrapper}>
        <Grid container alignItems='center'>
          <Grid item xs>
            <CardMedia
              className={classes.cardMedia}
              image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEBUQExMVFhUXEBUVEhgXGRUXGBcVFRYWFhUVFhUYHSghGBolGxYVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGzYmICYtMC0tLzU2Ljc2LS0vLS0rLS01Ni0rLTYrLy0tMi0tLS0tLS0tLS0tLS0tLS0rKy0rLv/AABEIALwBDAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABHEAABAwEEBQgHBQYDCQAAAAABAAIDEQQFEiEGMUFRgQcTIjJhcZGhQlJykrHB0RRigqLwFSNDstLhM0TCFhckU3Ojs8Py/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAIFBv/EAC4RAQACAgEDAgQDCQAAAAAAAAABAgMRBBIhQTFRBXGR8BMyQhQVYYGhscHh8f/aAAwDAQACEQMRAD8A7iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiolla0YnEADWSQB4laG8NNrvh69qjJ3MPOH8laIJCi57aeVizZiCKSUjacMbfHM+Sj158qdqPUbBCN5q8+84geSDsaxbdeUMIxTSxxje97WD8xXzxeendpk69slIOyMlg/7QA8VG5b0aSXBhJ2udSp7zmSuui3safQ9v5SLujyExkO6Jjnjg+mHzUbvDlhaK8xZXHcZXtZ+Vgd8VxOa83dg4ElW7BaXySgFxpmTs+HaQp6JTp9PaE6TG3ROeWBpbhrStOlXIV3UUkUR5L7FzdgDqZvkc7gKM/wBJPFS5cIEREBERAREQEREBERAREQEREBERAREQF4SvVy3lU0hwWqKyAYv3eJwLqNDnmgxNocRoBTvO9TETPaExG506Ba7+s0Zo+eMEeiHBzvcbU+S09r07s7eo2WTubgHHGQfJcg0ovR8BEcT2k0FaNFAaZgAk6lg3Myab95NI8tGyuEE7sLaArZxuDkz947Qr5F4wfmdOvPlJe0HCyGIb5Hl3l0VBb55SbW8kfbmsbXIQRkmnt0FD+JRq+3hziBQNG7IeSjr46nLVvV2XgVxzrq25x3m0bmNN1btIhIavNomdnnLJT5uKwH3ufQjjb3gvPi4/Ja9zFXG3eqowVhYyTbJn5GR3cOj5Nosyz3SaY35d+sq7dbg3MNq7Yt1+znPGOU4RuWuJxYa7t6priyZJ1X090XtDRXJYr3FbS9XsBws1LUlpKzT1ZJ3pbaIp2WyANZW40Yhxy6toHDW7yotW2FTnkzuznLVE2mReCfHP8gcq82OaU3Krq2+hbksnNWaKL1Ymg99M/OqzkRYwREQEREBERAREQEREBERAREQEREBERAXzLpxextF5zyt1CTCw/dZ0Wr6H0ltphsksjesIy1ntvoyMe85q+fY7jPOlgGJ+KhpmK7T3VW7g4+u8ub26Y2wbBdj5niprtcTs/usu+7ybG3mIzSgo4inEDt3lba+bU2yQ8xGKykdN1Orv4/BQv7E52Z27/iV7sT0Y+mrBG82Trv6R6KI24zTZ+ta8mp1Wjj9FurvszQ0MYMTzrOwd28q5bbp5tues7NvErNkpWsRG+8vRxRa0TOuyMmMBUtaFtHWJx1AAfrarTrKBrcFm6a+J27mtvML122vm+lTPYqbdej36zkrUdnc84WAnuBK2lk0ZdrlLWj7xqfdHzXVOLN53raMnKjFGpnSPgVOQJPYr8V3yONKcBmVM7PYLOwZB0h8B4D6q5LJJSjGBg7gPgt9OHPpM6edfmx+mN/PsjUOj7gKuo0duvwXR+Re76ymWmTWkg8A1v8z/AAUGt4yNXVO7vXY+Sewc3ZC+nWLR4DEfN58F5nxbHXHatI+bRx8s5ImZThEReQvEREBERAREQEREBERAREQEREBERAREQRDlCmc4QWdhzdKZXdjIaEfncxQ50BhBcOu4GmVaDepw+AT2ueR3ViEdnZ7VOdl83sH4VgXxdILTgcxtdZc8bF6HDyxSNKslert4c0+yteXySkl3oDZXefotVbrlfG0PfUB2YBIqe2mwKSXoI43YatNMy6hdU9i0l42t0xpsGro0+JyXr6tk1r0McUx7m0tZZrfzZ6OXbrK9Mj5XZMe87hVZtk0de7pHFT7rST45N81vbLdzIxRzX9zpGj8rPqu/2eJncqsnxKKV6a90aNyzuykIjHqg4n+62vmQs6y3HGzPmcX3pn4RwY3XxKk0EAOTInD2RTzNPis+G6mjMwtrvkcPhmuojFj8PMy83Lkn1RUSN6uPL1IGUHiFcjjIzZZnn70hw/FS58eVA9oG5gWG+yA+jI7gR9FZGeJ+/wDjN1TCOyyygZvhiH3QXHyBCwJGMcc5J5TuY2g+JUvFkpmIQO0hnxNVTNzvrBv4/pRdxl9k/iShNosYxxxiGRhe/IvrUgZGgoPWC+gdF7NzdkibTW3EfxnF8CFxiyWd0t4tYXYi1gGRrm/Vn3uau9RsAAaNQAA7gvmfiGT8TPafbs93ixrFG1SIixNAiIgIiICIiAiIgIiICIiAiIgIiICtzyhjXPcaBrS4ncAKkq4tFpnJ/wALzINDPLHZx7MjgJDwjEh4IPNHYHfY2PcOnLinf2OmcZKHuDgOCw7ysdRQgkk7iVvY7WNTaash2DYFZN7NBIcC2m8LRi66z2hXaY90HttzwHKSv4WknxqQqbJdFkZ1cfFo+Iop/HeLHaqO7i0+RofJVukj2t8W0+IWqObeI1MT9f8ASi+Cb+Y+/wCaIVsoH/wT5klaa3WyzA+l40/louiOhgdrbGeDSsae4rG/rQx+60KcXMpWd2ifqpvw5mNdnOmXxZxsr34j8VU/SmFvokdzWj/SpnPoPYXfw6dxI+awJ+TeyO6peO5x+q1xzOLb823NeHNUSk00h3SeNPgFjyaXQH0HcS8qR2jkuZ6MzuND8VgScnEjeq9p7x9Fopn4c+k/3RPHjzDRP0rs/wDy28cZVkaXwD+C3zHyWxtOgk42MPAj5rS3topJFE+VwaAxpJ+XnRXdeHUzFv6uYxYt6mEg5Mouftz7QRQGQvA9UNBoPHm12Rc75IbBhhdIdeEDi41Pk1niuiL5S07mZerEajUCIihIiIgIiICIiAiIgIiICIiAiIgIiIChOmFvH26zxbIo3zO9qT90z8vOqbLit8XoJbxtMusCXmm+xEMH8weeK08XH15Pl3TWvVPT7pX+0cJqTlsof1QrPZfET2gSZ7A7aOwqHXZeDcZidQg1La7Qditz2w2WXfC85Vzwn1T2frv9a3HrPz8K4xTPafkltrszaYmmo3hY8VolYMTHup35LXWe8izpxdJh6zN3s/rPyWXDamyAyQvwO2g9Qn77fRPaP7KOmdd+8KLYpx21bszf24+nTiDxvoD5gKuK8InCrecZ7LiQO8ZhaWS8g1+GZphk9YdV3aDqPHxVU7K9JzBIPXi6Mg7wDnwNFH4NfbX39Hc17d/v/MN5HaXehKHe0CD7zK+avi2Tbq+yWyeWtRMAuzila+noyDC8fibQ+IVmS/ZITSUPZ2uAkZ74zHkubcb2jbqmGLelkudfDgaGld1XMPhX5Lx19uGsvb7rh4GhWhg0la8ZgOG9pDh7r8vNVfaoXdUtadwLoT9HcKriMNfNS+C9W6fe79kjPxAtKivKBeUjrM2E4Tzs7G9Egkhh5w+bW+KyZ2Ydrh7TQfzMofFRm8nGS2wx5ERsL8qkYnHIGuepnmo5GOtMUzCutLdUbdZ0HsnN2Nv3iTwFGDyapAsa7rPzcMcfqsaOIGayV5DSIiICIiAiIgIiht56aSxPcz7ICWkjOXCcjroY9XFBMkXOJeUmYf5MDvkJ8wxWDylTnVDEO8uP0QdORcv/AN4lpPowDg7+tenTu1HbEO5p+bkHT0XMDpnaiMntB2HACPCnzWLJpbeOySE/hcD3gYacKoOsouNy6VXnTXnqOQp7QDHOPlwWHNpbeA60jxr2YSe7G/WO5B3BFwh2k1sP+YkpQ11niCWgcKqw6+7Q7IzvqRtc0atrQ3EadmtB2+/rfzFlmn2sic4drgDhHjRfPENqLCaZ1rUmprU1J166kraS3hNhONziDlm1tDv/AMTWN4y1LU2iME1DG6vQMgHCjgDt+i7pktT8s6P4rn7QNQ7UQcqLYzaQY2Fj4wWkZ9KnEZZFR4kfeHZiaSfymndVUOk7ad4B8w4Z8FdHLzR+pPVO5luLtvN0W0kbB2bjnmFshe4c7HE2QPAq4BtQRkCThJI1gVptzUVEta0Lcq1JxAZCppQFXbJeT4jjjdhJ6NQY650NKPzzpuz1baLuvOzRO9pvab06Ld4TL/aKJzebmBpuLXZdrcsu7UsEXiIjis9oaW16jiR4VUZttsfI4yPBq6lSGihoKV6GSxnTAa8u+o+Ktr8SyR4jSmmPp9JTuO/IZ/8AFGF+xwIB4OHzVclslYOg8TM2g0xU+a59zgO0FUkruPicx617O9R6+fdL5hA84mh0Mm3D0c+0alYdapmZVbK33XfQqLGZ28+JT7Y/13eKs/eVPNVtcsxCXWa/sOTXPj7NnumrVs9CGG03gZHZ1kY3VrayhrTuY/xXPjbHnWa94C63yN2HPGR1Y3O4vIAH/kWXl8mmWsRWEWv1eHWERFhcCIiAiIgIiIKTVa69LIJG4XsjePvNqR3HWFs14WoOeXnowNcdWdlS4fmqfNRq2XHO01LA/tBoadoK7I6EFY8thadiDh88RZ1mOb3g08tapjtDO3h9KhdhtNysOxaK36HxOrVg+B8Qgg8E8Z/iU9ofP+62lnga4VDg72aH5lV27Qf1HOb+YeC0Nq0WtDDVpa7uq1364oJI2yhXmWcdqhTrXbYdfOAfeGMeJBWU/TNzdTRJ0c8TeZIdtAIc8OHbQdylKUvu6J2bo2k7yAT4qxNcMDvRcO57/gSR5KL2blELsvswB/6pP/rCrfpxLsjiHfjPwcEG1l0UAqY5CCfWa3+aMNd+tS1d46OTZGjHUNTR5c401GsoVh2mdoO2Idzf6nFWJNJrQ7XKODY/6VCGJa7BK05xvApmK85mD2BrR35rXmzOxUwuG52GpApqIZq8VsnXo92uRx8fkjZC713cHn5INRPYpNXWoNZDvDpA0+CpksshG7MHfSmoUBaPJSCOzPOqKQ/gd8wsqOwTHVE/8o+JQRUXc+ocG57chSm6oqrzLtnrli8HVrsoSVLorrnP8I8Sz6quyaMzNLy1lC95e6rnHpHdkaDIZIIm65JgCXMNBrc4NIB7aggGq8kuF7GY3iNrdVTjGfZzf91O4dGLSQA6poAOu8eQAAV7/YuV7MEjWOFBUPGIGmokEoOd3fdDJXOa2UHDQvpzgNHVpQvb2HYVkW3R5sUb5nzOwMALg1gc6hcGj0hU1cF0Sx6AvZXA2JlaVwsw1pWlcJz1nxWyh0Ik2yU7m/UoOL39YhBBBPGXPEtcngAjotc0UG0gnadS73yVWTDY+cOtxa2u/mxQn3y9WDoHC8NEzOdDXh4xFzekBSvRIGolTOxWcMY1jAGta0BrQAAANgAQZKLxeoCIiAiIgIiICIiAiIg8IVLowq0QYz7MCsSa7wdi2iII5aLmB2LR2/RGN+uNp4Z+KnpYqHRIOVT8nERPVcO5xCri5OovUPFxXT+YXogQc8h0BhH8NvGp+JWdFoXEPQZ7oU3EIXvNhBFItFoxsHAALKZo9GNhUjDF7hQaJlxx+qr7LoYPRHgttReoNey7mjYPBXW2Nu5ZaIMcWYblWIArqIKBGvcCqRB5hXqIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD/9k="
              title="title" />
          </Grid>
          <Grid item container xs>
            <Typography variant="h5">
              2577 min ago | Fulltime | Remote Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati blanditiis, aliquid quibusdam dolor tempore tenetur corporis, velit in facilis veniam? Iste, asperiores ipsa! Tempora suscipit unde sint earum officia.
            </Typography>
          </Grid>
          <Grid item container direction='column' color="white" alignItems='flex-end' xs>
            <Grid item>
              <Typography variant="h5">
                2577 min ago | Fulltime | Remote
              </Typography>
            </Grid>
            <Grid item>
              <Box mt={3}>
                <Button variant="outlined">
                  Check
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}