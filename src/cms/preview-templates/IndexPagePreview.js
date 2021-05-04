import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(["data"]).toJS();

    if (data) {
        return (
            <IndexPageTemplate
                mainTitle={entry.getIn(["data", "mainTitle"])}
                aboutTitle={entry.getIn(["data", "aboutTitle"])}
                aboutImage={entry.getIn(["data", "aboutImage"])}
                aboutPattern={entry.getIn(["data", "aboutPattern"])}
                paragraphs={entry.getIn(["data", "paragraphs"])}
                treatments={entry.getIn(["data", "treatments"])}
                facialTitle={entry.getIn(["data", "facialTitle"])}
                facialTypes={entry.getIn(["data", "facialTypes"])}
                openingTitle={entry.getIn(["data", "openingTitle"])}
                openingTimes={entry.getIn(["data", "openingTimes"])}
                openingDays={entry.getIn(["data", "openingDays"])}
                locationTitle={entry.getIn(["data", "locationTitle"])}
                locationAddress={entry.getIn(["data", "locationAddress"])}
                contactTitle={entry.getIn(["data", "contactTitle"])}
                contactImage={entry.getIn(["data", "contactImage"])}
                contactDetails={entry.getIn("data", "contactDetails")}
            />
        );
    } else {
        return <div>Loading...</div>;
    }
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default IndexPagePreview;
